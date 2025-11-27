'use client'

import Link from 'next/link'
import { Home, CheckCircle, Shield, Clock, Star, ArrowRight, Heart } from 'lucide-react'

export function ForHomeownersPreview() {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'Every vendor is vetted and verified. No more gambling on who shows up.',
    },
    {
      icon: Star,
      title: 'Trusted Reviews',
      description: 'Real reviews from real homeowners. Make informed decisions.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Find the right service provider in minutes, not hours of searching.',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <Home className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">For Homeowners</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Home Deserves the{' '}
              <span className="gradient-text">Best Care</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              From the moment you buy to every service your home will ever need&mdash;we&apos;re
              your trusted connection to verified, reliable providers.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/homeowners"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group"
            >
              Learn more for homeowners
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl" />

            {/* Card Stack */}
            <div className="relative space-y-4">
              {/* Main Card */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Welcome Home</h3>
                    <p className="text-gray-400">Your services dashboard</p>
                  </div>
                </div>

                {/* Service Categories */}
                <div className="grid grid-cols-2 gap-3">
                  {['HVAC', 'Plumbing', 'Electrical', 'Landscaping'].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Review Card */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 max-w-xs animate-float">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  &quot;Found an amazing contractor in minutes!&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-500">Verified Homeowner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
