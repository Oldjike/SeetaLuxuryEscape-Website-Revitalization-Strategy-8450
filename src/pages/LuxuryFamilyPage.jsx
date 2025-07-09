import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from '../components/PickaxeAssistant';

const { FiUsers, FiHeart, FiStar, FiMapPin, FiCamera, FiShield, FiClock, FiSmile } = FiIcons;

const LuxuryFamilyPage = () => {
  const familyExperiences = [
    {
      title: "Multi-Generational Villas",
      description: "Spacious luxury accommodations where grandparents, parents, and children can all enjoy comfort and privacy",
      icon: FiUsers,
      features: ["Multiple bedrooms & living areas", "Accessibility features", "Private pools", "Concierge services"]
    },
    {
      title: "Educational Adventures",
      description: "Learning experiences that captivate both children and adults, from wildlife encounters to cultural immersion",
      icon: FiCamera,
      features: ["Expert-guided tours", "Interactive experiences", "Age-appropriate activities", "Cultural workshops"]
    },
    {
      title: "Stress-Free Logistics",
      description: "We handle every detail from transportation to dining reservations, so you focus on family time",
      icon: FiShield,
      features: ["Private transfers", "Kid-friendly restaurants", "Activity coordination", "24/7 support"]
    }
  ];

  const destinations = [
    {
      name: "Costa Rica Family Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Wildlife encounters, zip-lining, and luxury eco-lodges perfect for adventurous families",
      highlights: ["Sloth sanctuary visits", "Volcano tours", "Beach relaxation", "Luxury treehouse stays"]
    },
    {
      name: "Greek Islands Family Odyssey",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      description: "Ancient history comes alive with private villa stays and family-friendly cultural experiences",
      highlights: ["Private archaeological tours", "Cooking classes", "Island hopping", "Luxury villa rentals"]
    },
    {
      name: "Safari & Beach Combination",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      description: "African wildlife adventures followed by pristine beach relaxation in luxury resorts",
      highlights: ["Family-friendly game drives", "Cultural village visits", "Beach resort stays", "Conservation experiences"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Luxury Family
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 block">
              Adventures
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Where every family member creates cherished memories, from toddlers to grandparents. 
            Expertly crafted adventures that balance excitement with relaxation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <PickaxeAssistant />
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              The Family Travel Challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Balancing adventure with relaxation, education with fun, and ensuring every 
              generation has unforgettable moments together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Common Family Travel Struggles</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Finding activities that engage all age groups</li>
                  <li>• Coordinating complex logistics for multiple travelers</li>
                  <li>• Balancing educational value with entertainment</li>
                  <li>• Managing different energy levels and interests</li>
                  <li>• Ensuring grandparents can participate comfortably</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Our Family-First Approach</h3>
                <ul className="space-y-2 text-amber-700">
                  <li>• Multi-generational activity planning</li>
                  <li>• Flexible itineraries with downtime built-in</li>
                  <li>• Accommodations designed for families</li>
                  <li>• Educational experiences that captivate all ages</li>
                  <li>• Seamless logistics handled by experts</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Multi-generational family enjoying vacation"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Experiences Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Crafted for Every Family Member
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From toddlers to grandparents, we create experiences where every family member 
              finds joy, wonder, and connection.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={experience.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </div>

                <div className="space-y-2">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-amber-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Signature Family Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hand-picked destinations that offer the perfect blend of adventure, education, 
              and luxury for unforgettable family bonding.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4 text-amber-400 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "SeetaLuxuryEscape created the most incredible family adventure for our three generations. 
              From my 5-year-old grandson's excitement at seeing elephants to my 75-year-old mother's 
              comfortable accommodations, every detail was perfect. The kids are already asking when 
              we can go on another 'Seeta adventure'!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900">The Johnson Family</p>
                <p className="text-sm text-gray-500">Costa Rica Family Adventure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Create Your Family's Next Chapter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Let us craft a luxury family adventure where every moment becomes a treasured memory. 
            Start planning your multi-generational escape today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <PickaxeAssistant />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryFamilyPage;