import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export function PricingCard({ title, price, features, recommended = false }: PricingCardProps) {
  return (
    <div className={`rounded-lg p-6 ${recommended ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white border border-gray-200'} shadow-lg`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/one-time</span>
        </div>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a
          href="/install-freescout.html"
          className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}