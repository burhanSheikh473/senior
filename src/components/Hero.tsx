import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-28">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-20">
        <div className="w-full h-full border border-gray-600 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-40 w-20 h-20 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-violet-500 to-transparent rounded-full blur-md"></div>
      </div>

      <div className="container-default py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight break-words">
              Designing The <span className="text-gradient-accent">Future</span>
              <br />
              <span className="flex items-center gap-4 mt-2">
                Powering
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border border-violet-500 rounded-full animate-spin"></div>
                </div>
                <span className="text-gradient-accent">Your Solutions</span>
              </span>
            </h1>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-400">+ About Us</span>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200k</div>
                <div className="text-sm text-gray-400">satisfied customers</div>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end w-full">
            <div className="relative rounded-2xl overflow-hidden card shadow-2xl lg:max-w-[560px] ml-auto">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration"
                className="w-full h-96 object-cover scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b061a]/70 to-transparent"></div>
            </div>

            {/* Floating decorative element */}
            <div className="absolute -top-10 -right-10 w-24 h-24 opacity-60">
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-gray-700 rounded-full transform rotate-45 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-end">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-black rounded-full opacity-60"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              We deliver innovative ideas to elevate your digital agency{' '}
              <span className="text-accent">and sharpen your brand</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
            </p>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 btn-primary shadow">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Eleanor Pena"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Eleanor Pena</div>
                  <div className="text-gray-400 text-xs">Manager</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold text-gradient-accent">10<sup>+</sup></div>
              <div className="text-sm text-gray-400">
                Business leveraged qualified network<br />
                of national expert talents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;