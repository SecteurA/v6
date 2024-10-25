import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './components/Home';

// Lazy load components
const InstallFreescout = lazy(() => import('./components/InstallFreescout'));
const ThankYou = lazy(() => import('./components/ThankYou'));
const About = lazy(() => import('./components/About'));
const PricingPage = lazy(() => import('./components/PricingPage'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#75b666]"></div>
  </div>
);

const App = () => {
  // Get the current path without .html extension
  const path = window.location.pathname.replace('.html', '');

  // Render different content based on the path
  const renderContent = () => {
    switch (path) {
      case '/install-freescout':
        return <InstallFreescout />;
      case '/thank-you':
        return <ThankYou />;
      case '/about':
        return <About />;
      case '/pricing':
        return <PricingPage />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={<Loading />}>
        {renderContent()}
      </Suspense>
      <WhatsAppWidget />
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} FreeScout Installation Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;