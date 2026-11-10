import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import SEO from '../components/seo/SEO'
import { organizationJsonLd } from '../components/seo/schema'
import EnquiryForm from '../components/ui/EnquiryForm'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { siteConfig } from '../config/site'

function ContactCard({ icon: Icon, label, value, sub, href }) {
  return (
    <article className="card" style={{ padding: '22px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div className="icon-wrap" style={{ margin: 0, width: 44, height: 44 }}>
        <Icon size={20} />
      </div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--dark)' }}>{label}</strong>
        <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: 2 }}>
          {href ? (
            <a href={href} style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {value}
            </a>
          ) : (
            <span>{value}</span>
          )}
        </div>
        {sub && <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>{sub}</span>}
      </div>
    </article>
  )
}

export default function Contact() {
  const { contact } = siteConfig
  const wa = contact.whatsapp.replace(/\D/g, '')

  return (
    <>
      <SEO
        title="Contact Us & Book Free Consultation"
        description="Get in touch with MeerDigital for GST registration, marketplace setup, e-commerce development, and branding support across India."
        path="/contact"
        jsonLd={organizationJsonLd()}
      />

      <PageHero
        eyebrow="Consultation Desk"
        title="Tell us what you are building."
        description="Share a short brief about your business, products, or required service. Our team will review your requirements and respond with a scoped proposal and milestone plan."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          {/* Main Enquiry Form */}
          <Reveal>
            <div className="card" style={{ padding: '36px 30px' }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                Direct Intake
              </div>
              <h2 style={{ fontSize: '1.65rem', marginBottom: 6 }}>
                Submit Your Business Enquiry
              </h2>
              <p className="muted" style={{ fontSize: '0.92rem', marginBottom: 24 }}>
                Fill out the form below. We ensure complete confidentiality of your business ideas,
                catalogues, and documentation.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>

          {/* Contact Details & Direct Reaches */}
          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gap: 16 }}>
              <ContactCard
                icon={Mail}
                label="Direct Email"
                value={contact.email}
                sub="Average response within 2-4 business hours"
                href={`mailto:${contact.email}`}
              />

              <ContactCard
                icon={Phone}
                label="Telephone / Consultation Line"
                value={contact.phone}
                sub="Monday to Saturday, 9:30 AM to 6:30 PM IST"
                href={`tel:${contact.phone}`}
              />

              <ContactCard
                icon={MessageCircle}
                label="WhatsApp Business Desk"
                value={contact.whatsapp}
                sub="Fast-track chat for document checklists & quotes"
                href={`https://wa.me/${wa}?text=Hello%20${siteConfig.name},%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.`}
              />

              <ContactCard
                icon={MapPin}
                label="Operating Coverage"
                value={`${siteConfig.region} (Pan-India Remote Delivery)`}
                sub={contact.address}
              />

              {/* Consultation Ethics Notice */}
              <article
                className="card"
                style={{
                  padding: 24,
                  background: 'linear-gradient(145deg, #fbfaff, #f4f0ff)',
                  border: '1px solid rgba(99, 56, 232, 0.15)',
                }}
              >
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                  <ShieldCheck size={20} style={{ color: 'var(--primary)' }} />
                  <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Our Consultation Guarantee</h4>
                </div>
                <p className="muted" style={{ fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
                  A consultation with {siteConfig.name} is a scoping conversation — not an aggressive
                  sales pitch. We evaluate feasibility, outline exact government vs agency fees, and
                  advise you honestly on whether your catalogue is ready for marketplace launch.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
