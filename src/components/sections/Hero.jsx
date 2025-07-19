import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Users, Shield, CheckCircle, Star, MapPin, Clock, Zap, BarChart3, Award, Target } from 'lucide-react';
import { SoftwareApplicationSchema, FAQSchema } from '../common/StructuredData';
import { trackDemoRequest } from '../../utils/analytics';

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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Smart Bandobast Planning",
      description: "Create deployment plans in minutes with AI-powered mapping and officer optimization",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor all officers and vehicles live with GPS tracking and automated alerts",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Instant Coordination",
      description: "Seamless communication between stations, divisions, and state headquarters",
      color: "amber"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting for better decision making",
      color: "purple"
    }
  ];

  const testimonials = [
    {
      name: "Inspector Rajesh Kumar",
      position: "Station House Officer",
      location: "Mumbai Police",
      content: "CopMap has revolutionized our daily operations. What used to take hours of planning now happens in minutes.",
      rating: 5
    },
    {
      name: "ASP Priya Sharma",
      position: "Assistant Superintendent",
      location: "Delhi Police",
      content: "The real-time tracking feature has improved our response time by 40%. It's a game-changer for law enforcement.",
      rating: 5
    },
    {
      name: "DCP Arun Patel",
      position: "Deputy Commissioner",
      location: "Pune Police",
      content: "Finally, a solution that understands Indian police operations. CopMap is exactly what we needed.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Police Stations", icon: Shield },
    { number: "10,000+", label: "Officers Trained", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Award },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50"
    };
    return colors[color];
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-24 bg-gradient-to-br from-[#d0f3fc] via-white to-indigo-50 overflow-hidden">
      <SoftwareApplicationSchema />
      <FAQSchema />
      
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
               onClick={() => trackDemoRequest('hero_cta')}
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

      {/* Features Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9]">CopMap?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Indian police operations with features that address real-world challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]} text-white mb-6 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A0C4] to-[#0088a9] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Law Enforcement Across India
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of officers who have already transformed their operations with CopMap
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Officers Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9]">Saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from police officers using CopMap in their daily operations
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-[#00A0C4] font-semibold mb-1">
                  {testimonials[activeTestimonial].position}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-[#00A0C4] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#00A0C4]/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-emerald-400">
                Police Operations?
              </span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the digital revolution in law enforcement. See how CopMap can modernize your operations in just 30 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://calendly.com/admin-copmap/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDemoRequest('bottom_cta')}
                className="group relative bg-[#00A0C4] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#0088a9] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Target className="h-6 w-6" />
                  Schedule Free Demo
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></div>
              </a>
              
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span>No commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span>30-minute demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;