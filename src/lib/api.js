import { siteConfig } from '../config/site'

async function parseResponse(response) {
  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return response.json()
  }
  return null
}

export async function submitEnquiry(payload) {
  const endpoint = `${siteConfig.apiUrl.replace(/\/$/, '')}/enquiries`
  let response

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // Backend server is not running or unreachable
    // Save draft safely to localStorage so work is not lost
    const referenceId = `OFFLINE-${Date.now().toString().slice(-6)}`
    const localRecord = { ...payload, referenceId, storedLocally: true }

    try {
      const existing = JSON.parse(localStorage.getItem('meerdigital_enquiries') || '[]')
      existing.push(localRecord)
      localStorage.setItem('meerdigital_enquiries', JSON.stringify(existing))
    } catch {
      // ignore localStorage quota errors
    }

    throw new Error(
      `The backend API server is currently unreachable. Your enquiry has been preserved in your browser session (Ref: #${referenceId}). Please message our team directly on WhatsApp or Email.`
    )
  }

  const data = await parseResponse(response)

  if (!response.ok) {
    const message =
      data?.message ||
      'We could not save your enquiry. Please verify your details or contact us directly.'
    throw new Error(message)
  }

  return data
}

export async function checkApiHealth() {
  try {
    const response = await fetch(`${siteConfig.apiUrl.replace(/\/$/, '')}/health`)
    if (!response.ok) return { ok: false }
    return response.json()
  } catch {
    return { ok: false }
  }
}
