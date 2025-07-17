import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Users, Shield } from 'lucide-react';

// Badge Icon Component
// Custom icon for "Still Manual Operations"
const WorkflowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 mx-auto mb-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f59e0b"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3h6v6H3z" />
    <path d="M15 3h6v6h-6z" />
    <path d="M3 15h6v6H3z" />
    <path d="M15 15h6v6h-6z" />
    <path d="M9 6h6M6 9v6M15 9v6M9 18h6" />
  </svg>
);


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-24 pb-24 bg-gradient-to-br from-[#d0f3fc] via-white to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#00A0C4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-left">
            <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
          <span className="text-xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#0B0046] to-[#0B0046] animate-gradient-x whitespace-nowrap">
              Revolutionizing Law Enforcement
            </span>
            
            <span className="block text-sm sm:text-xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9] animate-gradient-x">
  Across the Nation
</span>

            </h1>

            <p className={`text-xl text-gray-600 mb-8 max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              CopMap is designed to bring automation, coordination, and control across all police operations empowering every police station and officers across the nation.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="https://calendly.com/admin-copmap/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#00A0C4] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0088a9] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
              </a>


              <button className="group border-2 border-[#00A0C4] text-[#00A0C4] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#00A0C4] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Watch How It Works
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { icon: Users, value: '20L+', label: 'Officers Nationwide', color: '#00A0C4' },
                { icon: Shield, value: '20K+', label: 'Police Stations', color: '#10b981' },
                { icon: WorkflowIcon, value: '90%', label: 'Still Manual Operations', color: '#f59e0b' }

              ].map((stat, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50">
                  {typeof stat.icon === 'function' ? <stat.icon /> : <stat.icon className="h-8 w-8 mx-auto mb-3" style={{ color: stat.color }} />}
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`}>
  <div className="relative z-10">
    <img  
      src="/police-hero.png"
      alt="Police Illustration"
      className="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
    />
  </div>
</div>

        </div>

        {/* Bottom Callout */}
        <div className={`relative bg-white/90 backdrop-blur-sm mt-24 p-8 rounded-3xl shadow-2xl border border-white/50 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#d0f3fc]/50 to-indigo-50/50 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digitize Every Operation in Your Police Station
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With CopMap, every police unit from a single station to the state level can effortlessly create bandobast plans,
              assign patrolling routes, track officers and vehicles in real time, manage force requirements, enable inter-department
              coordination, and handle digital documentation — all through one fully automated and centralized platform.
            </p>
            <button className="group inline-flex items-center gap-2 text-[#00A0C4] font-semibold hover:text-[#0088a9] transition-all duration-300 text-lg">
              Learn More
              <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
