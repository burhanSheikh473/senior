import React from 'react';
import { Target, Users, BarChart3, Headphones } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy"
    },
    {
      number: "02", 
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy"
    },
    {
      number: "03",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Driven Insights", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy"
    },
    {
      number: "04",
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy"
    }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-lime-400/10 to-transparent"></div>
      <div className="absolute top-20 left-20 w-24 h-24 opacity-20">
        <div className="w-full h-full border border-gray-600 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-4xl font-light text-gray-600">OUR</span>
            <span className="text-4xl font-bold text-lime-400">PROCESS</span>
          </div>
          
          {/* Step indicators */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="text-gray-500 text-sm mb-2">Step {step.number}</span>
                  <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-px bg-gray-700 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 rounded-2xl p-6 h-full hover:bg-gray-800/50 transition-colors border border-gray-800">
                <div className="flex items-center justify-center w-16 h-16 bg-lime-400/20 rounded-2xl mb-6 group-hover:bg-lime-400/30 transition-colors">
                  <div className="text-lime-400">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;