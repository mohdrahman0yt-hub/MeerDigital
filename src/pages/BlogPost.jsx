import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { siteConfig } from '../config/site'
import { getPostBySlug } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <SEO
        title={`${post.title} — ${siteConfig.name} Insights`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <div className="container" style={{ paddingTop: 28 }}>
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--muted)',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>
      </div>

      <PageHero
        eyebrow={`Category · ${post.category}`}
        title={post.title}
        description={post.excerpt}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--line-subtle)',
              paddingBottom: 16,
              marginBottom: 28,
              fontSize: '0.88rem',
              color: 'var(--muted)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={15} /> Published: {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={15} /> {post.readTime}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <User size={15} /> Editorial Team
            </span>
          </div>

          {post.demo && (
            <div className="price-note" style={{ marginBottom: 28 }}>
              <strong>Editorial Notice:</strong> This article serves as an educational sample
              demonstrating {siteConfig.name} content architecture and layout presentation.
            </div>
          )}

          {post.content.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '1.04rem', lineHeight: 1.75 }}>
              {paragraph}
            </p>
          ))}

          {/* Consultation Cross-sell */}
          <div
            className="card"
            style={{
              padding: '32px 28px',
              marginTop: 48,
              background: 'linear-gradient(135deg, #f9f8fe 0%, #f1edfe 100%)',
              border: '1px solid rgba(99, 56, 232, 0.15)',
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: 8 }}>
              Need Help Applying This to Your Business?
            </h3>
            <p className="muted" style={{ marginBottom: 20 }}>
              Speak directly with a {siteConfig.name} growth consultant to map your GST, marketplace,
              or digital presence requirements.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button to="/contact" size="sm">
                Book a Free Consultation <ArrowRight size={16} />
              </Button>
              <Button to="/services" variant="ghost" size="sm">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
