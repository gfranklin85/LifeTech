'use client'

import { Users, Lightbulb, Building2, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'

export function FoundersSection() {
  const founders = [
    {
      name: 'Adrian Tejada',
      role: 'Founder & Driving Force',
      image: null,
      initial: 'AT',
      color: 'from-primary-500 to-primary-600',
      story: 'The idea sparked from watching the whole operation at a warehouse, shipping orders for a luxury fire pits business. Seeing how products moved from vendor to consumer, how transactions flowed, how relationships created recurring value—Adrian saw the model that could be applied to something bigger.',
      insight: '"I saw the machine. The mechanics of commerce. And I knew it could work for home services."',
    },
    {
      name: 'Greg Franklin',
      role: 'Co-Founder',
      image: null,
      initial: 'GF',
      color: 'from-accent-500 to-accent-600',
      story: "Greg brings the realtor and home services angle. A licensed real estate agent operating in California's Central Valley, specializing in residential transactions. Direct relationships with the vendor ecosystem—inspectors, contractors, tradesmen, service providers.",
      insight: '"I know the market. I know the people. I\'m the bridge between the platform and the businesses that serve homeowners."',
    },
  ]

  return (
    <section id="founders" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">The Team</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">Meet the </span>
            <span className="gradient-text">Founders</span>
          </h2>
          <p className="section-subheading mx-auto">
            Adrian saw the machine. Greg knows the market. Together&mdash;a platform that owns
            the transaction layer between homeowners and every service provider they&apos;ll ever need.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className={`relative flex-shrink-0 w-20 h-20 bg-gradient-to-br ${founder.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{founder.initial}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-primary-400 font-medium">{founder.role}</p>
                </div>
              </div>

              {/* Story */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {founder.story}
              </p>

              {/* Quote */}
              <div className="relative p-6 rounded-xl bg-white/5 border border-white/10">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-primary-500/30" />
                <p className="text-white italic pl-8">
                  {founder.insight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Vision
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Starting with the biggest transaction of all&mdash;the home itself&mdash;we&apos;re building
              a platform that captures the entire downstream economy. Every service. Every vendor.
              Every homeowner.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group"
            >
              Read our full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
