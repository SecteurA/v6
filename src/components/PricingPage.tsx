import { Check, DollarSign, Shield, Package } from 'lucide-react';
import { lazy } from 'react';

const FAQ = lazy(() => import('./FAQ'));

export default function PricingPage() {
  const tiers = [
    {
      name: "BASIC INSTALLATION",
      price: 100,
      features: [
        "Install FreeScout on your own server",
        "Setup 3 Mailboxes",
        "5 users",
        "5 modules configuration",
        "Design 1 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    },
    {
      name: "PRO INSTALLATION",
      price: 150,
      popular: true,
      features: [
        "Install FreeScout on your own server",
        "Setup 5 Mailboxes",
        "10 users",
        "10 modules configuration",
        "Branding with your own logo and color",
        "Setup 10 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    },
    {
      name: "ULTIMATE INSTALLATION",
      price: 200,
      features: [
        "Install FreeScout on your own server",
        "Connect FreeScout Mobile APP",
        "Setup 10 Mailboxes",
        "Connect via OAuth",
        "50 users",
        "20 modules configuration",
        "Branding with your own logo and color",
        "Setup 20 e-mail signature",
        "1 hour call to help you use FreeScout",
        "One time fee"
      ]
    }
  ];

  const pricingInfo = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      details: "No Hidden Fees",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Secure Setup",
      details: "Enterprise-Grade Security",
      color: "text-green-500"
    },
    {
      icon: Package,
      title: "Full Features",
      details: "All-Inclusive Packages",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slideInLeft">
                  Choose Your Perfect
                  <span className="text-[#75b666]"> Installation</span> Package
                </h1>
                <p className="text-xl text-gray-300 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                  Professional FreeScout setup with comprehensive support and features to match your needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slideUp"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className={`${info.color} mb-3`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-sm text-gray-300">{info.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-slideInRight">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Our Service?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#75b666]" />
                    <span>Professional Installation & Configuration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#75b666]" />
                    <span>24/7 Expert Support Available</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#75b666]" />
                    <span>Secure Server Setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#75b666]" />
                    <span>Custom Branding Options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#75b666]" />
                    <span>One-Time Payment, No Hidden Fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  tier.popular ? 'ring-2 ring-[#235585] transform scale-105' : ''
                }`}
                itemScope itemType="https://schema.org/Product"
              >
                {tier.popular && (
                  <div className="bg-[#235585] text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900" itemProp="name">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span className="text-4xl font-bold" itemProp="price">${tier.price}</span>
                    <span className="ml-1 text-gray-600" itemProp="priceCurrency">USD</span>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-[#75b666] mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/install-freescout.html"
                    className="mt-8 w-full block text-center bg-[#235585] text-white py-3 px-6 rounded-md hover:bg-[#75b666] transition-colors"
                    aria-label={`Get started with ${tier.name}`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}