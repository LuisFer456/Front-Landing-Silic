import { SkipLink } from '../components/shared/SkipLink'
import { BenefitsSection } from './BenefitsSection'
import { EditorialBlockSection } from './EditorialBlockSection'
import { FeaturedDropSection } from './FeaturedDropSection'
import { FinalCtaSection } from './FinalCtaSection'
import { FooterSection } from './FooterSection'
import { HeroSection } from './HeroSection'
import { NavbarSection } from './NavbarSection'
import { TestimonialsSection } from './TestimonialsSection'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-zinc-100">
      <SkipLink />
      <NavbarSection />
      <main id="main-content">
        <HeroSection />
        <FeaturedDropSection />
        <EditorialBlockSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </div>
  )
}
