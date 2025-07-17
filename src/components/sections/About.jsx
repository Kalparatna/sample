import React, { useState, useEffect, useRef } from 'react';
import { Shield, Users, Award, Target, Zap, Globe, Building, MapPinned, GitBranch, Siren, UserCheck } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const hierarchyLevels = [
    {
      icon: Building,
      title: "State Level",
      role: "DGP / IG",
      description: "Policy and large-scale control",
      color: "blue",
      delay: "0s"
    },
    {
      icon: MapPinned,
      title: "District Level",
      role: "SP / IPS Officer",
      description: "Inter-division & inter-station coordination",
      color: "emerald",
      delay: "0.2s"
    },
    {
      icon: GitBranch,
      title: "Division Level",
      role: "SDPO",
      description: "Supervision of 2–5 police stations",
      color: "amber",
      delay: "0.4s"
    },
    {
      icon: Siren,
      title: "Station Level",
      role: "PI / PSI",
      description: "Execution unit, direct deployment",
      color: "purple",
      delay: "0.6s"
    },
    {
      icon: UserCheck,
      title: "Ground Level",
      role: "Constables / Mobile Units",
      description: "Bandobast, patrolling, daily incidents",
      color: "rose",
      delay: "0.8s"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50 border-emerald-200",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      rose: "from-rose-500 to-rose-600 text-rose-600 bg-rose-50 border-rose-200"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> CopMap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the Police Hierarchy & Operations
          </p>
        </div>

        {/* Enhanced Police Hierarchy Diagram */}
        <div className={`relative bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl mb-16 border border-white/50 shadow-2xl transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">India's Police System Hierarchy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {hierarchyLevels.map((level, index) => (
                <div 
                  key={index}
                  className={`group text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: level.delay }}
                >
                  <div className={`relative bg-gradient-to-r ${getColorClasses(level.color).split(' ')[0]} ${getColorClasses(level.color).split(' ')[1]} text-white p-6 rounded-2xl mb-4 h-24 flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl overflow-hidden`}>
                    <level.icon className="h-8 w-8 relative z-10 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg transition-all duration-300 group-hover:text-blue-600">{level.title}</h4>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{level.role}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{level.description}</p>
                </div>
              ))}
            </div>
            
            <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 max-w-4xl mx-auto">
                <p className="text-gray-700 font-medium text-lg leading-relaxed">
                  <span className="font-bold text-red-600">Current Challenge:</span> All levels are interconnected but currently operate with 
                  disconnected tools and manual coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mission & Vision */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="group relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 lg:p-10 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              <Target className="h-16 w-16" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg opacity-95 leading-relaxed">
                To digitize and modernize law enforcement operations across India by providing a comprehensive, 
                user-friendly platform that connects every level of the police hierarchy, enabling seamless 
                coordination, real-time monitoring, and data-driven decision making.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 lg:p-10 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              <Globe className="h-16 w-16" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg opacity-95 leading-relaxed">
                A future where every police operation in India is powered by technology, ensuring maximum 
                efficiency, transparency, and safety for both officers and citizens while maintaining the 
                highest standards of law enforcement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;