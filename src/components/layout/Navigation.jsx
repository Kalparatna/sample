import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CopMapLogo from '../../assets/copmap.svg?react';
import { trackDemoRequest } from '../../utils/analytics';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-[180px] h-[180px] flex items-center justify-center">
              <CopMapLogo className="w-full h-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-all duration-300 capitalize font-medium group focus:outline-none focus-visible:outline-none ${
                  isActivePath(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                  isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            {/* Calendly Link */}
            <a
              href="https://calendly.com/admin-copmap/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDemoRequest('header_button')}
              className="relative bg-[#00A0C4] text-white px-6 py-2.5 rounded-xl hover:bg-[#0088a9] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden group focus:outline-none focus-visible:outline-none"
            >
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:outline-none"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-2 transition-all duration-300 capitalize font-medium focus:outline-none focus-visible:outline-none ${
                    isActivePath(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              {/* Calendly Link for Mobile */}
              <a
                href="https://calendly.com/admin-copmap/30min"
                target="_blank"
                rel="noopener noreferrer"
               onClick={() => trackDemoRequest('mobile_menu')}
                className="block w-full mt-4 bg-[#00A0C4] text-white px-6 py-3 rounded-xl hover:bg-[#0088a9] transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 text-center focus:outline-none focus-visible:outline-none"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;