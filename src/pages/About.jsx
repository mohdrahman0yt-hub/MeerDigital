// import { Compass, HeartHandshake, ShieldCheck, Telescope } from 'lucide-react'
// import SEO from '../components/seo/SEO'
// import Button from '../components/ui/Button'
// import PageHero from '../components/ui/PageHero'
// import Reveal from '../components/ui/Reveal'
// import { siteConfig } from '../config/site'

// export default function About() {
//   return (
//     <>
//       <SEO
//         title="About Us — One-Stop Business Solutions Partner"
//         description={`${siteConfig.name} is a comprehensive business solutions partner helping Indian entrepreneurs, manufacturers, wholesalers, and online sellers establish, manage, and scale.`}
//         path="/about"
//       />

//       <PageHero
//         eyebrow={`About ${siteConfig.name}`}
//         title="A one-stop partner for the unglamorous, vital work of building a business."
//         description={`${siteConfig.name} was established for founders and commercial operators who need GST compliance, marketplace operations, modern web engineering, and brand protection — without juggling a disjointed crowd of separate agencies.`}
//       />

//       {/* Main Philosophy & Mission */}
//       <section className="section" style={{ paddingTop: 0 }}>
//         <div className="container grid-2">
//           <Reveal>
//             <div className="eyebrow">Our Philosophy</div>
//             <h2>Who We Are & What We Stand For</h2>
//             <p className="muted" style={{ lineHeight: 1.7 }}>
//               {siteConfig.name} sits at the vital intersection of statutory compliance operations,
//               multi-channel e-commerce logistics, and modern digital engineering. Based in India, we
//               operate remotely across all states to support manufacturers, wholesalers, startups,
//               small business owners, online marketplace sellers, and first-time entrepreneurs.
//             </p>
//             <p className="muted" style={{ lineHeight: 1.7 }}>
//               We adhere to strict operational integrity: we do not invent client numbers, awards, or
//               five-star claims. Real credibility is built in our initial consultation, transparent
//               pricing breakdowns, and dependable day-to-day execution.
//             </p>
//           </Reveal>

//           <Reveal>
//             <article className="card" style={{ padding: '36px 30px' }}>
//               <div className="icon-wrap" style={{ background: 'rgba(99, 56, 232, 0.1)' }}>
//                 <ShieldCheck size={26} />
//               </div>
//               <h3>The Practical Growth Standard</h3>
//               <p className="muted" style={{ lineHeight: 1.65 }}>
//                 Every engagement begins with an audit of what you already have in place: entity documents,
//                 PAN, existing catalogues, trademarks, or digital domains. We map the missing steps in
//                 a sequence aligned with how Indian tax portals, logistics networks, and marketplace
//                 algorithms actually function.
//               </p>
//               <div style={{ marginTop: 18, borderTop: '1px solid var(--line-subtle)', paddingTop: 16 }}>
//                 <span style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 700 }}>
//                   ✓ Transparent Process · Scoped Milestones · Direct Accountability
//                 </span>
//               </div>
//             </article>
//           </Reveal>
//         </div>
//       </section>

//       {/* Guiding Principles */}
//       <section className="section" style={{ paddingTop: 0 }}>
//         <div className="container">
//           <Reveal className="section-head center">
//             <div className="eyebrow">Guiding Values</div>
//             <h2>How We Partner With You</h2>
//             <p>Our work is governed by clarity, honesty, and pragmatic business advice.</p>
//           </Reveal>

//           <div className="grid-3">
//             {[
//               {
//                 icon: Compass,
//                 title: 'Practical Positioning',
//                 text: 'We focus on concrete, tangible outcomes — from clearing GST document approvals to publishing optimized marketplace listings that rank.',
//               },
//               {
//                 icon: Telescope,
//                 title: 'Everything Under One Roof',
//                 text: 'From legal registration and trademark search to e-commerce storefronts and performance ad management, all managed in one synchronized roadmap.',
//               },
//               {
//                 icon: HeartHandshake,
//                 title: 'Long-Term Growth Retainers',
//                 text: 'We build durable relationships. Setup is the first milestone; monthly catalogue hygiene and operational support keep your accounts thriving.',
//               },
//             ].map((val, idx) => (
//               <Reveal key={val.title} delay={idx * 0.05}>
//                 <article className="card why-card">
//                   <div className="icon-wrap">
//                     <val.icon size={22} />
//                   </div>
//                   <h3>{val.title}</h3>
//                   <p>{val.text}</p>
//                 </article>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Band */}
//       <section className="section" style={{ paddingTop: 0 }}>
//         <div className="container">
//           <div className="cta-band">
//             <h2>Prefer a Direct Conversation to a Brochure?</h2>
//             <p>
//               Tell us what products you sell, your target markets, and what is currently holding back
//               your next phase of growth.
//             </p>
//             <div className="cta-actions">
//               <Button to="/contact" variant="white" size="lg">
//                 Book a Free Consultation
//               </Button>
//               <Button to="/services" variant="ghost" size="lg" className="btn-on-dark">
//                 Explore All Services
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }



