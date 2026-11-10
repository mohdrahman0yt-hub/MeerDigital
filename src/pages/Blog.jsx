import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Search } from 'lucide-react'
import SEO from '../components/seo/SEO'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { blogPosts } from '../data/blog'

export default function Blog() {
  const [search, setSearch] = useState('')
  const [selectedCat, setSelectedCat] = useState('All')

  const categories = ['All', 'Business setup', 'Marketplaces', 'Websites']

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCat = selectedCat === 'All' || post.category === selectedCat
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [search, selectedCat])

  return (
    <>
      <SEO
        title="Business Insights & Guides — MeerDigital Journal"
        description="Practical operational guides on GST registration, marketplace selling on Meesho/Flipkart/Amazon, and modern e-commerce storefront development in India."
        path="/blog"
      />

      <PageHero
        eyebrow="Insights & Educational Resources"
        title="Notes on building, complying, and selling in India."
        description="Clear, actionable guides written to help entrepreneurs and online sellers make informed operational decisions — without confusing legalese."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Search & Filter Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 32,
            }}
          >
            <div className="filters" style={{ margin: 0 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${selectedCat === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', width: 'min(100%, 300px)' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 14px 9px 36px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--line)',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted)',
                }}
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid-3">
            {filteredPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <article className="card post-card" style={{ padding: '28px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="demo-chip">{post.category}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <p className="muted" style={{ marginTop: 12, fontSize: '0.82rem' }}>
                    Published: {post.date}
                  </p>

                  <h3 style={{ fontSize: '1.25rem', margin: '8px 0 10px' }}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="muted" style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                    {post.excerpt}
                  </p>

                  <Link className="link-arrow" to={`/blog/${post.slug}`}>
                    Read Full Guide <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="card" style={{ padding: 48, textAlign: 'center' }}>
              <h3>No matching articles found</h3>
              <p className="muted">Try adjusting your search query or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
