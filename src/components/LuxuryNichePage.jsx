import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from './PickaxeAssistant';

const { FiStar, FiHeart, FiAward, FiMapPin } = FiIcons;

const LuxuryNichePage = ({ 
  niche = "family", // "family", "romance", or "adventure"
  title = "Luxury Family Travel",
  subtitle = "Where every generation creates unforgettable memories",
  heroImage = "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
  features = [],
  destinations = []
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
          <img 
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <PickaxeAssistant />
          </motion.div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain Points */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-xl p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Common Challenges
              </h2>
              <div className="space-y-4">
                {features.challenges?.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">{challenge.title}</h3>
                      <p className="text-gray-400">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-amber-900/20 to-amber-800/20 rounded-xl p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Our Approach
              </h2>
              <div className="space-y-4">
                {features.solutions?.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <SafeIcon icon={FiStar} className="w-6 h-6 text-amber-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">{solution.title}</h3>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-white text-center mb-12"
          >
            Featured Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {destination.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{destination.description}</p>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-black mb-6"
          >
            Start Planning Your Perfect Escape
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black/80 mb-8"
          >
            Let our experts craft an unforgettable experience tailored just for you
          </motion.p>
          <PickaxeAssistant />
        </div>
      </section>
    </div>
  );
};

export default LuxuryNichePage;