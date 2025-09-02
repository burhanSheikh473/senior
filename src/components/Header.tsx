import React from 'react';
import { Menu, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white font-semibold text-xl">Squb Media</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `transition-colors ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`}>HOME</NavLink>
            <NavLink to="/services" className={({isActive}) => `transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>SERVICES</NavLink>
            <NavLink to="/projects" className={({isActive}) => `transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>PROJECTS</NavLink>
            <NavLink to="/news" className={({isActive}) => `transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}>NEWS</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-300 hover:text-lime-400 cursor-pointer transition-colors" />
            <a href="tel:+14092007963" className="btn-primary">
              Call: +1 409 200 7963
            </a>
            <Menu className="w-6 h-6 text-white md:hidden" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;