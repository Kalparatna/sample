import React, { useEffect, useState } from 'react';

const PageHeader = ({ title, subtitle, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#d0f3fc] via-white to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#00A0C4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B0046] to-[#0B0046]">
              {title}
            </span>
          </h1>

          {subtitle && (
            <h2 className={`text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9] mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {subtitle}
            </h2>
          )}

          {description && (
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;