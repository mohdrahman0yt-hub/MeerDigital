import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileCheck2,
  FileSpreadsheet,
  Globe2,
  Handshake,
  Headphones,
  Layers,
  LineChart,
  ShieldCheck,
  Sliders,
  Store,
} from 'lucide-react'
import HeroVisual from '../components/home/HeroVisual'
import SEO from '../components/seo/SEO'
import { organizationJsonLd } from '../components/seo/schema'
import Button from '../components/ui/Button'
import FAQAccordion from '../components/ui/FAQAccordion'
import Reveal from '../components/ui/Reveal'
import ServiceIcon from '../components/ui/ServiceIcon'
import { siteConfig } from '../config/site'
import { homeFaqs } from '../data/faqs'
import { portfolioProjects } from '../data/portfolio'
import { pricingPlans } from '../data/pricing'
import { services } from '../data/services'

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'Business Setup',
    text: 'Rigorous guidance for GST registration, documentation checks, and formal business establishment.',
    highlight: 'Compliance Ready',
  },
  {
    icon: FileCheck2,
    title: 'Compliance Support',
    text: 'Ongoing return filing assistance (GSTR-1 & GSTR-3B) and proactive deadline management.',
    highlight: 'Zero Penalties',
  },
  {
    icon: Store,
    title: 'Marketplace Operations',
    text: 'Complete seller account setup, brand authorization, and catalogue management on Meesho, Flipkart, and Amazon.',
    highlight: 'Multi-Channel',
  },
  {
    icon: Globe2,
    title: 'Digital Presence',
    text: 'Fast, bespoke websites, modern e-commerce storefronts, and memorable brand identity design.',
    highlight: 'High Conversion',
  },
  {
    icon: LineChart,
    title: 'Business Growth',
    text: 'Search engine optimization, targeted Google/Meta advertising, and operational catalogue scale.',
    highlight: 'ROI Driven',
  },
]

const whyItems = [
  {
    icon: Layers,
    title: 'Multiple Solutions Under One Roof',
    text: 'Compliance, marketplace channels, web engineering, branding, and advertising coordinated as one united growth strategy.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Transparent Pricing',
    text: 'Clear quotes scoped to your exact business size. Statutory government fees and media spend are always itemized separately.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Customer Support',
    text: 'A named project coordinator and transparent communications via email, calls, and WhatsApp while your work is in progress.',
  },
  {
    icon: Award,
    title: 'Practical Business Experience',
    text: 'Solutions grounded in real-world Indian commerce — understanding platform algorithms, dispatch SLAs, and tax department rhythms.',
  },
  {
    icon: Sliders,
    title: 'Customized Solutions',
    text: 'We adapt our workflows around your operational stage rather than forcing rigid, pre-packaged corporate retainers.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    text: 'Setup is only the beginning. We provide ongoing operational support for catalogues, websites, and sales campaigns as you scale.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Choose Your Service',
    text: 'Select GST registration, marketplace setup, website development, or combine multiple tracks into an integrated solution.',
  },
  {
    n: '02',
    title: 'Share Your Requirements',
    text: 'Provide your KYC documents, product catalogue sheets, or website brief through our secure consultation intake.',
  },
  {
    n: '03',
    title: 'Get a Consultation',
    text: 'We review scope, verify statutory dependencies, and establish transparent deliverables with a clear cost breakdown.',
  },
  {
    n: '04',
    title: 'Start Your Business Journey',
    text: 'Execution commences with an assigned coordinator, structured milestones, and regular status check-ins until launch.',
  },
]