import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Telescope,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { siteConfig } from '../config/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Us — One-Stop Business Solutions Partner"
        description={`${siteConfig.name} is a comprehensive business solutions partner helping Indian entrepreneurs, manufacturers, wholesalers, and online sellers establish, manage, and scale.`}
        path="/about"
      />

      {/* Page Hero */}
      <PageHero
        eyebrow={`About ${siteConfig.name}`}
        title="A one-stop partner for the unglamorous, vital work of building a business."
        description={`${siteConfig.name} was established for founders and commercial operators who need GST compliance, marketplace operations, modern web engineering, and brand protection — without juggling a disjointed crowd of separate agencies.`}
      />

      {/* Main Philosophy & Mission */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <Reveal>
            <div className="eyebrow">Our Philosophy</div>

            <h2>Who We Are & What We Stand For</h2>

            <p className="muted" style={{ lineHeight: 1.7 }}>
              {siteConfig.name} sits at the vital intersection of statutory
              compliance operations, multi-channel e-commerce logistics,
              and modern digital engineering. Based in India, we operate
              remotely across all states to support manufacturers,
              wholesalers, startups, small business owners, online
              marketplace sellers, and first-time entrepreneurs.
            </p>

            <p className="muted" style={{ lineHeight: 1.7 }}>
              We adhere to strict operational integrity: we do not invent
              client numbers, awards, or five-star claims. Real credibility
              is built in our initial consultation, transparent pricing
              breakdowns, and dependable day-to-day execution.
            </p>
          </Reveal>

          <Reveal>
            <article className="card" style={{ padding: '36px 30px' }}>
              <div
                className="icon-wrap"
                style={{ background: 'rgba(99, 56, 232, 0.1)' }}
              >
                <ShieldCheck size={26} />
              </div>

              <h3>The Practical Growth Standard</h3>

              <p className="muted" style={{ lineHeight: 1.65 }}>
                Every engagement begins with an audit of what you already
                have in place: entity documents, PAN, existing catalogues,
                trademarks, or digital domains. We map the missing steps
                in a sequence aligned with how Indian tax portals,
                logistics networks, and marketplace algorithms actually
                function.
              </p>

              <div
                style={{
                  marginTop: 18,
                  borderTop: '1px solid var(--line-subtle)',
                  paddingTop: 16,
                }}
              >
                <span
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--primary)',
                    fontWeight: 700,
                  }}
                >
                  ✓ Transparent Process · Scoped Milestones · Direct Accountability
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">

            {/* Founder Image */}
            <Reveal>
              <div className="founder-image-wrapper">
                <div className="founder-image-glow" />

                <div className="founder-image-frame">
                  <img
                    src="src/images/founder_rahman.png"
                    alt="Mohd Rahman, Founder of MeerDigital"
                    className="founder-image"
                    loading="lazy"
                  />

                  <div className="founder-image-overlay">
                    <div className="founder-overlay-icon">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <strong>Founder & Leadership</strong>
                      <span>MeerDigital</span>
                    </div>
                  </div>
                </div>

                <div className="founder-floating-badge">
                  <ShieldCheck size={19} />
                  <span>Built on Trust</span>
                </div>
              </div>
            </Reveal>

            {/* Founder Content */}
            <Reveal delay={0.12}>
              <div className="founder-content">
                <div className="eyebrow">
                  Meet the Founder
                </div>

                <h2>
                  Building Practical Solutions for Growing Businesses.
                </h2>

                <h3 className="founder-name">
                  Mohd Rahman
                </h3>

                <p className="founder-designation">
                  Founder & Business Development Lead
                </p>

                <p className="muted founder-description">
                  MeerDigital was founded with a simple vision: make
                  essential business services easier, more accessible,
                  and more reliable for entrepreneurs.
                </p>

                <p className="muted founder-description">
                  With experience in web development, e-commerce
                  marketplace operations, and business service
                  coordination, I focus on helping manufacturers,
                  wholesalers, startups, and online sellers navigate
                  the practical challenges of starting and growing
                  a business.
                </p>

                <p className="muted founder-description">
                  My goal is to bring business setup, GST and MSME
                  assistance, marketplace support, and digital
                  development together under one roof — with
                  transparent communication and a customer-first
                  approach.
                </p>

                <div className="founder-signature">
                  <span className="founder-line" />
                  <span>Mohd Rahman</span>
                </div>

                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                >
                  Let's Connect
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Guiding Values</div>

            <h2>How We Partner With You</h2>

            <p>
              Our work is governed by clarity, honesty, and pragmatic
              business advice.
            </p>
          </Reveal>

          <div className="grid-3">
            {[
              {
                icon: Compass,
                title: 'Practical Positioning',
                text: 'We focus on concrete, tangible outcomes — from clearing GST document approvals to publishing optimized marketplace listings that rank.',
              },
              {
                icon: Telescope,
                title: 'Everything Under One Roof',
                text: 'From legal registration and trademark search to e-commerce storefronts and performance ad management, all managed in one synchronized roadmap.',
              },
              {
                icon: HeartHandshake,
                title: 'Long-Term Growth Retainers',
                text: 'We build durable relationships. Setup is the first milestone; monthly catalogue hygiene and operational support keep your accounts thriving.',
              },
            ].map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.05}>
                <article className="card why-card">
                  <div className="icon-wrap">
                    <val.icon size={22} />
                  </div>

                  <h3>{val.title}</h3>

                  <p>{val.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>
              Prefer a Direct Conversation to a Brochure?
            </h2>

            <p>
              Tell us what products you sell, your target markets,
              and what is currently holding back your next phase
              of growth.
            </p>

            <div className="cta-actions">
              <Button
                to="/contact"
                variant="white"
                size="lg"
              >
                Book a Free Consultation
              </Button>

              <Button
                to="/services"
                variant="ghost"
                size="lg"
                className="btn-on-dark"
              >
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
