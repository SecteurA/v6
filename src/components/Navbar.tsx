import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                loading="eager"  
                decoding="async"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/index.html" className="text-gray-600 hover:text-[#75b666] flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="/about.html" className="text-gray-600 hover:text-[#75b666]">About</a>
            <a 
              href="https://freescout.net/modules/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#75b666]"
            >
              Official Modules
            </a>
            <a href="/pricing.html" className="text-gray-600 hover:text-[#75b666]">Pricing</a>
            <a href="/contact.html" className="text-gray-600 hover:text-[#75b666]">Contact</a>
            <a 
              href="/install-freescout.html" 
              className="bg-[#75b666] text-white px-4 py-2 rounded-md hover:bg-[#235585] transition-colors"
              aria-label="Get started with FreeScout installation"
            >
              Get Started
            </a>
          </div>

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

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/index.html" className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-[#75b666]">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a href="/about.html" className="block px-3 py-2 text-gray-600 hover:text-[#75b666]">About</a>
            <a 
              href="https://freescout.net/modules/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-gray-600 hover:text-[#75b666]"
            >
              Official Modules
            </a>
            <a href="/pricing.html" className="block px-3 py-2 text-gray-600 hover:text-[#75b666]">Pricing</a>
            <a href="/contact.html" className="block px-3 py-2 text-gray-600 hover:text-[#75b666]">Contact</a>
            <a 
              href="/install-freescout.html" 
              className="block px-3 py-2 text-[#75b666] font-medium hover:bg-[#235585] hover:text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
