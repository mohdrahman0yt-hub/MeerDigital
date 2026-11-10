import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const nodeBin = process.execPath

console.log('🚀 Starting MeerDigital Full-Stack Platform...')

// 1. Start Backend Express API (Port 5000)
const serverScript = path.join(__dirname, 'server', 'index.js')
const serverProcess = spawn(nodeBin, [serverScript], {
  cwd: __dirname,
  stdio: 'inherit',
  env: { ...process.env, PATH: `C:\\nodejs;${process.env.PATH}` },
})

// 2. Start Frontend Vite Dev Server (Port 5173, Host enabled for browser access)
const viteScript = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js')
const viteProcess = spawn(nodeBin, [viteScript, '--host', '--port', '5173'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: { ...process.env, PATH: `C:\\nodejs;${process.env.PATH}` },
})

function cleanup() {
  console.log('\n🛑 Stopping servers...')
  try {
    serverProcess.kill()
  } catch {}
  try {
    viteProcess.kill()
  } catch {}
  process.exit(0)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
process.on('exit', cleanup)
