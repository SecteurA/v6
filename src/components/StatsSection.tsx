import { Users, Award, Clock, Shield, Globe, Server } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Successful installations worldwide",
      color: "text-blue-500"
    },
    {
      icon: Award,
      number: "100%",
      label: "Success Rate",
      description: "Perfect installation record",
      color: "text-green-500"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Round-the-clock assistance",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      number: "5+",
      label: "Years",
      description: "Industry experience",
      color: "text-red-500"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Global service coverage",
      color: "text-yellow-500"
    },
    {
      icon: Server,
      number: "1000+",
      label: "Servers",
      description: "Successfully configured",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Companies Worldwide
          </h2>
          <p className="text-xl text-gray-300">
            Our track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`${stat.color} bg-white/10 rounded-lg p-3`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{stat.number}</span>
                  </div>
                  <p className="text-lg font-semibold">{stat.label}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}