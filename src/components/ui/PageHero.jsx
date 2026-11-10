import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h1>{title}</h1>
          {description ? <p className="lead muted" style={{ maxWidth: '58ch', fontSize: '1.08rem' }}>{description}</p> : null}
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </Reveal>
      </div>
    </section>
  )
}
