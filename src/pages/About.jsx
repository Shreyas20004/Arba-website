export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900">
            About ARBA Accelerator
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            ARBA Accelerator is dedicated to guiding startups through structured growth paths, 
            connecting them with investors, mentors, and resources to achieve unprecedented success.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                title: "Mission", 
                desc: "Empower startups to scale globally with structured support, proven methodologies, and access to world-class resources.",
                icon: "🎯"
              },
              { 
                title: "Vision", 
                desc: "Build the next wave of unicorns across industries, fostering innovation and sustainable growth worldwide.",
                icon: "🚀"
              },
              { 
                title: "Values", 
                desc: "Innovation, Collaboration, and Growth. We believe in transparency, integrity, and the power of community-driven success.",
                icon: "💎"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "500+", label: "Startups Accelerated" },
              { number: "$2B+", label: "Total Funding Raised" },
              { number: "15", label: "Unicorns Created" },
              { number: "50+", label: "Countries Reached" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Onboarding",
                  desc: "We evaluate your startup's potential and create a customized growth plan."
                },
                {
                  step: "02", 
                  title: "Mentorship & Resources",
                  desc: "Access to expert mentors, resources, and our extensive network."
                },
                {
                  step: "03",
                  title: "Growth & Scaling",
                  desc: "Implement proven strategies to scale your business and reach new markets."
                },
                {
                  step: "04",
                  title: "Funding & Exit",
                  desc: "Connect with investors and prepare for successful funding rounds or exits."
                }
              ].map((process, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm sm:text-base">
                      {process.step}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {process.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-sm sm:text-base mb-6 sm:mb-8 opacity-90">
                Join our accelerator program and take your startup to the next level.
              </p>
              <button className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
