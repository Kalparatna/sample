import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Route, Users, FileText, Activity, Clock, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Bandobast Planning",
      subtitle: "Plan and Deploy Bandobast in Minutes — Not Hours",
      description: "CopMap transforms traditional bandobast planning into a seamless, smart workflow powered by geo-mapping, officer optimization, and real-time control.",
      steps: [
        "Create and Map Bandobast Points using interactive map interface",
        "Assign Officers Smartly based on availability, proximity, and performance",
        "Generate and Share Duty Slips automatically to officers' mobile apps"
      ],
      impact: [
        "80% reduction in planning time",
        "100% digital record keeping",
        "0 paper usage"
      ],
      color: "blue"
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Patrolling Management",
      subtitle: "Digitally Plan, Track, and Analyze Police Patrols",
      description: "CopMap makes patrolling intelligent by enabling real-time planning, live GPS tracking, and analytics-based evaluation.",
      steps: [
        "Create Patrol Schedules and assign officers and vehicles to sectors",
        "Live GPS Tracking of all patrol units with deviation alerts",
        "Analyze Patrolling Effectiveness with coverage heatmaps and reports"
      ],
      impact: [
        "90% increase in transparency",
        "100% real-time movement logs",
        "40% improvement in zone coverage"
      ],
      color: "emerald"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Live Officer Tracking",
      subtitle: "See Every Officer, Everywhere, in Real Time",
      description: "CopMap brings live visibility to on-ground law enforcement by tracking officer movement, check-in/out, and duty compliance.",
      steps: [
        "Officer App Integration tracks location during active duty hours",
        "Auto Check-In / Check-Out when officers reach assigned points",
        "Status Monitoring shows who is online, off-duty, or on-patrol"
      ],
      impact: [
        "100% accountability for officers",
        "60% reduction in misreporting",
        "100% live status updates"
      ],
      color: "amber"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Force Requirement Workflow",
      subtitle: "Request, Allocate, and Fulfill Force Needs Seamlessly",
      description: "CopMap eliminates delay and confusion in force request escalations by digitizing and tracking every step.",
      steps: [
        "Digital Force Request Form with structured requirements",
        "Escalation and Approval Flow to division or district officers",
        "Assignment and Tracking with complete audit trail"
      ],
      impact: [
        "70% faster fulfillment time",
        "0 lost or delayed requests",
        "100% audit trail"
      ],
      color: "purple"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Automated Documentation",
      subtitle: "No More Paper Files — Everything is Digitally Logged",
      description: "From duty slips to event summaries, CopMap automates all paperwork and makes it securely accessible for all command levels.",
      steps: [
        "Auto-Generated PDFs for all bandobast and deployment records",
        "Officer Sign-Off and Acknowledgement with digital signatures",
        "Centralized Document Archive with filtering capabilities"
      ],
      impact: [
        "95% reduction in manual work",
        "100% compliance with audits",
        "80% time savings in reporting"
      ],
      color: "rose"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9]"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to modernize every aspect of police operations
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              data-index={index}
              className={`group transition-all duration-1000 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 lg:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="relative">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]} text-white mb-8 shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          {feature.icon}
                          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-300 group-hover:text-blue-600">
                        {feature.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-gray-700 mb-6">{feature.subtitle}</h4>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">{feature.description}</p>

                      {/* Enhanced Impact Metrics */}
                      <div className={`relative ${getColorClasses(feature.color).split(' ')[2]} border ${getColorClasses(feature.color).split(' ')[4]} p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
                        <h5 className="font-bold text-gray-900 mb-4 text-lg">Impact Metrics:</h5>
                        <div className="space-y-3">
                          {feature.impact.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
                              style={{ animationDelay: `${idx * 200}ms` }}
                            >
                              <div className={`p-1 rounded-full bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]}`}>
                                <TrendingUp className="h-4 w-4 text-white" />
                              </div>
                              <span className="font-semibold text-gray-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="relative">
                        <h5 className="text-xl font-bold text-gray-900 mb-6">How it works:</h5>
                        <div className="space-y-6">
                          {feature.steps.map((step, idx) => (
                            <div 
                              key={idx} 
                              className="group/step flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:translate-x-2"
                              style={{ animationDelay: `${idx * 300}ms` }}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]} text-white flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-300 group-hover/step:scale-110 group-hover/step:rotate-12`}>
                                {idx + 1}
                              </div>
                              <p className="text-gray-700 leading-relaxed font-medium pt-2">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;