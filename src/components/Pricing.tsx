import { Check } from 'lucide-react';

export default function Pricing() {
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

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                tier.popular ? 'ring-2 ring-[#235585] transform scale-105' : ''
              }`}
              itemScope itemType="https://schema.org/Product">
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
                      <Check className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
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
  );
}