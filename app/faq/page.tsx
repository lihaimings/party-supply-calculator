'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How accurate are the calculations?',
    answer: 'Our calculations are based on industry standards and real party planning experience. We use average consumption rates that work well for most events. However, you may want to adjust based on your specific guests and preferences.'
  },
  {
    question: 'What factors affect the calculations?',
    answer: 'The main factors are: number of guests, party duration, event type, and whether alcohol is included. Different event types (casual, wedding, corporate, etc.) have different consumption patterns that we account for.'
  },
  {
    question: 'Can I save my party plans?',
    answer: 'Yes! You can save multiple party plans locally in your browser. Just enter a name for your plan and click the Save button. Your plans will be available whenever you return to the site.'
  },
  {
    question: 'How is the budget calculated?',
    answer: 'The budget is estimated using average prices for food, drinks, and supplies. These are rough estimates to help you plan. Actual costs may vary based on your location, quality preferences, and where you shop.'
  },
  {
    question: 'What does "servings" mean for food?',
    answer: 'A serving is a standard portion size. For appetizers, it\'s about 2-3 pieces per serving. For main dishes, it\'s one full plate. For drinks, it\'s one glass or bottle. We recommend having extra for hungry guests!'
  },
  {
    question: 'Should I order exactly what the calculator suggests?',
    answer: 'We recommend adding 10-15% extra to account for unexpected guests, spills, or guests who eat more than average. It\'s always better to have a little extra than to run out!'
  },
  {
    question: 'Is my data stored anywhere?',
    answer: 'All your data is stored locally in your browser using localStorage. We don\'t collect or store any personal information on our servers. Your party plans are private and only accessible on your device.'
  },
  {
    question: 'Can I use this for large events?',
    answer: 'Yes! Our calculator works for events of any size, from small gatherings to large parties with hundreds of guests. For very large events (500+ guests), you may want to consult with a professional caterer as well.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about Party Supply Calculator
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-rose-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rose-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className={`text-rose-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
