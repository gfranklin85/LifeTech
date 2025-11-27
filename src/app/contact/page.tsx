'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Home,
  Building2,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Loader2
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'homeowner',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@lifetech.io',
      link: 'mailto:hello@lifetech.io',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: "California's Central Valley",
      link: null,
    },
  ]

  const quickLinks = [
    { title: 'For Homeowners', href: '/homeowners', icon: Home },
    { title: 'For Vendors', href: '/vendors', icon: Building2 },
    { title: 'About Us', href: '/about', icon: MessageSquare },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Message Sent!</h1>
            <p className="text-gray-400 mb-8">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/" className="btn-primary">
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <MessageSquare className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Let&apos;s </span>
              <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-400">
              Whether you&apos;re a homeowner looking for services or a vendor ready to grow,
              we&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
                        I am a...
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="homeowner" className="bg-dark-800">Homeowner</option>
                        <option value="vendor" className="bg-dark-800">Vendor / Service Provider</option>
                        <option value="realtor" className="bg-dark-800">Real Estate Professional</option>
                        <option value="investor" className="bg-dark-800">Investor</option>
                        <option value="other" className="bg-dark-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your needs or how you'd like to partner with us..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <link.icon className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {link.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-500 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Early Access Card */}
              <div className="glass rounded-2xl p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Join Early Access</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Be among the first to experience LifeTech when we launch in your area.
                </p>
                <div className="flex items-center gap-2 text-primary-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Limited spots available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
