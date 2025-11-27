'use client'

import Link from 'next/link'
import { Building2, TrendingUp, Users, Globe, DollarSign, ArrowRight, BarChart3, Zap } from 'lucide-react'

export function ForVendorsPreview() {
  const benefits = [
    {
      icon: Users,
      title: 'New Customers',
      description: 'Access homeowners at the exact moment they need your services.',
    },
    {
      icon: Globe,
      title: 'Digital Presence',
      description: 'No website? We build your online visibility. Get found.',
    },
    {
      icon: DollarSign,
      title: 'Fair Commissions',
      description: 'Transparent, performance-based fees. You grow, we grow.',
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-accent-900/20 via-dark-900 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl blur-3xl" />

            {/* Dashboard Preview */}
            <div className="relative glass rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white">Vendor Dashboard</h3>
                  <p className="text-gray-400 text-sm">Real-time performance</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-500">This Month</span>
                  </div>
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-sm text-gray-400">New Leads</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary-400" />
                    <span className="text-xs text-gray-500">Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-white">$12.4K</div>
                  <div className="text-sm text-gray-400">Platform Sales</div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Lead Flow</span>
                  <BarChart3 className="w-4 h-4 text-primary-400" />
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-primary-500 to-accent-500 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">New Lead!</p>
                  <p className="text-xs text-gray-400">Kitchen renovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <Building2 className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-400">For Vendors</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Grow Your Business{' '}
              <span className="gradient-text">Effortlessly</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              We bring customers to your door. No more chasing leads or expensive ads.
              Just quality connections with homeowners who need exactly what you offer.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/vendors"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-semibold group"
            >
              Partner with us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
