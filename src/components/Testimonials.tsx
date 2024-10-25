import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Nico Braun",
    role: "IT Administrator",
    company: "Braun IT Solutions",
    content: "I am very satisfied with the service. The installation was done quickly and professionally. The support was also very good. I can only recommend it.",
    rating: 5
  },
  {
    name: "Jens Müller",
    role: "Support Manager",
    company: "Digital Marketing Agency",
    content: "Great service! The installation was done quickly and professionally. The support was also very good. Everything works perfectly.",
    rating: 5
  },
  {
    name: "David Williams",
    role: "Customer Service Lead",
    company: "Tech Support Solutions",
    content: "Excellent service and support. The installation was quick and everything works perfectly. The team was very helpful and responsive.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "Global Services Inc",
    content: "Outstanding service from start to finish. The team was professional and made the installation process seamless. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    company: "Innovation Tech",
    content: "Fantastic experience with the installation service. Everything was set up perfectly and the support team was incredibly helpful.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Help Desk Manager",
    company: "Support Solutions Ltd",
    content: "The installation was flawless and the team provided excellent guidance throughout the process. Very satisfied with the service.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Companies Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our clients say about our installation service
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mb-6">
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-auto border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}