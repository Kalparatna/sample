import React from 'react';
import { Network, Target, Zap, BarChart3, Globe, CheckCircle } from 'lucide-react';

const Product = () => {
  const capabilities = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Complete Officer Management",
      description: "Digitally manage all officers, monitor availability, live status, and deployment history"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Smart Bandobast Planning",
      description: "Create bandobast plans on live maps with AI-generated static points and priority levels"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Tracking & Deployment",
      description: "Track every deployed officer and vehicle live with automated GPS boundaries"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Digital Patrolling Control",
      description: "Plan patrol routes, monitor timings, and track deviations from protocol"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Officer Mobile App Integration",
      description: "Seamless two-way communication with assignments and SOS alerts"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Insights & Decision Support",
      description: "Auto-generated reports and data-driven insights for better planning"
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is CopMap */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9]"> CopMap?</span>
          </h2>
       
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CopMap is a SaaS-based automation platform built to digitize and streamline police station operations across India. 
              It empowers every unit from small rural stations to state-level command centers to plan, manage, and monitor 
              their activities with speed, accuracy, and coordination.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 20 lakh officers and 20,000+ police stations, law enforcement is a crucial pillar of our nation's governance. 
              Yet, over 90% of police operations today still rely on manual, outdated processes leading to poor coordination, 
              inefficiencies, and lack of transparency.
            </p>
            <div className="bg-white border-2 border-[#00A0C4] text-[#00A0C4] p-6 rounded-xl inline-block">
              <p className="text-xl font-semibold">CopMap solves this.</p>
            </div>

          </div>
        </div>

        {/* Key Capabilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Capabilities of CopMap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#00A0C4] mb-4">{capability.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h4>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scalable Architecture */}
        <div className="bg-gradient-to-r from-[#00A0C4] to-[#0088a9] text-white p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Scalable Across India</h3>
            <p className="text-xl opacity-90">
              From a single rural thana to a metropolitan police HQ every police unit can be onboarded onto CopMap
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Stations", "Divisions", "Districts", "States"].map((unit, idx) => (
              <div className="text-center" key={idx}>
                <div className="bg-white/20 p-4 rounded-lg mb-3">
                  <h4 className="font-semibold">{unit}</h4>
                </div>
                <p className="text-sm opacity-90">
                  {unit === "Stations" && "Manage local deployments"}
                  {unit === "Divisions" && "Oversee multiple stations"}
                  {unit === "Districts" && "Coordinate force across regions"}
                  {unit === "States" && "Strategic control at highest level"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Result */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">The Result?</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-[#00A0C4]">Smarter planning</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-emerald-600">Real-time control</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-amber-600">Complete transparency</span>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            CopMap ensures that every deployment whether routine patrolling or high-stakes public events — 
            is handled with precision, safety, and accountability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
