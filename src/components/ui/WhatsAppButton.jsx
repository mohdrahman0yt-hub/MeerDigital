import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../config/site'

function digitsOnly(value) {
  return (value || '').replace(/\D/g, '')
}

export default function WhatsAppButton() {
  const number = digitsOnly(siteConfig.contact.whatsapp)
  const label = 'Chat with us on WhatsApp'

  const message = encodeURIComponent(
    `Hello ${siteConfig.name}, I would like to discuss a business requirement for my company.`
  )
  const href = number ? `https://wa.me/${number}?text=${message}` : '/contact'

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        className="wa-btn"
        href={href}
        target={number ? '_blank' : '_self'}
        rel="noreferrer"
        aria-label={label}
      >
        <span className="wa-btn-pulse" />
        <MessageCircle size={28} />
      </a>
    </aside>
  )
}