const industries = [
  {
    name: 'Manufacturers',
    className: 'iv-1',
    tag: 'B2B & D2C',
    desc: 'Expand factory production to direct consumer marketplace sales and national distributor channels.',
  },
  {
    name: 'Wholesalers',
    className: 'iv-2',
    tag: 'B2B Trade',
    desc: 'Digitize bulk catalogues, establish GST-compliant B2B portals, and reach buyers across Indian states.',
  },
  {
    name: 'Startups',
    className: 'iv-3',
    tag: 'Fast Scale',
    desc: 'Establish entity foundation, trademark protection, and launch conversion-optimized digital flagships.',
  },
  {
    name: 'Small Businesses',
    className: 'iv-4',
    tag: 'Retail & Service',
    desc: 'Transition from local storefronts to verified online marketplace sellers with professional branding.',
  },
  {
    name: 'Online Sellers',
    className: 'iv-5',
    tag: 'E-Commerce',
    desc: 'Optimize listings, resolve account health flags, and scale sales across Meesho, Flipkart, and Amazon.',
  },
  {
    name: 'Entrepreneurs',
    className: 'iv-6',
    tag: 'New Ventures',
    desc: 'Turn a product or service concept into an operational, legally compliant company with zero vendor confusion.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Business Solutions & E-commerce Growth Partner"
        description="From GST registration and marketplace management to website development and brand protection, MeerDigital brings everything your business needs under one roof."
        path="/"
        jsonLd={organizationJsonLd()}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="container grid-2">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Everything Your Business Needs
            </div>
            <h1>
              Build Your Business.{' '}
              <span className="gradient-text">Grow Beyond Limits.</span>
            </h1>
            <p className="lead">
              From GST registration and marketplace management to website development and brand
              protection, {siteConfig.name} brings everything your business needs under one roof.
            </p>
            <div className="hero-actions">
              <Button to="/services" size="lg">
                Explore Services <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Book a Free Consultation
              </Button>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-badge-item">
                <CheckCircle2 size={16} /> Pan-India Service
              </div>
              <div className="trust-badge-item">
                <CheckCircle2 size={16} /> Transparent Scoped Quotes
              </div>
              <div className="trust-badge-item">
                <CheckCircle2 size={16} /> Zero Vendor Chaos
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* ================= TRUST / INTRODUCTION SECTION ================= */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Trust & Foundation</div>
            <h2>Your Business Journey, Simplified.</h2>
            <p>
              {siteConfig.name} is built for founders and operators who want to establish, manage, and
              scale their businesses without stitching five disconnected agencies together in the
              first quarter.
            </p>
          </Reveal>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {trustPillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="card feature-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="icon-wrap">
                      <item.icon size={24} />
                    </div>
                    <span className="demo-chip" style={{ fontSize: '0.68rem' }}>
                      {item.highlight}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Service Offerings</div>
            <h2>Complete Solutions for Every Stage of Your Business.</h2>
            <p>
              Six specialized pillars engineered to accompany your business from foundational
              registration to high-velocity marketplace and digital sales.
            </p>
          </Reveal>

          <div className="grid-3">
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
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul className="offer-list">
                      {service.offerings.map((offering) => (
                        <li key={offering}>
                          <span className="offer-bullet">
                            <CheckCircle2 size={12} />
                          </span>
                          <span>{offering}</span>
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
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Why {siteConfig.name}</div>
            <h2>More Than Services. A Partner for Your Growth.</h2>
            <p>
              We prioritize execution over jargon, combining legal process clarity with marketplace
              know-how and modern digital craft.
            </p>
          </Reveal>

          <div className="grid-3">
            {whyItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="card why-card">
                  <div className="icon-wrap">
                    <item.icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (PROCESS) ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Structured Process</div>
            <h2>How It Works</h2>
            <p>A simple, transparent four-step pathway from initial brief to operational excellence.</p>
          </Reveal>

          <div className="steps-container">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.06}>
                <article className="step-card">
                  <div className="step-num-badge">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Target Industries</div>
            <h2>Industries We Serve</h2>
            <p>
              Engineered specifically for business models operating in the Indian commercial and digital
              ecosystem.
            </p>
          </Reveal>

          <div className="grid-3">
            {industries.map((ind, index) => (
              <Reveal key={ind.name} delay={index * 0.04}>
                <article className="card industry-card">
                  <div className={`industry-visual ${ind.className}`}>
                    <span className="industry-card-tag">{ind.tag}</span>
                    <div className="industry-content-bottom">
                      <h3>{ind.name}</h3>
                      <p>{ind.desc}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Transparent Engagements</div>
            <h2>Engagements Quoted for Your Exact Scope</h2>
            <p>
              We do not invent fixed one-size-fits-all prices. Request a tailored quote based on your
              catalogue volume, business size, and required deliverables.
            </p>
          </Reveal>

          <div className="grid-3">
            {pricingPlans.slice(0, 3).map((plan, index) => (
              <Reveal key={plan.id} delay={index * 0.05}>
                <article className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                  {plan.featured && <div className="plan-featured-badge">{plan.badge}</div>}
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
                  <div style={{ marginTop: 24 }}>
                    <Button
                      to="/contact"
                      variant={plan.featured ? 'white' : 'ghost'}
                      style={{ width: '100%' }}
                    >
                      Get a Quote
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="price-note">
            <FileSpreadsheet size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <span>
              <strong>Statutory Disclosure:</strong> Government filing fees, professional charges,
              taxes, and third-party expenses (marketplace deposits, domain names, media ad spend)
              apply separately where relevant. All fees are clearly itemized before you authorize work.{' '}
              <Link to="/pricing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>
                View all 5 engagement tiers →
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Portfolio & Work Samples</div>
            <h2>Selected Craft Samples</h2>
            <p>
              Demonstration projects illustrating our design standards, catalogue architectures, and
              branding work until client case studies are published with written authorization.
            </p>
          </Reveal>

          <div className="grid-3">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} delay={index * 0.05}>
                <article className="card project-card">
                  <div className="project-frame" style={{ background: project.accent }}>
                    <div className="browser-bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="project-mockup-body">
                      <strong>{project.title}</strong>
                    </div>
                  </div>
                  <span className="demo-chip">{project.tag}</span>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', margin: '8px 0 4px', fontWeight: 600 }}>
                    {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <Button to="/portfolio" variant="ghost">
              Explore Full Portfolio Showcase ({portfolioProjects.length} Projects) →
            </Button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Client Feedback Standard</div>
            <h2>Partner Experiences & Commitment</h2>
            <p>
              Transparent engagement standard. We showcase feedback frameworks here — we do not invent
              unverified reviews or fake five-star badges.
            </p>
          </Reveal>

          <div className="grid-3">
            {[
              {
                text: '“Working with MeerDigital removed the anxiety of launching on Meesho and Flipkart. They mapped our catalogue barcodes, guided our GST address proof, and got us live on schedule.”',
                role: 'Sample Feedback Placeholder',
                business: 'Garment Manufacturer · Surat',
              },
              {
                text: '“Having one team coordinate our trademark search, design our new brand identity, and code our e-commerce store saved us months of coordinating multiple freelance vendors.”',
                role: 'Sample Feedback Placeholder',
                business: 'Packaged Organic Foods · Jaipur',
              },
              {
                text: '“Clear scopes and zero false promises. They explained exactly which costs were government fees and which were agency charges. Highly professional execution.”',
                role: 'Sample Feedback Placeholder',
                business: 'Industrial Hardware Wholesaler · Delhi NCR',
              },
            ].map((quote, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <article className="card quote-card">
                  <div>
                    <span className="placeholder-banner">Verification Placeholder</span>
                    <p>{quote.text}</p>
                  </div>
                  <div className="quote-author">
                    <strong>{quote.role}</strong>
                    <span>{quote.business}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2>Plain Answers to Common Questions</h2>
            <p className="muted" style={{ lineHeight: 1.68 }}>
              Everything you need to know about our service models, marketplace timelines, compliance
              processes, and pan-India remote execution.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button to="/contact" variant="ghost">
                Have a Custom Question? Talk to Us
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <FAQAccordion items={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="cta-band">
            <h2>Ready to Take Your Business to the Next Level?</h2>
            <p>Let&apos;s simplify your business operations and build your digital future together.</p>
            <div className="cta-actions">
              <Button to="/contact" variant="white" size="lg">
                Get Started
              </Button>
              <Button to="/contact" variant="ghost" size="lg" className="btn-on-dark">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
