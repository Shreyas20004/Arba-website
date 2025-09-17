import { Link } from "react-router-dom";
import { useState } from "react";

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Mock event data - you can replace this with real data from your backend
  const currentEvent = {
    id: 1,
    title: "Startup Pitch Day 2025",
    date: "October 15, 2025",
    location: "Virtual Event",
    description: "Join us for our biggest pitch event of the year! 50+ startups presenting to top investors.",
    isActive: true, // Set to false when no events are available
    registrationLink: "/events"
  };

  if (!currentEvent.isActive || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Event Info */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="hidden sm:block text-2xl animate-pulse">🎉</div>
            <div>
              <p className="font-semibold text-sm sm:text-base">
                {currentEvent.title} - {currentEvent.date}
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                {currentEvent.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to={currentEvent.registrationLink}
              className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Register Now
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-1"
              aria-label="Close banner"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}