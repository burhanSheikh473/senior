import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-10">Projects</h1>
      </div>
      <Projects />
    </main>
  );
};

export default ProjectsPage;


