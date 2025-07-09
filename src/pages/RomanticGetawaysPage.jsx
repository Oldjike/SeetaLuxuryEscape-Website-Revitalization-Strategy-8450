import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from '../components/PickaxeAssistant';

const { FiHeart, FiStar, FiMapPin, FiSunrise, FiMoon, FiGift, FiCamera, FiWine } = FiIcons;

const RomanticGetawaysPage = () => {
  const romanticExperiences = [
    {
      title: "Private Intimate Experiences",
      description: "Secluded moments crafted just for two, from private beach dinners to exclusive cultural encounters",
      icon: FiHeart,
      features: ["Private dining experiences", "Couples' spa treatments", "Exclusive access to venues", "Personal butler service"]
    },
    {
      title: "Surprise Elements",
      description: "Thoughtfully planned surprises that create magical moments and strengthen your connection",
      icon: FiGift,
      features: ["Anniversary celebrations", "Proposal arrangements", "Romantic surprises", "Special occasion planning"]
    },
    {
      title: "Luxurious Accommodations",
      description: "Handpicked romantic retreats with stunning views, privacy, and world-class amenities",
      icon: FiMoon,
      features: ["Ocean-view suites", "Private villas", "Infinity pools", "In-room amenities"]
    }
  ];

  const destinations = [
    {
      name: "Santorini Sunset Romance",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      description: "Iconic sunsets, private terraces, and intimate dining experiences in the Greek islands",
      highlights: ["Cliffside suite with infinity pool", "Private wine tasting", "Sunset sailing", "Couples' cooking class"]
    },
    {
      name: "Maldives Overwater Bliss",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      description: "Overwater bungalows with crystal-clear lagoons and unparalleled privacy",
      highlights: ["Private overwater villa", "Underwater dining", "Couples' snorkeling", "Spa treatments over water"]
    },
    {
      name: "Tuscany Vineyard Escape",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Rolling hills, private vineyards, and authentic Italian romance in luxury estates",
      highlights: ["Private villa with vineyard views", "Wine cellar tours", "Cooking classes", "Hot air balloon rides"]
    }
  ];

  const romanticMoments = [
    {
      title: "Sunrise Yoga for Two",
      description: "Start your day with private yoga sessions overlooking breathtaking landscapes",
      icon: FiSunrise
    },
    {
      title: "Stargazing Experiences",
      description: "Romantic evenings under the stars with private astronomy sessions",
      icon: FiMoon
    },
    {
      title: "Wine & Dine Perfection",
      description: "Curated culinary experiences with world-class wines and intimate settings",
      icon: FiWine
    },
    {
      title: "Memory Capturing",
      description: "Professional photography sessions to capture your romantic moments forever",
      icon: FiCamera
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518621012420-8ab10887b471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Romantic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 block">
              Getaways
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Intimate escapes crafted for couples seeking extraordinary moments together. 
            Where love stories unfold in the world's most enchanting destinations.
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
              Romance Shouldn't Be Complicated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              You want to create magical moments with your partner, not stress about 
              planning every detail. Let us handle the logistics while you focus on love.
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
                <h3 className="text-xl font-semibold text-red-800 mb-3">Common Romance Roadblocks</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Overwhelming choices for romantic destinations</li>
                  <li>• Difficulty securing private, intimate experiences</li>
                  <li>• Lack of local knowledge for hidden gems</li>
                  <li>• Stress of coordinating special surprises</li>
                  <li>• Generic experiences that lack personal touch</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Our Romance-First Approach</h3>
                <ul className="space-y-2 text-pink-700">
                  <li>• Curated romantic destinations and experiences</li>
                  <li>• Exclusive access to private venues and activities</li>
                  <li>• Local expertise for authentic, intimate moments</li>
                  <li>• Surprise planning and special occasion coordination</li>
                  <li>• Personalized touches that reflect your love story</li>
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
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Romantic couple enjoying sunset"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Romantic Experiences Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Crafted for Intimate Connection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Every romantic getaway is thoughtfully designed to deepen your connection 
              and create unforgettable shared experiences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {romanticExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={experience.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </div>

                <div className="space-y-2">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiHeart} className="w-4 h-4 text-pink-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Moments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif"
            >
              Magical Moments Await
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From sunrise to starlight, we create opportunities for romance 
              at every turn of your journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {romanticMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={moment.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{moment.title}</h3>
                <p className="text-gray-600 text-sm">{moment.description}</p>
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
              Romantic Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hand-selected destinations that provide the perfect backdrop 
              for your love story to unfold.
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
                        <SafeIcon icon={FiHeart} className="w-4 h-4 text-pink-400 mr-2" />
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
            className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-pink-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "Our romantic getaway to Santorini was absolutely magical. Every detail was perfect - 
              from the private sunset dinner to the surprise couples' massage. SeetaLuxuryEscape 
              didn't just plan a trip; they created memories that will last a lifetime. 
              This is how romance should be done!"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900">David & Emma Rodriguez</p>
                <p className="text-sm text-gray-500">Santorini Romantic Getaway</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Write Your Love Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Let us craft the perfect romantic escape where every moment deepens your connection. 
            Your extraordinary love story begins with a single conversation.
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

export default RomanticGetawaysPage;