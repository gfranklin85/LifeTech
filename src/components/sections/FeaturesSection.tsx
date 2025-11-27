'use client'

import {
  CreditCard,
  Target,
  BarChart3,
  Shield,
  Globe,
  Zap,
  Lock,
  LineChart,
  Sparkles
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: CreditCard,
      title: 'Transaction Hub',
      description: 'Checkout happens through the platform. We are the point of sale for every vendor, ensuring seamless payments and clear attribution.',
      highlight: true,
    },
    {
      icon: Target,
      title: 'Smart Attribution',
      description: 'Our system tracks the customer journey from first ad impression to final purchase. Every touchpoint is captured.',
      highlight: false,
    },
    {
      icon: BarChart3,
      title: 'Solid Tracking',
      description: 'Real-time analytics for vendors and partners. Know exactly where your business is coming from.',
      highlight: false,
    },
    {
      icon: Shield,
      title: 'Payment Integrity',
      description: 'Innovative securitization processes ensure both parties are protected. No circumvention. Fair commissions.',
      highlight: true,
    },
    {
      icon: Globe,
      title: 'Digital Presence',
      description: 'We push everyday businesses onto the web. No website? No problem. We make you visible.',
      highlight: false,
    },
    {
      icon: Zap,
      title: 'Instant Matching',
      description: 'AI-powered matching connects homeowners with the right vendors based on needs, location, and ratings.',
      highlight: false,
    },
  ]

  const techStack = [
    { icon: Lock, label: 'Secure Payments' },
    { icon: LineChart, label: 'Real-time Analytics' },
    { icon: Target, label: 'Smart Attribution' },
    { icon: Globe, label: 'Web Visibility' },
  ]

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium text-gray-300">Platform Features</span>
          </div>
          <h2 className="section-heading mb-6">
            <span className="text-white">Built for </span>
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="section-subheading mx-auto">
            Powerful infrastructure designed to handle the entire home services ecosystem.
            From payment processing to vendor visibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-300 ${
                feature.highlight
                  ? 'bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 hover:border-primary-500/40'
                  : 'glass hover:bg-white/10'
              }`}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-xs font-semibold text-white">
                  Core
                </div>
              )}

              <div className="mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500'
                    : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10'
                }`}>
                  <feature.icon className={`w-7 h-7 ${feature.highlight ? 'text-white' : 'text-primary-400'}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <div className="glass rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Technical Approach</h3>
              <p className="text-gray-400">Built on modern infrastructure with Stripe at the core.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <tech.icon className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-gray-300">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
