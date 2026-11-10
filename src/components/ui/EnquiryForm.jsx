import { useState } from 'react'
import { CheckCircle2, Loader2, Send, MessageCircle, AlertCircle } from 'lucide-react'
import { businessTypes, siteConfig } from '../../config/site'
import { services } from '../../data/services'
import { submitEnquiry } from '../../lib/api'
import { isEmptyObject, validateEnquiry } from '../../lib/validation'
import Button from './Button'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  businessName: '',
  businessType: '',
  service: '',
  message: '',
}

export default function EnquiryForm({ defaultService = '' }) {
  const [values, setValues] = useState({ ...initialForm, service: defaultService })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateEnquiry(values)
    setErrors(validationErrors)

    if (!isEmptyObject(validationErrors)) {
      return
    }

    setStatus('loading')
    setFeedback('')

    try {
      const result = await submitEnquiry({
        ...values,
        source: window.location.pathname,
        submittedAt: new Date().toISOString(),
      })

      setStatus('success')
      setSubmittedData({
        referenceId: result.referenceId || `MD-${Date.now().toString().slice(-6)}`,
        storage: result.storage,
        ...values,
      })
      setValues({ ...initialForm, service: defaultService })
    } catch (err) {
      setStatus('error')
      setFeedback(err.message)
    }
  }

  const waNumber = (siteConfig.contact.whatsapp || '').replace(/\D/g, '')

  if (status === 'success' && submittedData) {
    const waText = encodeURIComponent(
      `Hello ${siteConfig.name}, I submitted an enquiry (Ref: #${submittedData.referenceId}).\nName: ${submittedData.fullName}\nService: ${submittedData.service}\nBusiness: ${submittedData.businessName || submittedData.businessType}\nMessage: ${submittedData.message}`
    )
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`

    return (
      <div className="card" style={{ padding: '36px 28px', textAlign: 'center', border: '1px solid var(--success)' }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'var(--success-bg)',
            color: 'var(--success)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 18px',
          }}
        >
          <CheckCircle2 size={34} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Enquiry Successfully Recorded</h3>
        <p className="muted" style={{ maxWidth: '42ch', margin: '0 auto 20px' }}>
          Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry reference is{' '}
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>#{submittedData.referenceId}</span>.
          Our business solutions team will review your requirements and reach out within 2-4 business hours.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {waNumber && (
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              style={{ background: 'var(--whatsapp)', borderColor: 'var(--whatsapp)' }}
            >
              <MessageCircle size={16} /> Fast-track on WhatsApp
            </a>
          )}
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              setStatus('idle')
              setSubmittedData(null)
            }}
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form-alert info">
        <strong>Direct Consultation Desk:</strong> All enquiries are routed directly to our specialist team for {siteConfig.name} business solutions across India.
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={values.fullName}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number (10-Digit Mobile) *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            value={values.phone}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            required
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. rahul@example.com"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="field">
          <label htmlFor="businessName">Business Name (Optional)</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            placeholder="e.g. Sharma Textiles LLP"
            value={values.businessName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="businessType">Business Type *</label>
          <select
            id="businessType"
            name="businessType"
            value={values.businessType}
            onChange={handleChange}
            required
          >
            <option value="">Select Business Type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.businessType && <div className="error">{errors.businessType}</div>}
        </div>

        <div className="field">
          <label htmlFor="service">Required Service *</label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service Needed</option>
            {services.map((svc) => (
              <option key={svc.slug} value={svc.title}>
                {svc.title}
              </option>
            ))}
            <option value="Custom / Multi-Service Package">
              Custom / Multi-Service Package
            </option>
          </select>
          {errors.service && <div className="error">{errors.service}</div>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Requirement Details *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your requirement, products, target marketplaces, or documents you have ready..."
          value={values.message}
          onChange={handleChange}
          required
        />
        {errors.message && <div className="error">{errors.message}</div>}
      </div>

      {feedback && (
        <div className={`form-alert ${status === 'error' ? 'bad' : 'ok'}`} role="alert">
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>{feedback}</div>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        style={{ width: '100%' }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="spin" /> Submitting Enquiry…
          </>
        ) : (
          <>
            <Send size={18} /> Submit Enquiry & Get Quotation
          </>
        )}
      </Button>
    </form>
  )
}
