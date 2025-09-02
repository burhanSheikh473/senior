import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-10">Services</h1>
      </div>
      <Services />
    </main>
  );
};

export default ServicesPage;


