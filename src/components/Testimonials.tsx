import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-lime-400 text-sm font-medium mb-4">+ TESTIMONIAL</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hear what others say<br />
              about <span className="text-lime-400">partnering with us</span>
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua quis nostrud.
            </p>
          </div>

          <div className="space-y-8">
            {/* Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">4.8</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Etiam sed vulputate ipsum est et lorem ut<br />
                sed sed magna eget elit.
              </p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gray-900/50 border border-lime-400 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-white mb-6 leading-relaxed">
                "We cannot say enough good things about the team at [Company Name]. They took 
                our vision and turned it into a stunning website that perfectly captures our and they 
                kept us informed every step way."
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                      alt="Wade Warren"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium">Wade Warren</div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;