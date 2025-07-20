import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from './PickaxeAssistant';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock } = FiIcons;

const AirOnlyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/60 to-blue-900/40">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
            alt="Caribbean Air Travel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Caribbean Air Travel
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Connecting families with reliable, affordable flights across the Caribbean
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => window.open('https://seetaluxuryescape.pathfndr.io/search/trips#travel', '_blank')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold"
            >
              Search Flights
            </button>
            <a 
              href="tel:+19058866262"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              Call Us: +1 905 886 6262
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiDollarSign,
                title: "Best Price Guarantee",
                description: "Competitive rates with no hidden fees"
              },
              {
                icon: FiShield,
                title: "Reliable Service",
                description: "30+ years of trusted experience"
              },
              {
                icon: FiHeart,
                title: "Family Connection",
                description: "Bringing loved ones together"
              },
              {
                icon: FiClock,
                title: "24/7 Support",
                description: "We're here when you need us"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 text-center"
              >
                <SafeIcon icon={benefit.icon} className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Search Integration */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-6">
              Find Your Flight
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Use our secure flight search powered by Pathfndr to find the best Caribbean flights
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('https://seetaluxuryescape.pathfndr.io/search/trips#travel', '_blank')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiPlane} className="w-6 h-6" />
                  <span>Search Available Flights</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif font-bold text-white text-center mb-12"
          >
            Popular Caribbean Routes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                from: "Toronto",
                to: "Kingston",
                price: "From $499",
                frequency: "Daily flights"
              },
              {
                from: "Montreal",
                to: "Port of Spain",
                price: "From $599",
                frequency: "3x weekly"
              },
              {
                from: "Vancouver",
                to: "Nassau",
                price: "From $699",
                frequency: "2x weekly"
              }
            ].map((route, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white">{route.from}</span>
                  <SafeIcon icon={FiPlane} className="w-6 h-6 text-cyan-400 transform rotate-90" />
                  <span className="text-white">{route.to}</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">{route.price}</p>
                  <p className="text-gray-400">{route.frequency}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-white mb-6"
          >
            Need Help Booking?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Our travel experts are here to help you find the best flights
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="tel:+19058866262"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Call Us Now
            </a>
            <PickaxeAssistant />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AirOnlyPage;