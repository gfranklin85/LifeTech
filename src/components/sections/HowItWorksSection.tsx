'use client'

import { Home, Search, Handshake, Repeat, CheckCircle2, ArrowRight } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Home,
      title: 'The Transaction Begins',
      description: 'A home sale initiates the flywheel. Real estate agents, buyers, and sellers enter our ecosystem.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '02',
      icon: Search,
      title: 'Services Surface',
      description: 'We present curated, verified vendors for every need: inspectors, contractors, movers, and more.',
      color: 'from-primary-400 to-accent-500',
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Connection Made',
      description: 'Homeowner meets vendor. Transaction happens through our platform. Everyone wins.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      number: '04',
      icon: Repeat,
      title: 'The Flywheel Spins',
      description: 'Happy customers return. Vendors grow. Relationships compound. The ecosystem expands.',
      color: 'from-accent-400 to-primary-500',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">How It Works</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">The </span>
            <span className="gradient-text">Flywheel</span>
            <span className="text-white"> in Action</span>
          </h2>
          <p className="section-subheading mx-auto">
            A self-reinforcing cycle that grows stronger with every transaction,
            creating lasting value for homeowners and vendors alike.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-dark-800 to-dark-900 rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-lg font-bold gradient-text">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center border border-white/10">
                        <ArrowRight className="w-4 h-4 text-primary-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Visual */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass">
            <Repeat className="w-6 h-6 text-primary-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-lg text-gray-300">
              The cycle never stops. Each transaction fuels the next.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
