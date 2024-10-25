import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #75b666 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: 'fadeIn 2s ease-in-out'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 animate-slideInLeft">
          <p className="text-xl text-gray-700 mb-0 flex-1">
            Get your FreeScout help desk installed and configured by experts, starting at just $100.
          </p>
          <div className="flex-shrink-0">
            <a
              href="/install-freescout.html"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#75b666] rounded-lg hover:bg-white hover:text-[#75b666] border-2 border-[#75b666] transition-all duration-300 transform hover:scale-105 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}