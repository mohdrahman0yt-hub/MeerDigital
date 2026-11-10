const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const indianPhonePattern = /^(\+91[\s-]?)?[6-9]\d{9}$/

export function validateEnquiry(values) {
  const errors = {}
  const name = values.fullName?.trim() || ''
  const phone = values.phone?.trim() || ''
  const email = values.email?.trim() || ''
  const message = values.message?.trim() || ''

  if (name.length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!indianPhonePattern.test(phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.businessType) {
    errors.businessType = 'Select your business type.'
  }

  if (!values.service) {
    errors.service = 'Select the service you need.'
  }

  if (message.length < 10) {
    errors.message = 'Please share a little more detail (at least 10 characters).'
  }

  return errors
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0
}
