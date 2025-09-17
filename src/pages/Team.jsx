export default function Team() {
  const members = [
    { 
      name: "John Doe", 
      role: "Founder & CEO", 
      img: "/team1.jpg",
      bio: "Serial entrepreneur with 15+ years in startup ecosystems",
      linkedin: "#"
    },
    { 
      name: "Jane Smith", 
      role: "Lead Mentor", 
      img: "/team2.jpg",
      bio: "Former VP at Fortune 500 companies, expert in scaling operations",
      linkedin: "#"
    },
    { 
      name: "Alex Chen", 
      role: "Investment Director", 
      img: "/team3.jpg",
      bio: "Former VC partner with $500M+ in successful investments",
      linkedin: "#"
    },
    { 
      name: "Sarah Johnson", 
      role: "Growth Strategist", 
      img: "/team4.jpg",
      bio: "Marketing expert who's scaled 20+ startups to unicorn status",
      linkedin: "#"
    },
    { 
      name: "Mike Rodriguez", 
      role: "Tech Advisor", 
      img: "/team5.jpg",
      bio: "CTO at multiple successful exits, AI and blockchain specialist",
      linkedin: "#"
    },
    { 
      name: "Emily Davis", 
      role: "Legal Counsel", 
      img: "/team6.jpg",
      bio: "Corporate lawyer specializing in startup law and IP protection",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Meet Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            World-class entrepreneurs, investors, and industry experts dedicated to your startup's success
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {members.map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {member.bio}
                  </p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Join Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to help shape the future of entrepreneurship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base">
              Become a Mentor
            </button>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Advisory Board
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              "Dr. Robert Kim", "Lisa Zhang", "David Thompson", "Maria Garcia", "James Wilson",
              "Priya Patel", "Tom Anderson", "Anna Kowalski", "Carlos Mendez", "Rachel Green"
            ].map((advisor, i) => (
              <div key={i} className="text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-gray-500">
                    {advisor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                  {advisor}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Industry Expert
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
