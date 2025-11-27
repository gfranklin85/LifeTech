'use client'

import { Lightbulb, ArrowRight, Home, Repeat, Zap, Shield, TrendingUp, Users } from 'lucide-react'

export function SolutionSection() {
  const benefits = [
    {
      icon: Home,
      title: 'The Ultimate Wedge',
      description: 'The residential real estate transaction is the atomic trigger. It unlocks a cascade of downstream service needs.',
    },
    {
      icon: Repeat,
      title: 'The Flywheel Effect',
      description: 'Each transaction feeds the next. Relationships compound. The ecosystem grows stronger with every connection.',
    },
    {
      icon: Shield,
      title: 'Trust Built In',
      description: 'Verified vendors. Transparent transactions. Payment integrity that protects both sides.',
    },
    {
      icon: TrendingUp,
      title: 'Visibility For All',
      description: 'We push local businesses into the digital economy. If you\'re great at what you do, people will find you.',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">The Solution</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">One Platform.</span>{' '}
            <span className="gradient-text">Infinite Connections.</span>
          </h2>
          <p className="section-subheading mx-auto">
            LifeTech is the comprehensive affiliate flywheel that captures the entire home services
            economy&mdash;starting with the biggest transaction of all.
          </p>
        </div>

        {/* The Wedge Visualization */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Central Home Icon */}
            <div className="relative z-10 flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-500/30">
                  <Home className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />
              </div>
            </div>

            {/* The Cascade */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">The Residential Transaction</h3>
              <p className="text-gray-400">Your home purchase is just the beginning</p>
            </div>

            {/* Service Categories Flowing Down */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Home Inspection',
                'Moving Services',
                'Renovations',
                'Landscaping',
                'HVAC Systems',
                'Appliances',
                'Security Systems',
                'Cleaning Services',
              ].map((service, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Arrow pointing down */}
            <div className="flex justify-center my-8">
              <div className="flex flex-col items-center gap-2 text-primary-400">
                <ArrowRight className="w-6 h-6 rotate-90" />
                <span className="text-sm font-medium">And everything else your home needs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
