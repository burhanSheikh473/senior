import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-xl">Squb Media</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We deliver innovative ideas to elevate your digital agency and sharpen your brand.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <NavLink to="/" className={({isActive}) => `${isActive ? 'text-accent' : 'text-gray-300 hover:text-white'} transition-colors`}>Home</NavLink>
              <NavLink to="/services" className={({isActive}) => `${isActive ? 'text-accent' : 'text-gray-300 hover:text-white'} transition-colors`}>Services</NavLink>
              <NavLink to="/projects" className={({isActive}) => `${isActive ? 'text-accent' : 'text-gray-300 hover:text-white'} transition-colors`}>Projects</NavLink>
              <NavLink to="/news" className={({isActive}) => `${isActive ? 'text-accent' : 'text-gray-300 hover:text-white'} transition-colors`}>News</NavLink>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Email: contact@digitaal.com</li>
              <li>Phone: <a href="tel:+14092007963" className="hover:text-white">+1 409 200 7963</a></li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/squbmediallc" target="_blank" rel="noreferrer" className="hover:text-white">@squbmediallc</a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                <a href="https://www.facebook.com/share/14HL2VR9wNd/" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
              </li>
              <li>Address: 304 S Broadway, Los Angeles, CA 90013, United States</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-500 text-xs">
          © {new Date().getFullYear()} Digitaal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


