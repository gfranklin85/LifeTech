'use client'

import { AlertTriangle, Search, DollarSign, Clock, Users, XCircle } from 'lucide-react'

export function ProblemSection() {
  const problems = [
    {
      icon: Search,
      title: 'Finding Quality Vendors',
      description: 'Homeowners waste hours searching for reliable contractors, often settling for whoever shows up.',
      color: 'text-red-400',
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs & Scams',
      description: 'Without trusted referrals, homeowners fall prey to overpriced services and outright fraud.',
      color: 'text-orange-400',
    },
    {
      icon: Clock,
      title: 'Missed Opportunities',
      description: 'Local vendors struggle to reach new customers, relying on outdated marketing that doesn\'t work.',
      color: 'text-yellow-400',
    },
    {
      icon: Users,
      title: 'No Web Presence',
      description: 'Skilled tradespeople lose business because they can\'t be found online. Zero visibility.',
      color: 'text-amber-400',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">The Problem</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">The Home Services Industry Is</span>{' '}
            <span className="text-red-400">Broken</span>
          </h2>
          <p className="section-subheading mx-auto">
            Every year, millions of homeowners struggle to find trusted service providers
            while local businesses remain invisible in the digital age.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-red-500/10 ${problem.color}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle className="w-16 h-16 text-red-500" />
              </div>
            </div>
          ))}
        </div>

        {/* The Big Number */}
        <div className="text-center p-12 rounded-3xl glass">
          <div className="text-6xl md:text-8xl font-bold text-red-400 mb-4">$100B+</div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lost annually to inefficient connections between homeowners and service providers.
            Money left on the table. Relationships never made.
          </p>
        </div>
      </div>
    </section>
  )
}
