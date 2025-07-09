import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from '../components/PickaxeAssistant';

const { FiCompass, FiStar, FiMapPin, FiMountain, FiAnchor, FiSun, FiShield, FiAward } = FiIcons;

const AdventurePage = () => {
  const adventureExperiences = [
    {
      title: "Expert-Guided Expeditions",
      description: "Professional guides with deep local knowledge ensure safe, educational, and thrilling adventures",
      icon: FiCompass,
      features: ["Certified expert guides", "Safety equipment included", "Local cultural insights", "Flexible difficulty levels"]
    },
    {
      title: "Luxury Base Camps",
      description: "Return to comfort after each adventure with world-class accommodations and amenities",
      icon: FiMountain,
      features: ["5-star adventure lodges", "Spa and wellness facilities", "Gourmet dining", "Premium equipment storage"]
    },
    {
      title: "Unique Access & Experiences",
      description: "Exclusive access to remote locations and private experiences not available to regular tourists",
      icon: FiAward,
      features: ["Private expedition permits", "Exclusive locations", "Custom itineraries", "VIP access"]
    }
  ];

  const destinations = [
    {
      name: "Patagonia Luxury Expedition",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Dramatic landscapes, glacier trekking, and luxury eco-lodges in the heart of Patagonia",
      highlights: ["Glacier hiking expeditions", "Luxury eco-lodges", "Wildlife photography", "Private helicopter tours"]
    },
    {
      name: "African Safari Adventure",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      description: "Big Five encounters, luxury tented camps, and conservation experiences in East Africa",
      highlights: ["Private game drives", "Luxury tented camps", "Conservation projects", "Cultural village visits"]
    },
    {
      name: "Himalayan Luxury Trek",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "High-altitude adventures with luxury mountain lodges and expert Sherpa guides",
      highlights: ["Expert Sherpa guides", "Luxury mountain lodges", "Helicopter transfers", "Cultural monasteries"]
    }
  ];

  const adventureTypes = [
    {
      title: "Mountain Expeditions",
      description: "Conquer peaks with expert guides and luxury base camps",
      icon: FiMountain
    },
    {
      title: "Ocean Adventures",
      description: "Explore marine wonders with private yacht charters and diving",
      icon: FiAnchor
    },
    {
      title: "Desert Safaris",
      description: "Navigate vast landscapes with luxury desert camps",
      icon: FiSun
    },
    {
      title: "Wildlife Encounters",
      description: "Experience nature's majesty with conservation-focused adventures",
      icon: FiShield
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
            backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Luxury
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 block">
              Adventures
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Thrilling discoveries wrapped in comfort, safety, and uncompromising quality. 
            Where extraordinary adventures meet luxury refinement.
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
              Adventure Without Compromise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              You crave extraordinary experiences but refuse to sacrifice comfort, safety, or quality. 
              We understand that true luxury adventure means having both thrill and refinement.
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
                <h3 className="text-xl font-semibold text-red-800 mb-3">Common Adventure Frustrations</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Compromising safety for authentic experiences</li>
                  <li>• Uncomfortable accommodations in remote locations</li>
                  <li>• Lack of expert guidance and local knowledge</li>
                  <li>• Difficulty accessing exclusive or remote destinations</li>
                  <li>• Generic group tours that miss unique opportunities</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Our Luxury Adventure Philosophy</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Uncompromising safety with expert guides and equipment</li>
                  <li>• Luxury accommodations in extraordinary locations</li>
                  <li>• Local expertise and cultural immersion</li>
                  <li>• Exclusive access to remote and pristine destinations</li>
                  <li>• Personalized adventures tailored to your interests</li>
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury adventure in mountains"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Adventure Experiences Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Expertly Crafted Adventures
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Every adventure is meticulously planned to deliver extraordinary experiences 
              while maintaining the highest standards of safety and comfort.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventureExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={experience.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </div>

                <div className="space-y-2">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-green-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Adventure Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From mountain peaks to ocean depths, we offer diverse adventure experiences 
              tailored to your passion and comfort level.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adventureTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={type.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Epic Adventure Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore the world's most extraordinary destinations with luxury accommodations 
              and expert-guided adventures.
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
                        <SafeIcon icon={FiMapPin} className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-green-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "The Patagonia expedition exceeded every expectation. From the luxury eco-lodge 
              to the expert guides who knew every trail and wildlife pattern, it was the perfect 
              blend of adventure and comfort. SeetaLuxuryEscape proved that you don't have to 
              choose between thrilling experiences and luxury accommodations!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900">Adventure Enthusiast</p>
                <p className="text-sm text-gray-500">Patagonia Luxury Expedition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Your Next Adventure Awaits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Ready to discover the world's most extraordinary destinations without compromising 
            on luxury and comfort? Let's plan your perfect adventure.
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

export default AdventurePage;