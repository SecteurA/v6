import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    cf_852: 'Basic installation' // Hidden field for package type
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);

      await fetch('https://crm.freescout-installation.com/modules/Webforms/capture.php', {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      });

      setMessage({ type: 'success', text: 'Thank you! We will contact you shortly.' });
      setFormData({
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        cf_852: 'Basic installation'
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-[calc(100vh-180px)] relative animate-fadeIn bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#75b666]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#235585]/10 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl animate-slideUp">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#75b666]/10 text-[#235585] font-medium text-sm mb-6 animate-fadeIn">
                <span className="mr-2">🚀</span>
                <span className="line-through text-gray-700 mr-2">$200</span>
                <span className="font-bold text-[#235585] animate-pulse">Now only $100</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slideInLeft">
                Professional
                <span className="text-[#235585]"> FreeScout</span>
                <br />
                Installation Service
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 animate-slideInLeft" style={{ animationDelay: "100ms" }}>
                Get your help desk up and running in no time with our expert installation service.
              </p>

              <a
                href="/install-freescout.html"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#1a3f66] border-2 border-[#235585] transition-all duration-300 group mb-8 focus:ring-2 focus:ring-offset-2 focus:ring-[#235585] focus:outline-none"
                aria-label="Start FreeScout Installation"
              >
                Start Installation
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:ml-auto w-full max-w-md animate-slideInRight">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to learn more?</h3>
              <p className="text-gray-700 mb-6">Leave your details and we'll contact you shortly</p>
              
              {message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden VTiger form fields */}
                <input type="hidden" name="__vtrftk" value="sid:df196c95e9d2996a71f7731dfbaf2ccc7aa98c48,1729701852" />
                <input type="hidden" name="publicid" value="f321530aa2e8303ffec7db84b712d9e3" />
                <input type="hidden" name="urlencodeenable" value="1" />
                <input type="hidden" name="name" value="FreeScout_leads" />
                <input type="hidden" name="cf_852" value={formData.cf_852} />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-[#235585]" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#235585] focus:border-transparent transition duration-200"
                      value={formData.firstname}
                      onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2 text-[#235585]" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#235585] focus:border-transparent transition duration-200"
                      value={formData.lastname}
                      onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-[#235585]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#235585] focus:border-transparent transition duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2 text-[#235585]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#235585] focus:border-transparent transition duration-200"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-[#235585] rounded-lg hover:bg-[#1a3f66] border-2 border-[#235585] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-2 focus:ring-[#235585] focus:outline-none"
                >
                  {loading ? 'Sending...' : (
                    <>
                      Request Information
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center mt-4">
                  We respect your privacy and will never share your details
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
