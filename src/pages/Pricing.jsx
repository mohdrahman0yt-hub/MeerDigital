import { useState } from 'react'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import EnquiryForm from '../components/ui/EnquiryForm'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { siteConfig } from '../config/site'
import { pricingPlans } from '../data/pricing'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('')

  function handleSelectPlan(planName) {
    setSelectedPlan(planName)
    const formSection = document.getElementById('quote-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEO
        title="Engagement Tiers & Service Quotations"
        description="Explore MeerDigital's engagement packages for business setup, marketplace seller growth, web presence, brand launch, and custom enterprise solutions."
        path="/pricing"
      />

      <PageHero
        eyebrow="Engagement Architecture"
        title="Clear, transparent engagement models. Scoped quotes, not guesswork."
        description="Choose the shape of work that matches your current business stage. Fees are accurately scoped after evaluating your catalogue volume, registration status, or technical website brief."
      />

      {/* Pricing Cards Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.04}>
              <article className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="plan-featured-badge">{plan.badge}</div>
                )}
                <div>
                  <div className="audience">{plan.audience}</div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <ul className="offer-list">
                    {plan.includes.map((inc) => (
                      <li key={inc}>
                        <span className="offer-bullet">
                          <CheckCircle2 size={12} />
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: 26 }}>
                  <Button
                    type="button"
                    variant={plan.featured ? 'white' : 'primary'}
                    style={{ width: '100%' }}
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Get a Quote for {plan.name}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Statutory Disclaimers & Notes */}
        <div className="container" style={{ marginTop: 36 }}>
          <div className="price-note">
            <ShieldAlert size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <span>
              <strong>Important Statutory & Third-Party Disclosure:</strong> Government filing fees
              (such as official GST registration processing, Trademark Registry TM-A statutory fees),
              marketplace deposits, domain registrations, web hosting, and advertising media spend
              (Google Ads, Meta Ads) apply separately where relevant. {siteConfig.name} will clearly
              itemize all applicable statutory and third-party fees prior to your approval.
            </span>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section id="quote-form" className="section" style={{ paddingTop: 10 }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <Reveal className="section-head center">
            <div className="eyebrow">Direct Quotation Request</div>
            <h2>Request a Tailored Scope & Quote</h2>
            <p>
              Tell us about your business, catalogue, or website requirements. We reply with a detailed
              milestone breakdown and exact commercial terms.
            </p>
          </Reveal>

          <div className="card" style={{ padding: '36px 32px' }}>
            <EnquiryForm defaultService={selectedPlan} />
          </div>
        </div>
      </section>
    </>
  )
}
