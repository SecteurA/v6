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
                className="inline-flex items-center px-8
