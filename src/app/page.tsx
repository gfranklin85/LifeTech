import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ForVendorsPreview } from '@/components/sections/ForVendorsPreview'
import { ForHomeownersPreview } from '@/components/sections/ForHomeownersPreview'
import { FoundersSection } from '@/components/sections/FoundersSection'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ForHomeownersPreview />
      <ForVendorsPreview />
      <FoundersSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
