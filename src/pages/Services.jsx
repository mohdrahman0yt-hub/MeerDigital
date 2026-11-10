import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import ServiceIcon from '../components/ui/ServiceIcon'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Complete Business Solutions & Services"
        description="Explore MeerDigital's six core service categories: GST compliance, marketplace setup, websites, trademark and branding, e-commerce management, and digital marketing."
        path="/services"
      />

      <PageHero
        eyebrow="Integrated Service Suites"
        title="Complete solutions for every stage of your business."
        description="Choose a specialized category to explore in-depth benefits, workflows, prerequisites, and FAQs. Combine multiple tracks for an integrated, one-stop growth solution."
        actions={
          <Button to="/contact" size="lg">
            Request a Scoped Quotation
          </Button>
        }
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <article className="card service-card">
                <div>
                  <div className="service-header-row">
                    <div className="icon-wrap" style={{ margin: 0 }}>
                      <ServiceIcon name={service.icon} />
                    </div>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 6,
                    }}
                  >
                    {service.category}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="offer-list">
                    {service.offerings.map((item) => (
                      <li key={item}>
                        <span className="offer-bullet">
                          <CheckCircle2 size={12} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link className="link-arrow" to={`/services/${service.slug}`}>
                    Explore Service Details <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cross-Sell Consultation Band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Need an Integrated Multi-Service Package?</h2>
            <p>
              Many businesses need GST, marketplace onboarding, and website development at the same
              time. We assemble custom combinations with coordinated milestones and single-point
              accountability.
            </p>
            <div className="cta-actions">
              <Button to="/contact" variant="white" size="lg">
                Get a Combined Quote
              </Button>
              <Button to="/pricing" variant="ghost" size="lg" className="btn-on-dark">
                View Engagement Tiers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
