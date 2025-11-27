'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Home, Building2 } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-primary-900/20 to-dark-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">Join the Revolution</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="gradient-text">Home Services?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Whether you&apos;re a homeowner looking for trusted services or a vendor ready to grow,
            there&apos;s a place for you in the LifeTech ecosystem.
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {/* For Homeowners */}
            <Link
              href="/homeowners"
              className="group relative glass rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-primary-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">I&apos;m a Homeowner</h3>
                  <p className="text-gray-400 text-sm">Find trusted services</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Get early access to verified vendors for all your home service needs.
              </p>
              <div className="flex items-center gap-2 text-primary-400 font-semibold">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* For Vendors */}
            <Link
              href="/vendors"
              className="group relative glass rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-accent-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">I&apos;m a Vendor</h3>
                  <p className="text-gray-400 text-sm">Grow your business</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Join our network and get connected with homeowners who need your services.
              </p>
              <div className="flex items-center gap-2 text-accent-400 font-semibold">
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Contact Link */}
          <p className="text-gray-500">
            Have questions?{' '}
            <Link href="/contact" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
