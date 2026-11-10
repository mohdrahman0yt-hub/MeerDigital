import SEO from '../components/seo/SEO'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { siteConfig } from '../config/site'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description={`The requested page is not available on ${siteConfig.name}.`}
        path="/404"
      />
      <PageHero
        eyebrow="404 Error"
        title="This page could not be located."
        description="The link you followed may be expired or moved. Explore our core services or return to the homepage."
        actions={
          <>
            <Button to="/">Return to Homepage</Button>
            <Button to="/services" variant="ghost">
              Browse All Services
            </Button>
          </>
        }
      />
    </>
  )
}
