import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import { siteConfig } from '../config/site'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description={`General terms of service and consultation conditions for ${siteConfig.name}.`}
        path="/terms"
      />

      <PageHero
        eyebrow="Legal & Governance"
        title="Terms & Conditions"
        description="Effective Date: 10 November 2026. Standard terms governing website access and commercial engagements."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>1. Introduction & Acceptance</h2>
          <p>
            Welcome to {siteConfig.name}. By accessing this website or submitting an enquiry for business
            solutions, you agree to comply with and be bound by these Terms and Conditions. If you
            disagree with any part of these terms, please refrain from using our services.
          </p>

          <h2>2. Nature of Professional Services</h2>
          <p>
            {siteConfig.name} provides operational facilitation, technical development, brand identity
            crafting, and procedural assistance. Specifically:
          </p>
          <ul>
            <li>
              <strong>Assistance, Not Government Approvals:</strong> GST registrations, trademark
              grants, and marketplace seller account approvals are determined exclusively by the
              respective statutory government departments (GSTN, Controller General of Patents, Designs
              and Trademarks) or private marketplace platform policies (Meesho, Flipkart, Amazon). We
              assist with documentation completeness and process guidance; approval outcomes cannot be
              legally guaranteed.
            </li>
            <li>
              <strong>Scope of Tax & Legal Advice:</strong> Our compliance team facilitates routine
              filings and documentation. For complex corporate litigation, advance tax planning, or
              formal audit certification, services must be reviewed in conjunction with certified
              Chartered Accountants or legal advocates.
            </li>
          </ul>

          <h2>3. Quotations & External Fees</h2>
          <p>
            All fee quotations issued by {siteConfig.name} represent agency service fees for skilled
            labor, design, and operational hours. Statutory fees payable to government bodies (such as
            statutory TM-A fees), ad spend paid to Google/Meta, marketplace security deposits, and
            domain/server hosting are third-party liabilities and are itemized separately.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            Clients agree to furnish authentic, verifiable documentation, tax numbers, and product
            specifications. {siteConfig.name} is not liable for regulatory penalties arising from
            inaccurate, fraudulent, or withheld source data supplied by the client.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Upon full settlement of professional invoices for custom website code, brand logos, or
            catalogue assets, intellectual property rights for the finalized work are transferred to the
            client as stipulated in their specific service agreement.
          </p>
        </div>
      </section>
    </>
  )
}
