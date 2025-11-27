'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is LifeTech?',
      answer: 'LifeTech is a comprehensive affiliate marketing platform that connects homeowners with trusted service providers. We capture the entire home services economy, starting with real estate transactions and extending to every service your home will ever need—from inspectors and contractors to landscapers and appliance providers.',
    },
    {
      question: 'How does the platform work for homeowners?',
      answer: "When you're buying a home or need any home service, our platform connects you with verified, vetted vendors. We handle the transaction through our secure payment system, ensuring transparency and protection for both parties. You get quality service; vendors get quality customers.",
    },
    {
      question: 'How do vendors benefit from joining?',
      answer: "Vendors gain access to homeowners at the exact moment they need services. We provide digital visibility (even if you don't have a website), real-time leads, and a fair commission structure. You focus on your craft; we bring you customers.",
    },
    {
      question: 'What types of services are covered?',
      answer: 'Any home-related service: home improvement, appliance purchases, major construction projects, installations, inspections, moving services, landscaping, HVAC, plumbing, electrical, security systems, cleaning services—and more. If it relates to a home, we cover it.',
    },
    {
      question: 'How does payment work?',
      answer: 'All transactions happen through our platform using Stripe. This ensures secure payments, clear attribution, and protection for both homeowners and vendors. Vendors receive fair, transparent commissions based on performance.',
    },
    {
      question: 'How do you ensure vendor quality?',
      answer: 'Every vendor goes through our verification process. We check credentials, reviews, and track record. Plus, our review system ensures ongoing accountability. Bad actors get removed; great vendors get more business.',
    },
    {
      question: 'Is LifeTech available in my area?',
      answer: "We're currently launching in California's Central Valley and expanding rapidly. Join our early access list to be notified when we're available in your area, or reach out if you're a vendor interested in being among the first in your region.",
    },
  ]

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <HelpCircle className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">FAQ</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">Common </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about LifeTech and how it works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white/10' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-primary-500' : 'bg-white/5'
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
