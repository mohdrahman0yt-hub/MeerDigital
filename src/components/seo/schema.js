import { siteConfig } from '../../config/site'

export function organizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    legalName: siteConfig.brandName,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: siteConfig.region,
    slogan: siteConfig.tagline,
  }

  if (siteConfig.contact.email) data.email = siteConfig.contact.email
  if (siteConfig.contact.phone) data.telephone = siteConfig.contact.phone

  return data
}
