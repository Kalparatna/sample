import React from 'react';
import CopMapLogo from '../assets/copmap.svg?react';
import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-md p-1 inline-block">
              <CopMapLogo className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Revolutionizing law enforcement operations across India through smart automation,
              real-time coordination, and data-driven insights.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#00A0C4] cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#00A0C4] cursor-pointer" />
              <a
                href="https://www.linkedin.com/company/eyeqlytics-technologies-pvt-ltd/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#00A0C4] cursor-pointer" />
              </a>
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#00A0C4] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#product" className="text-gray-300 hover:text-[#00A0C4]">Product</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-[#00A0C4]">Features</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#00A0C4]">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#00A0C4]">Contact</a></li>
              <li><a href="https://calendly.com/admin-copmap/30min" className="text-gray-300 hover:text-[#00A0C4]">Demo</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Bandobast Planning</li>
              <li>Patrolling Management</li>
              <li>Live Officer Tracking</li>
              <li>Force Requirements</li>
              <li>Digital Documentation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#00A0C4]" />
                <span className="text-gray-300 text-sm">contact@copmap.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#00A0C4]" />
                <span className="text-gray-300 text-sm">+91 9970283329</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#00A0C4] mt-0.5" />
                <span className="text-gray-300 text-sm">
                  10/81, Near SJP Petrol Pump,<br />
                  Bidkin, Aurangabad 431105<br />
                  Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CopMap. All rights reserved. Built for India's law enforcement.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/legal" className="text-gray-400 hover:text-white text-sm transition">
              Privacy / Terms / Security
            </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
