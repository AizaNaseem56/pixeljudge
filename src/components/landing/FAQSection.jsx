import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'

const questions = [
  { question: 'What can I upload?', answer: 'Any website screenshot in PNG or JPG format.' },
  { question: 'Is the analysis real AI?', answer: 'The first version uses sample results. Real AI is added later.' },
  { question: 'Can I check color contrast?', answer: 'Yes. The contrast checker follows WCAG accessibility rules.' },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-linear-to-b from-midnight to-brown px-6 py-20">
  <SectionTitle light title="Questions" subtitle="Quick answers about PixelJudge." />

      <div className="mx-auto max-w-2xl space-y-3">
        {questions.map((item, index) => (
          <div key={item.question} className="rounded-lg bg-white p-4 shadow">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left font-medium"
            >
              {item.question}
              <span className="text-xl text-plum">{openIndex === index ? '−' : '+'}</span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-sm text-brown/70">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection