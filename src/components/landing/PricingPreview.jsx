import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const plans = [
  { name: 'Free', price: '$0', detail: '3 analyses per month', popular: false },
  { name: 'Pro', price: '$12', detail: '100 analyses per month', popular: true },
  { name: 'Agency', price: '$49', detail: 'Unlimited analyses and team seats', popular: false },
]

function PricingPreview() {
  return (
    <section id="pricing" className="bg-linear-to-b from-plum to-midnight px-6 py-20">
      <SectionTitle
        light
        title="Simple pricing"
        subtitle="Plans for students, freelancers and agencies."
      />

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`rounded-xl bg-white p-6 text-center shadow ${
              plan.popular ? 'ring-4 ring-blush' : ''
            }`}
          >
            {plan.popular && (
              <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold">
                Most popular
              </span>
            )}
            <h3 className="mt-3 font-semibold">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold text-plum">{plan.price}</p>
            <p className="text-sm text-brown/70">per month</p>
            <p className="mt-4 text-sm">{plan.detail}</p>
            <div className="mt-6">
              <Button to="/signup" variant={plan.popular ? 'primary' : 'outline'}>
                Choose {plan.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingPreview