import { Users, Award, Clock, Shield, Trophy, Star, Zap } from 'lucide-react';
import { lazy } from 'react';

const FAQ = lazy(() => import('./FAQ'));

export default function About() {
  const stats = [
    {
      icon: Trophy,
      title: "Official Partner",
      details: "Certified Experts",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "500+ Installs",
      details: "Happy Clients",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "24/7 Support",
      details: "Always Available",
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
                  Your Trusted FreeScout
                  <span className="text-[#75b666]"> Installation</span> Partner
                </h1>
                <p className="text-xl text-gray-300 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                  We're official FreeScout installation experts with over 500 successful deployments worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slideUp"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className={`${stat.color} mb-3`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{stat.title}</h3>
                    <p className="text-sm text-gray-300">{stat.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-slideInRight">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Why Trust Us?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#75b666]" />
                    <span>Official FreeScout Installation Partner</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#75b666]" />
                    <span>Experienced Team of Experts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-[#75b666]" />
                    <span>500+ Successful Installations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#75b666]" />
                    <span>24/7 Global Support Coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#75b666]" />
                    <span>Security-First Approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow text-center">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow text-center">
              <Award className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">5+</div>
              <div className="text-sm md:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow text-center">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support Available</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow text-center">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-[#75b666] mx-auto mb-3 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Secure Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-16">
            <div className="prose max-w-none">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-6">
                As an official FreeScout installation partner, we bring unparalleled expertise in providing professional installation and configuration services. Our team works directly with FreeScout to ensure that your help desk is set up according to the latest best practices and security standards.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Professional FreeScout installation and configuration</li>
                <li>Server security hardening and optimization</li>
                <li>Custom domain setup and SSL configuration</li>
                <li>Email system integration and configuration</li>
                <li>User management and access control setup</li>
                <li>Performance optimization and monitoring</li>
              </ul>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-6">
                We are committed to providing exceptional service and support to our clients. Our team works diligently to ensure your FreeScout installation is completed quickly, securely, and efficiently. We provide ongoing support and guidance to help you make the most of your help desk system.
              </p>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Every installation we perform undergoes rigorous testing to ensure everything works perfectly. We follow industry best practices for security and performance optimization, giving you peace of mind that your help desk is in good hands.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <a
              href="/install-freescout.html"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-[#235585] rounded-md hover:bg-[#75b666] transition-colors"
            >
              Request Installation Now
            </a>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
}