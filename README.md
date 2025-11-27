# LifeTech - Home Services Affiliate Platform

A comprehensive affiliate marketing platform that connects homeowners with trusted service providers, starting with the residential real estate transaction and extending to every service a home will ever need.

## About

LifeTech is the home services flywheel - a platform that captures the entire home services economy by starting with the biggest transaction of all: the home purchase itself.

### Founders

- **Adrian Tejada** - Founder & Driving Force
- **Greg Franklin** - Co-Founder (California Central Valley Real Estate)

## Features

- **Transaction Hub** - Secure checkout through the platform
- **Smart Attribution** - Track customer journey from ad to purchase
- **Digital Visibility** - Help local vendors get found online
- **Payment Integrity** - Secure, transparent payment processing

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Payments**: Stripe (planned)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── about/            # About page
│   ├── vendors/          # For Vendors page
│   ├── homeowners/       # For Homeowners page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Site navigation
│   ├── Footer.tsx        # Site footer
│   └── sections/         # Landing page sections
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── FeaturesSection.tsx
│       ├── ForHomeownersPreview.tsx
│       ├── ForVendorsPreview.tsx
│       ├── FoundersSection.tsx
│       ├── FAQSection.tsx
│       └── CTASection.tsx
```

## License

Private - All rights reserved.
