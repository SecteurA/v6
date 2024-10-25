import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is FreeScout?",
    answer: "FreeScout is a free, open-source help desk and shared inbox system that helps teams collaborate and manage customer communications efficiently. It's a self-hosted alternative to popular help desk solutions."
  },
  {
    question: "How long does the installation process take?",
    answer: "The installation process typically takes 1-2 hours, depending on your server configuration and specific requirements. We ensure a smooth setup with minimal downtime."
  },
  {
    question: "Do you provide support after installation?",
    answer: "Yes, we provide 30 days of post-installation support to ensure everything runs smoothly. This includes troubleshooting, configuration adjustments, and general guidance."
  },
  {
    question: "What are the server requirements?",
    answer: "In order to install FreeScout professionally on your server, you'll need a VPS with the latest version of Ubuntu installed. This ensures compatibility with the software and provides a stable environment for optimal performance."
  },
  {
    question: "Can you help with data migration?",
    answer: "Yes, we can assist with migrating your data from other help desk systems to FreeScout. This service may require additional configuration depending on your current setup."
  },
  {
    question: "Do you offer custom modifications?",
    answer: "Yes, we can help with custom modifications and integrations. Please contact us with your specific requirements for a custom quote."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our FreeScout installation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#75b666]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#75b666]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a
              href="/contact.html"
              className="text-[#75b666] hover:text-[#235585] font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
