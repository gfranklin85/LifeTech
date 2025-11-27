import { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2,
  Users,
  Globe,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
  Handshake,
  Star,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Vendors | LifeTech',
  description: 'Grow your home services business with LifeTech. Get connected with homeowners who need your services.',
}

export default function VendorsPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Quality Leads',
      description: 'Access homeowners at the exact moment they need your services. No cold calls, no wasted time.',
    },
    {
      icon: Globe,
      title: 'Digital Presence',
      description: 'Don\'t have a website? We build your online visibility. Get found by customers searching for your services.',
    },
    {
      icon: DollarSign,
      title: 'Fair Commissions',
      description: 'Transparent, performance-based fees. You only pay when you get business. Simple.',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Our flywheel effect means more customers over time. Happy clients return and refer.',
    },
    {
      icon: Shield,
      title: 'Payment Protection',
      description: 'Secure transactions through our platform. Get paid reliably for your work.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track your leads, conversions, and revenue in real-time. Know exactly where your business is coming from.',
    },
  ]

  const vendorTypes = [
    {
      title: 'Real Estate Professionals',
      description: 'Agents, brokers, inspectors, appraisers',
      icon: Building2,
    },
    {
      title: 'Contractors',
      description: 'General contractors, specialists, builders',
      icon: Handshake,
    },
    {
      title: 'Home Services',
      description: 'HVAC, plumbing, electrical, landscaping',
      icon: Zap,
    },
    {
      title: 'Moving & Logistics',
      description: 'Movers, storage, cleaning services',
      icon: Clock,
    },
  ]

  const howItWorks = [
    {
      step: '01',
      title: 'Sign Up',
      description: 'Create your vendor profile with your services, coverage area, and credentials.',
    },
    {
      step: '02',
      title: 'Get Verified',
      description: 'Our team verifies your credentials to ensure quality for homeowners.',
    },
    {
      step: '03',
      title: 'Receive Leads',
      description: 'Get matched with homeowners who need exactly what you offer.',
    },
    {
      step: '04',
      title: 'Grow Your Business',
      description: 'Complete jobs, collect reviews, and watch your business expand.',
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
                <Building2 className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium text-accent-400">For Vendors</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Grow Your Business </span>
                <span className="gradient-text">Without the Hustle</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                We bring homeowners to your door. No more chasing leads, no expensive ads,
                no cold calling. Just quality connections with people who need exactly what you offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-accent">
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="#how-it-works" className="btn-secondary">
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Why Vendors Love Us</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">47%</div>
                    <div className="text-gray-400 text-sm">Avg. Lead Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">$0</div>
                    <div className="text-gray-400 text-sm">Upfront Costs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">24hrs</div>
                    <div className="text-gray-400 text-sm">To Get Started</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">4.8</div>
                    <div className="text-gray-400 text-sm">Avg. Partner Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Types */}
      <section id="realtors" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Work With</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From real estate professionals to contractors and service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vendorTypes.map((type, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="contractors" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need to Grow</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We handle the lead generation. You focus on what you do best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting started is simple. Be up and running in 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="text-5xl font-bold text-accent-500/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-accent-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Promise to Vendors
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We&apos;re bringing you business. We help with your web presence. We connect you
              to homeowners who need exactly what you offer. All we ask is that you deliver
              great service and honor our partnership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['No Upfront Fees', 'Fair Commissions', 'Quality Leads', 'Growth Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-accent">
              Apply to Be a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
