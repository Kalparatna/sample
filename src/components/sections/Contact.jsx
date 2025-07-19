import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Shield, Award, Zap } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { trackContactForm, trackDemoRequest } from '../../utils/analytics';

const SERVICE_ID = 'service_jt665d5';
const TEMPLATE_ID = 'template_nrhr0y6';
const PUBLIC_KEY = 'mf99pvriDF7lMpXtM';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      toast.success('Message sent successfully!');
      trackContactForm('contact_page');
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["admin@copmap.in"],
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9970283329", "+91 9604332752"],
      color: "emerald"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["10/81, Near SJP Petrol Pump,", "Bidkin, Aurangabad 431105", "Maharashtra, India"],
      color: "amber"
    }
  ];

  const stats = [
    { icon: Clock, value: "24/7", label: "Support Available", color: "blue" },
    { icon: Shield, value: "99.9%", label: "Uptime Guarantee", color: "emerald" },
    { icon: Award, value: "30 min", label: "Demo Duration", color: "amber" },
    { icon: Zap, value: "Free", label: "Trial Period", color: "purple" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-[#00A0C4] to-[#0088a9] text-[#00A0C4] bg-[#00A0C4]/10",
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#00A0C4]/10 relative overflow-hidden" ref={sectionRef}>
      <Toaster position="top-right" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00A0C4]/10 to-[#0088a9]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-[#00A0C4]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0C4] to-[#0088a9]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to modernize your police operations? Contact us to schedule a demo or learn more about CopMap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50">
                  <div className={`p-4 bg-gradient-to-r ${getColorClasses(info.color).split(' ')[0]} ${getColorClasses(info.color).split(' ')[1]} text-white rounded-xl shadow-lg`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 font-medium">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={`mt-12 bg-white/90 p-8 rounded-2xl shadow-xl border border-white/50 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Why Choose CopMap?</h4>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="group text-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(stat.color).split(' ')[0]} ${getColorClasses(stat.color).split(' ')[1]} text-white mb-3`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/90 p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Request a Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="name" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A0C4] bg-white/80" />
                <input name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A0C4] bg-white/80" />
                <input name="organization" placeholder="Organization / Department" value={formData.organization} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A0C4] bg-white/80" />
                <textarea name="message" rows={4} placeholder="Message" value={formData.message} onChange={handleChange} className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A0C4] bg-white/80 resize-none" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-[#00A0C4] to-[#0088a9] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#0088a9] hover:to-[#00748d] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;