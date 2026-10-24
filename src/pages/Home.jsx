import HeroSection from '../components/landing/HeroSection'
import HowItWorks from '../components/landing/HowItWorks'
import FeaturesSection from '../components/landing/FeaturesSection'
import PricingPreview from '../components/landing/PricingPreview'
import FAQSection from '../components/landing/FAQSection'
import CallToAction from '../components/landing/CallToAction'

function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <PricingPreview />
      <FAQSection />
      <CallToAction />
    </main>
  )
}

export default Home