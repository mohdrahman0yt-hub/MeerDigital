import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { Enquiry } from './models/Enquiry.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const app = express()
const port = Number(process.env.PORT) || 5000
const mongoUri = process.env.MONGODB_URI || ''

// Local filesystem fallback storage directory
const dataDir = path.join(__dirname, 'data')
const enquiriesFilePath = path.join(dataDir, 'enquiries.json')

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}
if (!fs.existsSync(enquiriesFilePath)) {
  fs.writeFileSync(enquiriesFilePath, '[]', 'utf8')
}

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }))
app.use(express.json({ limit: '100kb' }))

let mongoReady = false

async function connectDb() {
  if (!mongoUri) {
    console.warn(
      'MONGODB_URI is not set. Enquiries will be persisted to local data/enquiries.json until MongoDB is configured.'
    )
    return
  }
  try {
    await mongoose.connect(mongoUri)
    mongoReady = true
    console.log('MongoDB connected successfully')
  } catch (err) {
    mongoReady = false
    console.warn('MongoDB connection failed. Falling back to local file storage.', err.message)
  }
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'meerdigital-api',
    storage: mongoReady ? 'mongodb' : 'filesystem',
    mongoReady,
    timestamp: new Date().toISOString(),
  })
})

app.post('/api/enquiries', async (req, res) => {
  const { fullName, phone, email, businessName, businessType, service, message, source } =
    req.body || {}

  if (!fullName || !phone || !email || !businessType || !service || !message) {
    return res.status(400).json({
      ok: false,
      message: 'Please complete all required enquiry fields.',
    })
  }

  const referenceId = `MD-${Date.now().toString().slice(-6)}`
  const record = {
    referenceId,
    fullName: fullName.trim(),
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    businessName: (businessName || '').trim(),
    businessType,
    service,
    message: message.trim(),
    source: source || 'direct',
    createdAt: new Date().toISOString(),
  }

  // 1. Try MongoDB if connected
  if (mongoReady) {
    try {
      const enquiry = await Enquiry.create(record)
      return res.status(201).json({
        ok: true,
        id: enquiry._id,
        referenceId,
        storage: 'mongodb',
        message: 'Enquiry saved securely in MongoDB database.',
      })
    } catch (error) {
      console.error('MongoDB write failed, attempting fallback:', error)
    }
  }

  // 2. Local JSON file persistence fallback
  try {
    let existing = []
    if (fs.existsSync(enquiriesFilePath)) {
      const fileData = fs.readFileSync(enquiriesFilePath, 'utf8')
      existing = JSON.parse(fileData || '[]')
    }
    existing.push(record)
    fs.writeFileSync(enquiriesFilePath, JSON.stringify(existing, null, 2), 'utf8')

    return res.status(201).json({
      ok: true,
      referenceId,
      storage: 'filesystem',
      message: 'Enquiry received and saved to local server storage.',
    })
  } catch (fileErr) {
    console.error('File write failed:', fileErr)
    return res.status(500).json({
      ok: false,
      message: 'Could not record enquiry due to an internal server error.',
    })
  }
})

// Optional GET to inspect enquiries during testing
app.get('/api/enquiries', (_req, res) => {
  try {
    if (fs.existsSync(enquiriesFilePath)) {
      const fileData = fs.readFileSync(enquiriesFilePath, 'utf8')
      const records = JSON.parse(fileData || '[]')
      return res.json({ ok: true, count: records.length, enquiries: records })
    }
    return res.json({ ok: true, count: 0, enquiries: [] })
  } catch {
    return res.status(500).json({ ok: false, message: 'Could not read enquiries.' })
  }
})

connectDb()
  .catch((error) => {
    mongoReady = false
    console.error('MongoDB error:', error.message)
  })
  .finally(() => {
    app.listen(port, () => {
      console.log(`MeerDigital API running on http://127.0.0.1:${port}`)
    })
  })
