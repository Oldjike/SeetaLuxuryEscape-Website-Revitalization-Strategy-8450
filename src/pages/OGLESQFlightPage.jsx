import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HelpHub from '../components/HelpHub';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock, FiMapPin, FiPhone, FiCalendar } = FiIcons;

const OGLESQFlightPage = () => {
  // Load the Pickaxe script when component mounts
  useEffect(() => {
    // Remove any existing scripts first to avoid duplicates
    const existingScript = document.querySelector('script[src="https://studio.pickaxe.co/api/embed/bundle.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    // Create and add new script
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      const scriptToRemove = document.querySelector('script[src="https://studio.pickaxe.co/api/embed/bundle.js"]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Help Hub Component */}
      <HelpHub />

      {/* Rest of the component code remains the same */}
      {/* ... Previous sections ... */}

      {/* Booking Engine Section - Updated */}
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
          
          {/* Pickaxe Booking Engine - Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
          >
            {/* Added allowfullscreen and other necessary attributes */}
            <iframe
              id="deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e"
              className="w-full min-h-[600px] border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Rest of the component code remains the same */}
      {/* ... Previous sections ... */}
    </div>
  );
};

export default OGLESQFlightPage;