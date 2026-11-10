import { Navigate, useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  FileCheck,
  ListOrdered,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import EnquiryForm from '../components/ui/EnquiryForm'
import FAQAccordion from '../components/ui/FAQAccordion'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import ServiceIcon from '../components/ui/ServiceIcon'
import { getServiceBySlug, services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <SEO
        title={`${service.title} — Business Solutions`}
        description={service.summary}
        path={`/services/${service.slug}`}
      />

      <div className="container" style={{ paddingTop: 28 }}>
        <Link
          to="/services"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          <ArrowLeft size={16} /> Back to All Services
        </Link>
      </div>

      <PageHero
        eyebrow={`Service Tier · ${service.number}`}
        title={service.title}
        description={service.description}
        actions={
          <>
            <Button to="#enquiry-section" size="lg">
              Enquire About This Service
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View Pricing & Quotes
            </Button>
          </>
        }
      />

      {/* Scope and Benefits Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <div className="eyebrow">Service Breakdown</div>
            <h2>What Is Included</h2>
            <p className="muted">
              Every engagement under this pillar includes structured deliverables without hidden exclusions.
            </p>
            <div
              className="card"
              style={{
                padding: '24px 28px',
                marginBottom: 32,
                border: '1px solid rgba(99, 56, 232, 0.15)',
              }}
            >
              <ul className="offer-list" style={{ margin: 0, gap: 12 }}>
                {service.offerings.map((offering) => (
                  <li key={offering} style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--dark)' }}>
                    <span className="offer-bullet" style={{ background: 'var(--primary)', color: '#fff' }}>
                      <CheckCircle2 size={13} />
                    </span>
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Key Strategic Benefits</h2>
            <ul className="offer-list" style={{ gap: 14 }}>
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="offer-bullet" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                    <Sparkles size={13} />
                  </span>
                  <span style={{ fontSize: '0.95rem', lineHeight: 1.55 }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Workflow & Prerequisites */}
          <Reveal>
            <article className="card" style={{ padding: '34px 30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <ListOrdered size={22} style={{ color: 'var(--primary)' }} />
                <h3 style={{ margin: 0 }}>Step-by-Step Delivery Workflow</h3>
              </div>
              <ol
                style={{
                  paddingLeft: 20,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 28,
                  fontSize: '0.95rem',
                }}
              >
                {service.workflow.map((step) => (
                  <li key={step} style={{ marginBottom: 10 }}>
                    {step}
                  </li>
                ))}
              </ol>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  borderTop: '1px solid var(--line-subtle)',
                  paddingTop: 24,
                  marginBottom: 16,
                }}
              >
                <FileCheck size={22} style={{ color: 'var(--secondary)' }} />
                <h3 style={{ margin: 0 }}>What We Need From You</h3>
              </div>
              <ul className="offer-list" style={{ margin: 0, gap: 10 }}>
                {service.requirements.map((req) => (
                  <li key={req}>
                    <span className="offer-bullet">
                      <CheckCircle2 size={12} />
                    </span>
                    <span style={{ fontSize: '0.9rem' }}>{req}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FAQs and Embedded Enquiry Form */}
      <section id="enquiry-section" className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <div>
            <div className="eyebrow">Service Questions</div>
            <h2>Frequently Asked Questions</h2>
            <p className="muted" style={{ marginBottom: 24 }}>
              Common questions and operational details regarding {service.title}.
            </p>
            <FAQAccordion items={service.faqs} />
          </div>

          <div className="card" style={{ padding: '34px 30px' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              Consultation Desk
            </div>
            <h3 style={{ fontSize: '1.45rem', marginBottom: 8 }}>
              Enquire About {service.shortTitle}
            </h3>
            <p className="muted" style={{ fontSize: '0.92rem', marginBottom: 20 }}>
              Submit your enquiry to receive a tailored scope, required checklist, and transparent
              pricing quotation.
            </p>
            <EnquiryForm defaultService={service.title} />
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Explore More</div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: 24 }}>Other Service Categories</h2>
          <div className="grid-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((other) => (
                <article key={other.slug} className="card service-card" style={{ padding: '24px 20px' }}>
                  <div className="service-header-row">
                    <div className="icon-wrap" style={{ margin: 0 }}>
                      <ServiceIcon name={other.icon} />
                    </div>
                    <span className="service-number">{other.number}</span>
                  </div>
                  <h3>{other.title}</h3>
                  <p>{other.summary}</p>
                  <Link className="link-arrow" to={`/services/${other.slug}`}>
                    Explore Service Details →
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
