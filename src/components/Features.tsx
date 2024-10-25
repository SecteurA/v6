import { Settings, Mail, Globe, Shield, Zap, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "Professional Installation",
      description: "Complete server setup and FreeScout installation with optimal configurations for maximum performance"
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Enterprise-grade SSL certificate setup and comprehensive security measures implementation"
    },
    {
      icon: Mail,
      title: "Email Configuration",
      description: "Advanced SMTP setup and email routing configuration for seamless communication flow"
    },
    {
      icon: Globe,
      title: "Domain Integration",
      description: "Custom domain setup with DNS configuration and proper MX record management"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Server and application optimization for lightning-fast response times and reliability"
    },
    {
      icon: HeartHandshake,
      title: "Post-Installation Support",
      description: "Dedicated 30-day technical support ensuring smooth operation and peace of mind"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slideInLeft">
            Everything You Need for a
            <span className="text-[#235585]"> Perfect Setup</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInRight">
            Comprehensive installation service with enterprise-grade features and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ 
                animation: 'slideUp 0.5s ease-out forwards',
                animationDelay: `${index * 150}ms`,
                opacity: 0
              }}
            >
              <div className="absolute inset-0 bg-[#235585] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#235585]/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-[#235585]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#235585] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}