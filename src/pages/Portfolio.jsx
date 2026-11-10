import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react'
import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { portfolioFilters, portfolioProjects } from '../data/portfolio'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return portfolioProjects
    return portfolioProjects.filter((p) => p.category === filter)
  }, [filter])

  // Close modal on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setActiveProject(null)
    }
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [activeProject])

  return (
    <>
      <SEO
        title="Portfolio & Project Showcase — Demo Case Studies"
        description="Explore demonstration case studies and craft samples across e-commerce storefronts, business websites, marketplace onboarding, and brand identity systems."
        path="/portfolio"
      />

      <PageHero
        eyebrow="Craft Samples & Demos"
        title="Demonstration work, clearly labelled as demos."
        description="Until live client projects are published with written authorization, this showcase exhibits demonstration concepts illustrating our technical architecture, design fidelity, and operational standards."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div className="filters" role="tablist" aria-label="Portfolio category filters">
            {portfolioFilters.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.04}>
                <article
                  className="card project-card"
                  onClick={() => setActiveProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveProject(project)
                  }}
                  aria-label={`Inspect case study for ${project.title}`}
                >
                  <div className="project-frame" style={{ background: project.accent }}>
                    <div className="browser-bar">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="project-mockup-body">
                      <div>
                        <strong>{project.title}</strong>
                        <div style={{ fontSize: '0.78rem', opacity: 0.9, marginTop: 4 }}>
                          {project.clientType}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="demo-chip">{project.tag}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700 }}>
                      Inspect Case Study →
                    </span>
                  </div>

                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', margin: '10px 0 4px', fontWeight: 600 }}>
                    {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal-dialog"
              initial={{ scale: 0.95, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 14 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveProject(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                <span className="demo-chip">{activeProject.tag}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 600 }}>
                  {activeProject.category} · {activeProject.clientType}
                </span>
              </div>

              <h2 style={{ fontSize: '1.8rem', marginBottom: 16 }}>{activeProject.title}</h2>

              {/* Mockup Banner */}
              <div
                style={{
                  background: activeProject.accent,
                  borderRadius: 'var(--radius-sm)',
                  padding: '24px 20px',
                  color: '#fff',
                  marginBottom: 24,
                  textAlign: 'center',
                }}
              >
                <div className="browser-bar" style={{ background: 'rgba(0,0,0,0.2)', marginBottom: 14 }}>
                  <i />
                  <i />
                  <i />
                </div>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '1.25rem' }}>{activeProject.title}</h4>
                <p style={{ margin: '6px 0 0', opacity: 0.85, fontSize: '0.88rem' }}>
                  {activeProject.summary}
                </p>
              </div>

              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 6 }}>The Challenge</h4>
                <p className="muted" style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {activeProject.challenge}
                </p>
              </div>

              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 6 }}>The Strategic Solution</h4>
                <p className="muted" style={{ fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {activeProject.solution}
                </p>
              </div>

              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Deliverables Included</h4>
                <ul className="offer-list" style={{ margin: 0, gap: 8 }}>
                  {activeProject.deliverables.map((item) => (
                    <li key={item}>
                      <span className="offer-bullet">
                        <CheckCircle2 size={12} />
                      </span>
                      <span style={{ fontSize: '0.9rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: 28 }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Technologies & Platforms</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        background: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--dark)',
                        border: '1px solid var(--line-subtle)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <Button
                  to="/contact"
                  size="sm"
                  onClick={() => setActiveProject(null)}
                >
                  Request Similar Project <ArrowRight size={16} />
                </Button>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setActiveProject(null)}
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
