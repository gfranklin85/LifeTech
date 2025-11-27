import { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  Lightbulb,
  Target,
  Rocket,
  Heart,
  Quote,
  ArrowRight,
  Building,
  Home,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | LifeTech',
  description: 'Meet the founders and learn the story behind LifeTech - the home services affiliate platform.',
}

export default function AboutPage() {
  const timeline = [
    {
      year: 'The Spark',
      title: 'Seeing the Machine',
      description: 'Adrian, working at a warehouse shipping luxury fire pits, sees the entire commerce machine in action. The mechanics of how products move from vendor to consumer, how transactions flow, how relationships create recurring value.',
    },
    {
      year: 'The Connection',
      title: 'Finding the Market',
      description: 'Greg, a licensed real estate agent in California\'s Central Valley, knows the vendor ecosystem intimately. Inspectors, contractors, tradesmen—he\'s the bridge between platform and providers.',
    },
    {
      year: 'The Insight',
      title: 'The Wedge Product',
      description: 'Like Bezos started with books, LifeTech starts with the residential home. The real estate transaction is the atomic trigger that unlocks a cascade of downstream service needs.',
    },
    {
      year: 'Now',
      title: 'Building the Flywheel',
      description: 'A comprehensive affiliate marketing platform that streamlines securing profitable relationships which expand by nature of their own framework.',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Consumer First',
      description: 'Everything we build starts with one question: who do we need to make happiest? The consumer.',
    },
    {
      icon: Target,
      title: 'Relationship-Driven',
      description: 'We believe in direct, in-person, relationship-driven vendor acquisition. Go talk to the vendor.',
    },
    {
      icon: Globe,
      title: 'Digital Visibility',
      description: 'We push everyday businesses that haven\'t focused on web presence toward becoming visible service providers.',
    },
    {
      icon: Zap,
      title: 'Transaction Integrity',
      description: 'Innovative securitization of payment collection processes. Fair, transparent, protected.',
    },
  ]

  const founders = [
    {
      name: 'Adrian Tejada',
      role: 'Founder & Driving Force',
      initial: 'AT',
      color: 'from-primary-500 to-primary-600',
      bio: 'The idea sparked from Adrian seeing the whole operation at the warehouse he worked shipping orders for the owner\'s business of luxury fire pits for outdoor decor. Watching the mechanics of how products moved from vendor to consumer, how transactions flowed, how relationships between suppliers and buyers created recurring value—he saw the model that could be applied to something bigger.',
      quote: 'I saw the machine. Now we\'re building one for home services.',
    },
    {
      name: 'Greg Franklin',
      role: 'Co-Founder',
      initial: 'GF',
      color: 'from-accent-500 to-accent-600',
      bio: 'Greg brings the realtor and home services angle. Licensed real estate agent operating in California\'s Central Valley, specializing in residential transactions. Direct relationships with the vendor ecosystem—inspectors, contractors, tradesmen, service providers. The bridge between the platform and the local businesses that serve homeowners.',
      quote: 'I know the market. I know the people. Let\'s connect them.',
    },
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Users className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">We Saw the </span>
              <span className="gradient-text">Machine</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Adrian saw the mechanics of commerce. Greg knows the home services market.
              Together, we&apos;re building a platform that owns the transaction layer between
              homeowners and every service provider they&apos;ll ever need.
            </p>
          </div>
        </div>
      </section>

      {/* The Story Timeline */}
      <section id="story" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From warehouse insight to home services revolution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`glass rounded-2xl p-8 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-lg`}>
                      <div className="text-primary-400 font-semibold mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full" />

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Founders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Two perspectives, one vision. Building the future of home services together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="glass rounded-2xl p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${founder.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-3xl font-bold text-white">{founder.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                    <p className="text-primary-400">{founder.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{founder.bio}</p>
                <div className="relative p-6 rounded-xl bg-white/5 border border-white/10">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-primary-500/30" />
                  <p className="text-white italic pl-8">&quot;{founder.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Principles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The core beliefs that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Vision
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Like Bezos started with books, we start with the residential home.
            The residential real estate transaction is the atomic trigger. It unlocks
            a cascade of downstream service needs. We&apos;re building a platform that
            captures that entire economy—starting with the biggest transaction of all:
            the home itself.
          </p>
          <Link href="/contact" className="btn-primary">
            Join the Movement
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
