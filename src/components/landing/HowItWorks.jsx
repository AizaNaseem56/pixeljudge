import SectionTitle from '../ui/SectionTitle'

const steps = [
  { title: 'Upload', text: 'Add a screenshot of any website.' },
  { title: 'Analyze', text: 'AI reviews layout, color and typography.' },
  { title: 'Review', text: 'See marked issues and suggested fixes.' },
  { title: 'Improve', text: 'Compare your design with a better version.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-linear-to-b from-blush to-mauve px-6 py-20">
      <SectionTitle
        title="How it works"
        subtitle="Four simple steps from screenshot to better design."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-xl bg-cream/90 p-6 text-center shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-plum text-lg font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mt-4 font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-brown/70">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks