import EventBanner from "../components/EventBanner";

export default function WorkingWith() {
  const mainCategories = [
    { 
      title: "For Startups", 
      desc: "Comprehensive mentorship, funding access, and structured growth programs designed to scale your business.",
      icon: "🚀",
      features: ["Expert Mentorship", "Funding Networks", "Growth Programs", "Market Access"]
    },
    { 
      title: "For Investors", 
      desc: "Access curated deal flow, networking opportunities, and due diligence support for high-potential startups.",
      icon: "💰",
      features: ["Curated Deal Flow", "Due Diligence", "Portfolio Support", "Network Access"]
    },
    { 
      title: "For Mentors", 
      desc: "Share your expertise, guide the next generation of entrepreneurs, and expand your professional network.",
      icon: "👥",
      features: ["Flexible Scheduling", "Global Network", "Recognition", "Equity Opportunities"]
    }
  ];

  const programs = [
    {
      name: "Accelerator Program",
      duration: "3-6 months",
      description: "Intensive program for early-stage startups ready to scale",
      benefits: ["Weekly mentor sessions", "$50K-250K funding", "Demo day presentation", "Investor introductions"]
    },
    {
      name: "Incubator Program", 
      duration: "6-12 months",
      description: "Comprehensive support for idea-stage entrepreneurs",
      benefits: ["Co-working space", "Legal & technical support", "Product development", "Market validation"]
    },
    {
      name: "Venture Fellowship",
      duration: "12 months",
      description: "Extended support for scaling companies",
      benefits: ["Series A preparation", "Growth hacking", "International expansion", "Exit strategy planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Event Banner */}
      <EventBanner />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Working With ARBA
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're a startup, investor, or mentor, we have tailored programs 
            and opportunities to help you succeed in the entrepreneurship ecosystem.
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainCategories.map((category, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-center">
                  {category.desc}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {category.features.map((feature, j) => (
                    <div key={j} className="flex items-center text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {program.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 sm:space-y-3">
                  {program.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "500+", label: "Startups Supported", description: "Across all programs" },
              { number: "85%", label: "Success Rate", description: "Startups that raise funding" },
              { number: "$2.5B+", label: "Total Funding Raised", description: "By our portfolio companies" },
              { number: "15", label: "Unicorns Created", description: "Billion-dollar valuations achieved" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm opacity-80">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Submit your application through our online portal"
              },
              {
                step: "2",
                title: "Review",
                description: "Our team evaluates your application and startup potential"
              },
              {
                step: "3",
                title: "Interview",
                description: "Selected candidates participate in virtual interviews"
              },
              {
                step: "4",
                title: "Begin",
                description: "Start your journey with matched mentors and programs"
              }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "ARBA Accelerator transformed our startup from an idea to a million-dollar company in just 6 months.",
                author: "Sarah Chen",
                role: "CEO, TechFlow",
                category: "Startup"
              },
              {
                quote: "The quality of deal flow and due diligence support has significantly improved our investment success rate.",
                author: "Michael Roberts",
                role: "Partner, Venture Capital Group",
                category: "Investor"
              },
              {
                quote: "Mentoring through ARBA has been incredibly rewarding. The platform makes it easy to share expertise and see real impact.",
                author: "Dr. Lisa Park",
                role: "Former CTO, Fortune 500",
                category: "Mentor"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
                <div className="mb-4 sm:mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    testimonial.category === 'Startup' ? 'bg-green-100 text-green-800' :
                    testimonial.category === 'Investor' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {testimonial.category}
                  </span>
                </div>
                <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
