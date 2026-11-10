import mongoose from 'mongoose'

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    businessName: { type: String, trim: true, default: '' },
    businessType: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    source: { type: String, default: '' },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
)

export const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema)
