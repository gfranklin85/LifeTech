import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'LifeTech | Home Services Affiliate Platform',
  description: 'The comprehensive platform connecting homeowners with trusted service providers. From real estate to renovations, we power the entire home services economy.',
  keywords: 'home services, affiliate platform, real estate, home improvement, contractors, service providers',
  openGraph: {
    title: 'LifeTech | Home Services Affiliate Platform',
    description: 'The comprehensive platform connecting homeowners with trusted service providers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
