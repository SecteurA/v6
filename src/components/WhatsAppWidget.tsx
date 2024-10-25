import { lazy, Suspense } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phoneNumber = "442045773201";
  const message = "Hello! I'm interested in FreeScout installation services.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 p-0 border-none cursor-pointer focus:outline-none"
      aria-label="Contact us on WhatsApp"
      loading="lazy"
    >
      <div className="bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group relative w-full h-full flex items-center justify-center">
        <MessageCircle className="h-6 w-6 text-white" />
        
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-white text-gray-800 text-sm py-1 px-3 rounded shadow-lg whitespace-nowrap">
            Chat with us on WhatsApp
          </div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppWidget;