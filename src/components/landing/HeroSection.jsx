import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const headlines = [
  'Analyze your website design with AI instantly',
  'Get an instant AI critique of your website',
]

const scores = [
  { label: 'Layout', value: 82 },
  { label: 'Typography', value: 68 },
  { label: 'Color', value: 85 },
  { label: 'Spacing', value: 74 },
]

function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex(current => (current + 1) % headlines.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-linear-to-b from-cream to-peach px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="group relative isolate inline-block cursor-default">
          <span className="absolute -inset-4 -z-10 rounded-full bg-blush opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
          <h1 className="font-brand text-4xl tracking-wide text-plum transition-transform duration-500 group-hover:scale-105 sm:text-6xl md:text-8xl">
            PixelJudge
          </h1>
        </div>

        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-brown/80 md:text-base">
          AI website design reviewer
        </p>
        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blush" />

        <h2
          key={headlineIndex}
          className="mt-12 min-h-16 animate-fade-in text-2xl font-bold motion-reduce:animate-none md:min-h-20 md:text-4xl"
        >
          {headlines[headlineIndex]}
        </h2>
        <p className="mt-4 text-lg text-brown/80">
          Upload a screenshot and get a design score, marked issues, contrast
          checks and a redesign preview.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
         <Button to="/signup">Try PixelJudge</Button>
          <Button href="#how-it-works" variant="outline">
            See how it works
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-xl rounded-2xl bg-white p-6 text-left shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-brown/70">Design score</p>
            <p className="text-6xl font-bold text-plum">78</p>
          </div>
          <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold">
            Sample report
          </span>
        </div>

        <div className="mt-6 space-y-4">
          {scores.map(item => (
            <div key={item.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-2 rounded-full bg-peach">
                <div
                  className="h-2 rounded-full bg-plum"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection