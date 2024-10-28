import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Request!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your FreeScout installation request and will get back to you within 24 hours.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
            <ul className="text-left text-gray-600 space-y-3">
              <li>1. Our team will review your requirements</li>
              <li>2. We'll send you an email with further instructions</li>
              <li>3. We'll schedule the installation at your convenience</li>
              <li>4. Your FreeScout helpdesk will be set up and ready to use</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              If you have any questions, please contact us at:
            </p>
            <p className="font-semibold text-gray-900">
              contact@freescout-installation.com
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
