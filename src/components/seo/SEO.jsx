import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../config/site'

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  jsonLd,
}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`
  const desc = description || siteConfig.description
  const url = `${siteConfig.url.replace(/\/$/, '')}${path}`

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
