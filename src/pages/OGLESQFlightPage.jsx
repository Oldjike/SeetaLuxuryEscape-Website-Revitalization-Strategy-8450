import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock, FiMapPin, FiPhone, FiCalendar } = FiIcons;

const OGLESQFlightPage = () => {
  // Load the Pickaxe script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/70 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
            alt="Caribbean Air Travel"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
              >
                OGL-ESQ Flight Booking
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-200 mb-8"
              >
                Seamless Caribbean flight booking with personalized service and competitive rates
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiShield} className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">TICO Protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">Best Price Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">24/7 Support</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="tel:+19058866262"
                  className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Need help? Call +1 905 886 6262</span>
                </a>
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Popular Destinations</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { city: "Kingston", country: "Jamaica" },
                  { city: "Port of Spain", country: "Trinidad" },
                  { city: "Bridgetown", country: "Barbados" },
                  { city: "Nassau", country: "Bahamas" }
                ].map((destination, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">{destination.city}</p>
                      <p className="text-gray-400 text-sm">{destination.country}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="inline-flex items-center space-x-2 text-cyan-400">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                  <span>Use the booking tool below to find flights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Engine Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-serif font-bold text-white mb-6"
            >
              Book Your Flight
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Find the perfect flight to connect you with your loved ones across the Caribbean
            </motion.p>
          </div>
          
          {/* Pickaxe Booking Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
          >
            <div id="deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e" className="min-h-[600px]"></div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12"
          >
            Why Choose Our Flight Booking Service
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiDollarSign,
                title: "Transparent Pricing",
                description: "No hidden fees or surprise charges - what you see is what you pay"
              },
              {
                icon: FiHeart,
                title: "Family Connection",
                description: "We understand the importance of connecting with loved ones"
              },
              {
                icon: FiShield,
                title: "TICO Registered",
                description: "Your booking is protected by TICO registration #50023509"
              },
              {
                icon: FiPlane,
                title: "Caribbean Expertise",
                description: "Specialized knowledge of Caribbean routes and destinations"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-6"
          >
            Need Assistance with Your Booking?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Our travel experts are ready to help you find the perfect flight for your needs
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="tel:+19058866262"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call +1 905 886 6262</span>
            </a>
            <a 
              href="mailto:seetachandra@rogers.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OGLESQFlightPage;