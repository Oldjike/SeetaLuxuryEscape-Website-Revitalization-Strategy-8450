import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HelpHub from '../components/HelpHub';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock, FiMapPin, FiPhone, FiCalendar } = FiIcons;

const OGLESQFlightPage = () => {
  useEffect(() => {
    // Create deployment div if it doesn't exist
    const deploymentDiv = document.getElementById('deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e');
    if (!deploymentDiv) {
      const div = document.createElement('div');
      div.id = 'deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e';
      document.getElementById('pickaxe-container').appendChild(div);
    }

    // Load Pickaxe script
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          >
            OGL-ESQ Flight Booking
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Book your flights with ease using our advanced booking system
          </motion.p>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
          >
            {/* Pickaxe Container */}
            <div 
              id="pickaxe-container" 
              className="w-full min-h-[600px] rounded-lg overflow-hidden"
            >
              {/* Pickaxe widget will be mounted here */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: "Secure Booking",
                description: "Safe and encrypted transactions for your peace of mind"
              },
              {
                icon: FiClock,
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your travel needs"
              },
              {
                icon: FiDollarSign,
                title: "Best Rates",
                description: "Competitive prices with no hidden fees"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Need Assistance?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Our travel experts are here to help you with your booking
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="tel:+19058866262"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center space-x-2"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call +1 905 886 6262</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Help Hub Component */}
      <HelpHub />
    </div>
  );
};

export default OGLESQFlightPage;