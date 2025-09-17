import { Link } from "react-router-dom";
import { useState } from "react";
import GettingStartedPopup from "../components/GettingStartedPopup";
import EventBanner from "../components/EventBanner";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* Event Banner */}
      <EventBanner />
      
      {/* Hero Section */}
      <section className="text-center py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Escalating Your Startups
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Guiding early-stage ventures to unicorn status
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Startup Lifecycle */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            Startup Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {["Ideation", "Startup Formation", "MVP", "Series Funding", "Unicorn"].map((stage, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-1 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {stage}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Choose ARBA Accelerator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Mentorship",
                description: "Access to industry veterans and successful entrepreneurs",
                icon: "🎯",
              },
              {
                title: "Funding Connections",
                description: "Direct access to investors and funding opportunities",
                icon: "💰",
              },
              {
                title: "Growth Strategy",
                description: "Proven frameworks for scaling your business",
                icon: "📈",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-xl hover:shadow-green-100 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Join hundreds of startups that have successfully scaled with ARBA Accelerator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openPopup}
              className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Get Started Today
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-white transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Popup */}
      <GettingStartedPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
