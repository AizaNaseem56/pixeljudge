import SectionTitle from '../ui/SectionTitle'
import FeatureCard from './FeatureCard'

const features = [
  { icon: '📊', title: 'Design Score', text: 'An overall score out of 100 with a category breakdown.' },
  { icon: '📍', title: 'Issue Markers', text: 'Numbered markers placed on the exact problem areas.' },
  { icon: '🎨', title: 'Contrast Checker', text: 'Tests text and background colors against WCAG rules.' },
  { icon: '✨', title: 'Redesign Preview', text: 'A before and after view of an improved design.' },
]

function FeaturesSection() {
  return (
    <section id="features" className="bg-linear-to-b from-mauve to-plum px-6 py-20">
  <SectionTitle
    light
    title="Everything you need to review a design"
    subtitle="From the first score to the final redesign."
  />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(feature => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection