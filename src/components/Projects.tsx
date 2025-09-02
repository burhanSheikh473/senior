import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Masartary",
      category: "Design • 2023",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
      size: "large"
    },
    {
      title: "Branding Solutions", 
      category: "Design • 2023",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      size: "medium",
      accent: true
    },
    {
      title: "Mobile App Design",
      category: "Design • 2023", 
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=400",
      size: "medium"
    },
    {
      title: "Traffic Grow",
      category: "Design • 2023",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "large",
      overlay: true
    }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Decorative wireframe sphere */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
        <div className="w-full h-full border border-gray-700 rounded-full"></div>
        <div className="absolute inset-4 border border-gray-700 rounded-full"></div>
        <div className="absolute inset-8 border border-gray-700 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="text-lime-400 text-sm font-medium mb-4">+ PROJECTS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Discover the artistry behind<br />
              <span className="text-lime-400">our projects</span>
            </h2>
          </div>
          <div className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            aliqua molestie risus feugiat in ante metus dictumst at tempor
            commodo. Ut pharetra sit amet aliquam id diam maecenas ultricies mi.
            Volutpat lacus laoreet non.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large project 1 */}
          <div className="col-span-12 md:col-span-6">
            <div className="group cursor-pointer">
              <div className="bg-gray-900 rounded-2xl overflow-hidden h-80 relative">
                <img 
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{projects[0].title}</h3>
                  <p className="text-gray-300 text-sm">{projects[0].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orange accent project */}
          <div className="col-span-12 md:col-span-6">
            <div className="group cursor-pointer">
              <div className="bg-orange-500 rounded-2xl p-8 h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-full max-w-xs">
                    <div className="bg-white rounded-xl p-4">
                      <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-xl font-semibold text-white mb-1">{projects[1].title}</h3>
                  <p className="text-white/80 text-sm">{projects[1].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medium project */}
          <div className="col-span-12 md:col-span-6">
            <div className="group cursor-pointer">
              <div className="bg-gray-900 rounded-2xl overflow-hidden h-64 relative">
                <img 
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{projects[2].title}</h3>
                  <p className="text-gray-300 text-sm">{projects[2].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colorful wave pattern project */}
          <div className="col-span-12 md:col-span-6">
            <div className="group cursor-pointer">
              <div className="bg-gray-900 rounded-2xl h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 opacity-80"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-lg font-semibold text-white mb-1">Wave Pattern</h3>
                  <p className="text-white/80 text-sm">Design • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute top-10 right-20 text-right">
              <div className="text-white font-semibold">Traffic Grow</div>
              <div className="text-gray-400 text-sm">Design • 2023</div>
            </div>
            
            <div className="absolute top-20 right-40 w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-black">View All<br/>Work</span>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden h-80 relative group cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-8 border-l-black border-y-6 border-y-transparent ml-1"></div>
                </div>
              </div>
              
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-center">
                  Most trusted agency<br />in your town
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;