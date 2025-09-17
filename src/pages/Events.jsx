import { useState } from "react";

export default function Events() {
  const [events] = useState([
    { 
      id: 1, 
      title: "Pitching 101: Mastering Your Startup Pitch", 
      date: "2025-09-25", 
      time: "5:00 PM EST", 
      seats: 30,
      description: "Learn the fundamentals of creating compelling pitch decks and presenting to investors.",
      speaker: "John Doe",
      location: "Virtual",
      category: "Workshop"
    },
    { 
      id: 2, 
      title: "Funding Strategies for Early-Stage Startups", 
      date: "2025-10-02", 
      time: "6:00 PM EST", 
      seats: 0,
      description: "Explore different funding options including angel investors, VCs, and alternative funding sources.",
      speaker: "Jane Smith", 
      location: "New York Office",
      category: "Seminar"
    },
    { 
      id: 3, 
      title: "Scaling Your Tech Startup", 
      date: "2025-10-10", 
      time: "4:00 PM EST", 
      seats: 45,
      description: "Technical strategies for scaling your product and infrastructure as you grow.",
      speaker: "Alex Chen",
      location: "Virtual",
      category: "Workshop"
    },
    { 
      id: 4, 
      title: "Legal Essentials for Entrepreneurs", 
      date: "2025-10-15", 
      time: "7:00 PM EST", 
      seats: 25,
      description: "Navigate the legal landscape of starting and growing a business.",
      speaker: "Emily Davis",
      location: "San Francisco Office",
      category: "Legal"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Workshop", "Seminar", "Legal"];

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Events & Sessions
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Join our community events, workshops, and networking sessions designed to accelerate your startup journey
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      event.category === 'Workshop' ? 'bg-green-100 text-green-800' :
                      event.category === 'Seminar' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      event.location === 'Virtual' ? 'bg-gray-100 text-gray-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {event.location}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl xl:text-2xl mb-3 sm:mb-4 text-gray-900 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date} — {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Speaker: {event.speaker}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {event.seats > 0 ? `${event.seats} seats available` : 'Fully booked'}
                    </div>
                  </div>

                  {event.seats > 0 ? (
                    <button className="w-full bg-blue-600 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                      Register Now
                    </button>
                  ) : (
                    <div className="w-full text-center">
                      <span className="inline-block text-red-500 font-semibold text-sm sm:text-base bg-red-50 px-6 py-3 sm:py-4 rounded-lg">
                        Registration Closed
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Want to Host an Event?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Share your expertise with our startup community and help fellow entrepreneurs succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Propose an Event
            </button>
            <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base">
              Become a Speaker
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
