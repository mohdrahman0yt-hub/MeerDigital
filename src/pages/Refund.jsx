import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { siteConfig } from '../config/site'

export default function Refund() {
  return (
    <>
      <SEO
        title="Refund & Cancellation Policy"
        description={`Understand fee structures, statutory expenses, and refund guidelines at ${siteConfig.name}.`}
        path="/refund"
      />

      <PageHero
        eyebrow="Legal & Governance"
        title="Refund Policy"
        description="Effective Date: 10 November 2026. Clear guidelines on service fees, milestone cancellations, and statutory disbursements."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>1. Professional Agency Fees</h2>
          <p>
            At {siteConfig.name}, our professional services involve allocated specialist time, design
            sprints, catalogue drafting, and technical engineering. Because of the bespoke labor
            invested:
          </p>
          <ul>
            <li>
              Fees for milestones that have already been commenced, drafted, or delivered in accordance
              with the signed service proposal are non-refundable.
            </li>
            <li>
              If a client requests a project pause or cancellation before work on a scheduled milestone
              begins, any unutilized advance balance for that specific uninitiated phase is eligible for
              refund or credit towards future services.
            </li>
          </ul>

          <h2>2. Government Fees & Third-Party Outlays</h2>
          <p>
            Statutory disbursements paid to government registries (including GST application fees,
            Trademark Registry filing charges), media budgets paid to ad networks (Google Ads, Meta),
            marketplace onboarding deposits, or domain/hosting registrar costs are non-refundable once
            remitted to the respective third-party entity.
          </p>

          <h2>3. Monthly Retainer Cancellations</h2>
          <p>
            For ongoing monthly marketplace management or website maintenance retainers, clients may
            terminate or pause services with written notice as defined in their scope agreement (typically
            15 days notice prior to the upcoming billing cycle).
          </p>

          <h2>4. Dispute Resolution & Contact</h2>
          <p>
            If you experience an issue with service delivery or invoice reconciliation, please notify
            our management desk at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {siteConfig.contact.email}
            </a>
            . We are committed to transparent, fair resolution.
          </p>
        </div>
      </section>
    </>
  )
}
