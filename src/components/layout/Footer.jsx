import { Link } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react'
import { siteConfig } from '../../config/site'
import { services } from '../../data/services'
import Logo from '../ui/Logo'

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16m0-16L4 20"/>
    </svg>
  )
}

const currentYear = new Date().getFullYear()

export default function Footer() {
  const { contact, social } = siteConfig
  const waNumber = contact.whatsapp.replace(/\D/g, '')

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Information */}
        <div className="footer-brand">
          <Logo to="/" showTagline={true} />
          <p>
            {siteConfig.name} is a comprehensive business solutions and e-commerce growth
            partner helping entrepreneurs, manufacturers, wholesalers, startups, and online
            sellers establish, manage, and scale their businesses across India.
          </p>
          <p style={{ color: 'var(--secondary-light)', fontSize: '0.88rem', fontWeight: 600 }}>
            "{siteConfig.coreMessage}"
          </p>
          {/* Social Icons Row */}
          <div className="footer-social-row">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            )}
            {social.x && (
              <a
                href={social.x}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="X / Twitter"
              >
                <XIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <div className="footer-list">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">All Services</Link>
            <Link to="/pricing">Pricing & Quotes</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog & Insights</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* All Services */}
        <div>
          <h4>All Services</h4>
          <div className="footer-list">
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4>Contact & Reach</h4>
          <div className="footer-list">
            
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: 3 }} />
              <div>
              <strong>Business Address:</strong>
              <div>Mangal Bazar Road, Meer Vihar, New Delhi, Delhi - 110081</div>
            </div>
          </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Mail size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Phone size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <MessageCircle size={18} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
              <a
                href={`https://wa.me/${waNumber}?text=Hello%20${siteConfig.name},%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Business Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Legal & Copyright */}
      <div className="container footer-legal">
        <span>
          © {currentYear} {siteConfig.name}. All rights reserved.
        </span>
        <div className="footer-legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/refund">Refund Policy</Link>
        </div>
      </div>
    </footer>
  )
}
