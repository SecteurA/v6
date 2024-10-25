import { lazy, useState } from 'react';
import { Mail, Phone, MessageSquare, User, Send, AlertCircle, Clock, MapPin, Globe } from 'lucide-react';

const FAQ = lazy(() => import('./FAQ'));

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/thank-you.html';
    } catch (error) {
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Globe,
      title: "Global Support",
      details: "24/7 Worldwide Assistance",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Service Coverage",
      details: "Available Worldwide",
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
                  Let's Get Your FreeScout
                  <span className="text-[#75b666]"> Help Desk</span> Ready
                </h1>
                <p className="text-xl text-gray-300 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                  Our expert team is here to help you set up and configure your FreeScout installation perfectly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
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
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#75b666] rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call us at</p>
                    <p className="font-semibold">+44 204 577 3201</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#75b666] rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email us at</p>
                    <p className="font-semibold">contact@freescout-installation.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#75b666] rounded-full p-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Live Chat</p>
                    <p className="font-semibold">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}

              <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#75b666]" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.firstname}
                      onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#75b666]" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.lastname}
                      onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-[#75b666]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-[#75b666]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-700">
                    <MessageSquare className="w-4 h-4 mr-2 text-[#75b666]" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700">
                    <MessageSquare className="w-4 h-4 mr-2 text-[#75b666]" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#75b666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75b666] transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}