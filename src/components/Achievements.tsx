import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      number: "01",
      title: "Awwwards Interior Excellence", 
      year: "2018"
    },
    {
      number: "02",
      title: "FWA Site of the Day",
      year: "2019" 
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-lime-400 text-sm font-medium mb-4">+ ACHIEVEMENTS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company Awards<br />
              <span className="text-lime-400">Achievements</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Duis aute irure lorem ipsum in simply<br />
              free text dolor not available in the lorem<br />
              reprehenderit
            </p>

            {/* Trophy icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-8">
              <div className="text-lime-400 text-2xl">🏆</div>
            </div>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-colors">
                <div className="text-3xl font-bold text-lime-400">{achievement.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{achievement.title}</h3>
                </div>
                <div className="text-gray-400">{achievement.year}</div>
                <div className="text-lime-400 text-2xl">+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;