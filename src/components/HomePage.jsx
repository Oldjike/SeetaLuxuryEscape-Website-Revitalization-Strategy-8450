import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from './PickaxeAssistant';

const { FiStar, FiShield, FiAward, FiPlane, FiHeart } = FiIcons;

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Split Hero Section */}
      <section className="h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Luxury Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative bg-gradient-to-r from-black to-gray-900 flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
              alt="Luxury Travel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Extraordinary Journeys
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Curated luxury experiences for discerning travelers
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold"
            >
              Discover Luxury Travel
            </motion.button>
          </div>
        </motion.div>

        {/* Air-Only Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative bg-gradient-to-r from-cyan-900 to-blue-900 flex items-center justify-center p-8"
        >
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Caribbean Air Travel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Caribbean Air Travel
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Connecting families with reliable, affordable flights
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold"
            >
              Find Your Flight
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Authority Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <SafeIcon icon={FiAward} className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">30+ Years Experience</h3>
              <p className="text-gray-400">Trusted travel expertise since 1992</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <SafeIcon icon={FiShield} className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">TICO Registered</h3>
              <p className="text-gray-400">License #50023509</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <SafeIcon icon={FiStar} className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-400">Our commitment to excellence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Assistant Integration */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-white mb-6"
          >
            Tell Us Your Travel Dreams
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Our AI-powered assistant will help understand your preferences and connect you with our travel experts
          </motion.p>
          <PickaxeAssistant />
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Luxury Services */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8"
            >
              <h3 className="text-3xl font-serif font-bold text-amber-400 mb-6">
                Luxury Travel Experiences
              </h3>
              <div className="space-y-4">
                {[
                  { icon: FiHeart, title: "Family Adventures", desc: "Multi-generational luxury experiences" },
                  { icon: FiStar, title: "Romantic Getaways", desc: "Intimate escapes for couples" },
                  { icon: FiAward, title: "Luxury Adventure", desc: "Extraordinary discoveries in comfort" }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-amber-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">{service.title}</h4>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Air-Only Services */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-8"
            >
              <h3 className="text-3xl font-serif font-bold text-cyan-400 mb-6">
                Caribbean Air Travel
              </h3>
              <div className="space-y-4">
                {[
                  { icon: FiPlane, title: "Direct Routes", desc: "To all major Caribbean destinations" },
                  { icon: FiShield, title: "Best Price Guarantee", desc: "Competitive and transparent pricing" },
                  { icon: FiHeart, title: "Family Connection", desc: "Bringing loved ones together" }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">{service.title}</h4>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;