import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { siteConfig } from '../config/site'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`Learn how ${siteConfig.name} collects, protects, and manages customer enquiry and documentation data.`}
        path="/privacy"
      />

      <PageHero
        eyebrow="Legal & Governance"
        title="Privacy Policy"
        description={`Effective Date: 10 November 2026. This operational policy governs information collected across the ${siteConfig.name} digital platform.`}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <p className="legal-meta">
            This document sets out the operational data collection standards for {siteConfig.name} (operated in India).
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you initiate a consultation or submit an enquiry via our website, we collect the
            following business details:
          </p>
          <ul>
            <li>Full Name and designated contact person</li>
            <li>10-Digit Mobile Number (used for operational consultation and WhatsApp communication)</li>
            <li>Corporate or Personal Email Address</li>
            <li>Registered Business Name (optional)</li>
            <li>Business Entity Type (e.g. Manufacturer, Wholesaler, Startup, Online Seller)</li>
            <li>Selected Service Interest and detailed requirement brief</li>
            <li>Submission timestamp and originating page pathway</li>
          </ul>

          <h2>2. How Your Data Is Utilized</h2>
          <p>
            The collected information is utilized strictly to evaluate project scope, formulate
            transparent commercial quotations, and communicate operational milestones. We maintain a
            strict zero-spam policy: we never sell, lease, or distribute your contact details to
            unauthorized third-party telemarketers or external brokerages.
          </p>

          <h2>3. Document Security & Storage</h2>
          <p>
            Client KYC documents, GST certificates, trademark disclosures, and catalogue files shared
            during service execution are treated with strict professional confidentiality. Technical
            data submitted via the enquiry form is persisted securely in our protected database or
            file vault.
          </p>

          <h2>4. Third-Party Marketplace Services</h2>
          <p>
            For clients engaging our marketplace onboarding or GST compliance services, necessary
            authorized details are processed exclusively through government tax portals (GSTN) or
            approved marketplace seller central engines (Meesho, Flipkart, Amazon) with your explicit
            consent.
          </p>

          <h2>5. Privacy Contact & Data Deletion</h2>
          <p>
            To request data deletion, review recorded enquiry details, or address privacy inquiries,
            contact our compliance desk at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
