import { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  Shield,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Heart,
  Zap,
  DollarSign,
  Users,
  Wrench,
  Paintbrush,
  Droplets,
  Wind,
  TreeDeciduous,
  Truck,
  Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Homeowners | LifeTech',
  description: 'Find trusted, verified home service providers for all your needs. From buying to maintaining your home.',
}

export default function HomeownersPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'Every vendor is vetted and verified. Background checks, credential verification, and quality assurance.',
    },
    {
      icon: Star,
      title: 'Trusted Reviews',
      description: 'Real reviews from real homeowners. See actual experiences before you choose.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Find the right service provider in minutes, not hours of searching and calling.',
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Transparent pricing with no hidden fees. Know what you\'re paying before you commit.',
    },
    {
      icon: Heart,
      title: 'Satisfaction Guaranteed',
      description: 'Our vendors are committed to quality. Issues? We help resolve them.',
    },
    {
      icon: Zap,
      title: 'Instant Matching',
      description: 'Our smart system connects you with providers who match your specific needs.',
    },
  ]

  const serviceCategories = [
    { icon: Search, name: 'Home Inspection', description: 'Pre-purchase and routine inspections' },
    { icon: Wrench, name: 'General Contractors', description: 'Renovations and remodels' },
    { icon: Droplets, name: 'Plumbing', description: 'Repairs, installations, emergencies' },
    { icon: Zap, name: 'Electrical', description: 'Wiring, panels, lighting' },
    { icon: Wind, name: 'HVAC', description: 'Heating, cooling, ventilation' },
    { icon: TreeDeciduous, name: 'Landscaping', description: 'Design, maintenance, hardscaping' },
    { icon: Paintbrush, name: 'Painting', description: 'Interior and exterior' },
    { icon: Truck, name: 'Moving Services', description: 'Local and long-distance' },
  ]

  const journey = [
    {
      stage: 'Buying',
      title: 'Your Home Purchase',
      services: ['Home Inspection', 'Appraisal', 'Title Services', 'Insurance'],
      description: 'The transaction starts here. We connect you with essential services from day one.',
    },
    {
      stage: 'Moving',
      title: 'Making It Yours',
      services: ['Moving Companies', 'Cleaning', 'Security Systems', 'Utilities'],
      description: 'Get settled with trusted providers for everything your move requires.',
    },
    {
      stage: 'Living',
      title: 'Ongoing Care',
      services: ['HVAC', 'Plumbing', 'Electrical', 'Landscaping'],
      description: 'Your home needs care. We\'re here for every repair, upgrade, and improvement.',
    },
    {
      stage: 'Improving',
      title: 'Making It Better',
      services: ['Renovations', 'Additions', 'Kitchen & Bath', 'Smart Home'],
      description: 'Ready to upgrade? Find contractors who turn your vision into reality.',
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <Home className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-400">For Homeowners</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Your Home Deserves </span>
                <span className="gradient-text">The Best</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                From the moment you buy to every service your home will ever need—we connect
                you with verified, reliable providers you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="#services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Trust Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trusted by Homeowners</h3>
                    <p className="text-gray-400">Verified providers only</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Background Verified', 'Licensed & Insured', 'Quality Guaranteed', 'Real Reviews'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Every Service You Need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From inspections to renovations, we cover the entire home services spectrum.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories.map((service, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              And 50+ more service categories...
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose LifeTech</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We make finding trusted home service providers simple, safe, and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Homeowner Journey */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Home Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re with you every step of the way, from purchase to forever home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((stage, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-primary-400 font-semibold mb-2">{stage.stage}</div>
                <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{stage.description}</p>
                <div className="space-y-2">
                  {stage.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-2 text-sm">
                      <Sparkles className="w-3 h-3 text-primary-500" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Service Providers?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the waitlist for early access. Be among the first to experience
              a better way to find trusted home services.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
