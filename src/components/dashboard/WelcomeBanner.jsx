import Button from '../ui/Button'

function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function WelcomeBanner() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-midnight via-plum to-mauve p-6 text-white md:p-8">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{getGreeting()}!</h2>
        <p className="mt-1 text-white/90">
          Ready to review a website design? Upload a screenshot to get started.
        </p>
      </div>
      <Button to="/analyze" variant="secondary">
        New Analysis
      </Button>
    </section>
  )
}

export default WelcomeBanner