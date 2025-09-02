import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const categories = [
    {
      title: 'Social Media Marketing & Management',
      points: [
        'Strategy development tailored to business goals',
        'Content creation (graphics, videos, reels, carousels)',
        'Page growth & audience engagement',
        'Paid ads management (Meta, TikTok, LinkedIn, etc.)',
      ],
    },
    {
      title: 'Performance Marketing (Paid Ads)',
      points: [
        'Facebook & Instagram Ads',
        'Google Ads (Search, Display, YouTube)',
        'LinkedIn Ads for B2B growth',
        'TikTok Ads for viral reach',
      ],
    },
    {
      title: 'Branding & Creative Design',
      points: [
        'Logo & brand identity design',
        'Social media creatives & templates',
        'UI/UX design for web & apps',
        'Motion graphics & animations',
      ],
    },
    {
      title: 'Website Design & Development',
      points: [
        'Responsive business websites',
        'E-commerce stores (Shopify, WooCommerce)',
        'Landing pages for campaigns',
        'Custom portfolio or service websites',
      ],
    },
    {
      title: 'Content Marketing',
      points: [
        'SEO-optimized blogs & articles',
        'Copywriting for websites & ads',
        'Email newsletters',
        'Video content strategy',
      ],
    },
    {
      title: 'Search Engine Optimization (SEO)',
      points: [
        'On-page & technical SEO',
        'Keyword research & competitor analysis',
        'Link building & off-page SEO',
        'Local SEO for businesses in the US',
      ],
    },
    {
      title: 'Lead Generation & Sales Funnel Building',
      points: [
        'High-converting landing pages',
        'CRM integration',
        'Targeted lead generation campaigns',
        'Sales automation systems',
      ],
    },
    {
      title: 'Consulting & Strategy',
      points: [
        'Digital growth strategy',
        'Competitor & market analysis',
        'Brand positioning & storytelling',
        'Analytics & performance reporting',
      ],
    },
    {
      title: 'Video Production & Editing',
      points: [
        'Promotional brand videos',
        'Product ads & explainer videos',
        'Reels/TikTok content creation',
        'Corporate video storytelling',
      ],
    },
    {
      title: 'E‑Commerce Growth Solutions',
      points: [
        'Shopify & WooCommerce store setup',
        'Product page optimization',
        'Retargeting ads for abandoned carts',
        'Marketplace integrations (Amazon, Etsy, eBay)',
      ],
    },
    {
      title: 'App Marketing & Development',
      points: [
        'Mobile app design & launch strategies',
        'ASO (App Store Optimization)',
        'Paid campaigns for app downloads',
        'Growth hacks for user retention',
      ],
    },
    {
      title: 'Data & Analytics',
      points: [
        'Monthly performance dashboards',
        'Customer journey insights',
        'Campaign ROI analysis',
        'Predictive analytics with AI',
      ],
    },
    {
      title: 'AI‑Powered Marketing Solutions',
      points: [
        'AI chatbots for customer support',
        'AI copy & content generation',
        'Predictive ad targeting',
        'Personalization through machine learning',
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative curved line */}
      <div className="absolute top-0 right-0 w-full h-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/10 to-transparent rounded-bl-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-medium mb-4">+ SERVICES</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We provide digital<br />
            services <span className="inline-block w-16 h-8 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full mx-2"></span> for you
          </h2>
        </div>

        {/* Services Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="text-white font-semibold text-lg mb-4">{idx + 1}. {cat.title}</h3>
              <ul className="space-y-2 text-sm">
                {cat.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-10">
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-500 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="text-accent text-sm font-medium">Let's make something great work together. Get Free Quote</div>
          <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-500 hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">SKILLS & WORKING AREA</h3>
          </div>

          <div className="grid grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Dribbble", percentage: "90%", color: "bg-pink-500" },
              { name: "Behance", percentage: "85%", color: "bg-blue-500" },
              { name: "Figma", percentage: "90%", color: "bg-purple-500" },
              { name: "Bootstrap", percentage: "70%", color: "bg-indigo-500" },
              { name: "Sketch", percentage: "90%", color: "bg-yellow-500" },
              { name: "XD", percentage: "55%", color: "bg-purple-600" }
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${skill.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                  <div className="text-white font-bold text-lg">{skill.name.slice(0, 2)}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{skill.percentage}</div>
                <div className="text-gray-400 text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;