import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/index.html" className="flex items-center gap-3">
              <Image 
                src="/images/logo.svg"
                alt="FreeScout Installation Service"
                width={200}
                height={50}
                className="h-[50px] w-[200px] object-contain"
                loading="eager"
                decoding="async"
                priority
              />
            </a>
          </div>
          
          {/* Rest of the code remains the same */}
        </div>
      </div>

      {/* Rest of the code remains the same */}
    </nav>
  );
}
