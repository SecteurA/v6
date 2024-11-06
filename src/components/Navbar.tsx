import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/index.html', label: 'Home', icon: Home },
    { href: '/about.html', label: 'About' },
    { href: '/pricing.html', label: 'Pricing' },
    { href: '/contact.html', label: 'Contact' },
    { href: '/install-freescout.html', label: 'Get Started', primary: true }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/index.html" className="flex items-center gap-3">
              <img 
                src="/images/logo.svg"
                alt="FreeScout Installation Service" 
                className="h-[50px] w-[200px] object-contain"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 ${
                  link.primary
                    ? 'bg-[#75b666] text-white px-4 py-2 rounded-md hover:bg-[#235585] transition-colors'
                    : 'text-gray-600 hover:text-[#75b666]'
                }`}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 ${
                  link.primary
                    ? 'text-[#75b666] font-medium hover:bg-[#235585] hover:text-white'
                    : 'text-gray-600 hover:text-[#75b666]'
                }`}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
