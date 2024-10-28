import { lazy, useState, useEffect } from 'react';
import { Package, Mail, Phone, User, CheckCircle, AlertCircle, Shield, Zap, Clock } from 'lucide-react';
import PayPalButton from './PayPalButton';

const FAQ = lazy(() => import('./FAQ'));

interface Package {
  value: string;
  label: string;
  price: number;
}

interface FormData {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  cf_852: string;
}

export default function InstallFreescout() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    cf_852: ''
  });

  const [showPayPal, setShowPayPal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  const packages: Package[] = [
    {
      value: "Basic installation",
      label: "Basic Installation - $100",
      price: 100
    },
    {
      value: "Pro installation",
      label: "Pro Installation - $150",
      price: 150
    },
    {
      value: "Ultimate installation",
      label: "Ultimate Installation - $200",
      price: 200
    }
  ];

  const installInfo = [
    {
      icon: Shield,
      title: "Secure Setup",
      details: "Enterprise Security",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Quick Install",
      details: "Within 24 Hours",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Expert Support",
      details: "24/7 Assistance",
      color: "text-purple-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mounted) return;

    setError(null);
    setLoading(true);

    try {
      if (!formData.firstname || !formData.lastname || !formData.mobile || !formData.email || !formData.cf_852) {
        throw new Error('Please fill in all required fields');
      }

      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);

      await fetch('https://crm.freescout-installation.com/modules/Webforms/capture.php', {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });

      const selectedPackage = packages.find(pkg => pkg.value === formData.cf_852);
      if (selectedPackage && mounted) {
        setSelectedPrice(selectedPackage.price);
        setShowPayPal(true);
      } else {
        throw new Error('Please select a package');
      }
    } catch (error) {
      if (mounted) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
        setShowPayPal(false);
      }
    } finally {
      if (mounted) {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'cf_852') {
      const selectedPackage = packages.find(pkg => pkg.value === value);
      if (selectedPackage) {
        setSelectedPrice(selectedPackage.price);
      }
    }
  };

  const handlePayPalSuccess = () => {
    if (mounted) {
      window.location.href = '/thank-you.html';
    }
  };

  const handlePayPalError = (error: Error) => {
    if (mounted) {
      setError(error.message);
      setShowPayPal(false);
    }
  };

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
                  Start Your FreeScout
                  <span className="text-[#75b666]"> Installation</span> Today
                </h1>
                <p className="text-xl text-gray-300 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                  Professional setup and configuration by certified experts. Get your help desk running in no time.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {installInfo.map((info, index) => (
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
                <h3 className="text-2xl font-bold">Installation Benefits</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#75b666]" />
                    <span>Professional Server Configuration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#75b666]" />
                    <span>SSL Certificate Setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#75b666]" />
                    <span>Email System Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#75b666]" />
                    <span>Security Hardening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#75b666]" />
                    <span>30 Days Support Included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}

              <h2 className="text-3xl font-bold text-center mb-8">Request Installation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="__vtrftk" value="sid:df196c95e9d2996a71f7731dfbaf2ccc7aa98c48,1729701852" />
                <input type="hidden" name="publicid" value="f321530aa2e8303ffec7db84b712d9e3" />
                <input type="hidden" name="urlencodeenable" value="1" />
                <input type="hidden" name="name" value="FreeScout_leads" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-[#75b666]" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.firstname}
                      onChange={handleInputChange}
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
                      name="lastname"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-[#75b666]" />
                      Mobile Phone
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      pattern="[0-9+\-\s()]+"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-[#75b666]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cf_852" className="flex items-center text-sm font-medium text-gray-700">
                    <Package className="w-4 h-4 mr-2 text-[#75b666]" />
                    Select Package
                  </label>
                  <select
                    id="cf_852"
                    name="cf_852"
                    required
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#75b666] focus:border-transparent transition duration-200"
                    value={formData.cf_852}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a package...</option>
                    {packages.map((pkg) => (
                      <option key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {!showPayPal ? (
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#75b666] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#75b666] transition-all duration-200 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {loading ? 'Processing...' : 'Continue to Payment'}
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                      By submitting this form, you agree to our terms and conditions
                    </p>
                  </div>
                ) : (
                  <div className="text-center pt-6">
                    <h3 className="text-xl font-semibold mb-4">Complete Your Payment</h3>
                    <PayPalButton 
                      amount={selectedPrice} 
                      onSuccess={handlePayPalSuccess}
                      onError={handlePayPalError}
                    />
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
