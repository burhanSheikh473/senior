import React from 'react';
import Achievements from '../components/Achievements';

const NewsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-10">News</h1>
        <p className="text-gray-400 mb-8">Latest updates and articles.</p>
      </div>
      <Achievements />
    </main>
  );
};

export default NewsPage;


