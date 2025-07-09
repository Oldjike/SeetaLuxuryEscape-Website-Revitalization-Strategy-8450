import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import PickaxeAssistant from '../components/PickaxeAssistant';
import UserReviews from '../components/UserReviews';
import SocialSharing from '../components/SocialSharing';
import WishlistManager from '../components/WishlistManager';
import WishlistButton from '../components/WishlistButton';
import CheckoutOptimization from '../components/CheckoutOptimization';

const { FiStar, FiHeart, FiCompass, FiUsers, FiMapPin, FiClock, FiShield, FiAward, FiPhone, FiCalendar } = FiIcons;

const HomePage = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  const testimonials = [
    {
      name: "Roxy & Michael Cook",
      location: "Scarborough, ON",
      text: "SeetaLuxuryEscape transformed our family vacation from stressful planning to pure bliss. Every detail was perfect, and the kids still talk about it months later!",
      rating: 5,
      service: "Luxury Family Travel"
    },
    {
      name: "Winston and Jos Taljit",
      location: "Edmonton, Alberta",
      text: "Our romantic getaway to Santorini was absolutely magical. The personalized touches and seamless arrangements made it unforgettable.",
      rating: 5,
      service: "Romantic Getaways"
    },
    {
      name: "Marcus Richards",
      location: "Brampton",
      text: "Flying home to visit family in Jamaica has never been easier. Reliable, affordable, and they understand exactly what we need.",
      rating: 5,
      service: "Caribbean Air Travel"
    }
  ];

  const luxuryServices = [
    {
      id: 'luxury-family',
      icon: FiUsers,
      title: "Luxury Family Travel",
      description: "Multi-generational adventures where every family member creates cherished memories",
      link: "/luxury-family-travel",
      features: ["Kid-friendly luxury", "Grandparent accessibility", "Educational experiences"],
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "From $5,000 per person"
    },
    {
      id: 'romantic-getaways',
      icon: FiHeart,
      title: "Romantic Getaways",
      description: "Intimate escapes crafted for couples seeking extraordinary moments together",
      link: "/romantic-getaways",
      features: ["Private experiences", "Surprise elements", "Couple's activities"],
      image: "https://images.unsplash.com/photo-1518621012420-8ab10887b471?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "From $3,500 per couple"
    },
    {
      id: 'luxury-adventure',
      icon: FiCompass,
      title: "Luxury Adventure",
      description: "Thrilling discoveries wrapped in comfort, safety, and uncompromising quality",
      link: "/luxury-adventure",
      features: ["Expert guides", "Luxury accommodations", "Unique experiences"],
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "From $7,500 per person"
    }
  ];

  const handleStartPlanning = () => {
    window.open('https://seetaluxuryescape.pathfndr.io/search/trips#travel', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Experience the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 block">
              Seeta Signature Glow
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200"
          >
            Escape the overwhelm. Let our expert curators craft your perfect luxury getaway while you focus on what matters most - creating unforgettable moments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleStartPlanning}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-xl"
            >
              Start Planning Your Escape
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <a 
                href="tel:+19058866262"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all flex items-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call +1 905 886 6262</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              From Overwhelm to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Extraordinary</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              You're successful, time-poor, and demand excellence. You shouldn't have to sacrifice quality time researching, comparing, and coordinating when you could be creating memories.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-red-400 mb-3">The Travel Planning Nightmare</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Hours spent researching destinations and accommodations</li>
                  <li>• Stress of coordinating multiple bookings and logistics</li>
                  <li>• Fear of disappointing experiences despite high investment</li>
                  <li>• Complexity of planning for different family needs and preferences</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">The Seeta Solution</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Expert curation tailored to your exact preferences</li>
                  <li>• Seamless logistics handled by travel professionals</li>
                  <li>• Guaranteed quality with our trusted partner network</li>
                  <li>• Personalized experiences that create lasting memories</li>
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
                alt="Luxury travel destination"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pickaxe Assistant Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              Tell Us Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Travel Dream</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered travel assistant will understand your preferences and connect you with our expert team to craft your perfect escape.
            </motion.p>
          </div>
          <PickaxeAssistant />
        </div>
      </section>

      {/* Luxury Services Section with Enhanced Features */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Luxury Travel</span> Experiences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover our signature luxury travel services, each crafted to deliver extraordinary experiences and unforgettable moments.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg hover:shadow-xl hover:border-amber-500/30 transition-all group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Wishlist Button */}
                  <div className="absolute top-4 right-4">
                    <WishlistButton item={{
                      id: service.id,
                      title: service.title,
                      description: service.description,
                      image: service.image,
                      price: service.price,
                      type: 'service'
                    }} />
                  </div>
                  
                  {/* Social Sharing */}
                  <div className="absolute top-4 left-4">
                    <SocialSharing 
                      title={`${service.title} - SeetaLuxuryEscape`}
                      description={service.description}
                      image={service.image}
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-serif">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-amber-400 font-semibold text-lg">{service.price}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-amber-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Link to={service.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg"
                      >
                        Explore {service.title}
                      </motion.button>
                    </Link>
                    
                    <motion.button
                      onClick={() => setShowCheckout(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full border-2 border-amber-500 text-amber-400 py-3 rounded-lg font-semibold hover:bg-amber-500/10 transition-all"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Caribbean Air-Only Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Caribbean Air Travel</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connecting families across the Caribbean with reliable, affordable air travel. Your trusted partner for getting home to loved ones.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Regional Expertise</h4>
                  <p className="text-sm text-gray-400">Deep knowledge of Caribbean routes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Reliable Service</h4>
                  <p className="text-sm text-gray-400">Dependable booking and support</p>
                </div>
              </div>
              
              <Link to="/air-only">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
                >
                  Find Your Flight Home
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Caribbean islands aerial view"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">SeetaLuxuryEscape?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We combine cutting-edge AI technology with human expertise to deliver the best travel service available.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiAward,
                title: "Expert Curation",
                description: "Hand-picked experiences by travel professionals with decades of expertise",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: FiShield,
                title: "Guaranteed Quality",
                description: "Every recommendation backed by our quality guarantee and trusted partnerships",
                color: "from-green-400 to-green-600"
              },
              {
                icon: FiClock,
                title: "Seamless Logistics",
                description: "We handle every detail so you can focus on enjoying your journey",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: FiHeart,
                title: "Personalized Service",
                description: "Tailored to your unique preferences, needs, and travel style",
                color: "from-pink-400 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <UserReviews />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Clients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Real stories from travelers who experienced the Seeta Signature Glow
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-sm text-amber-400 font-medium">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Ready to Experience Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Perfect Escape?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let us transform your travel dreams into extraordinary reality. Start your journey with the Seeta Signature Glow today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleStartPlanning}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg"
            >
              Start Planning Now
            </motion.button>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all flex items-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call +1 905 886 6262</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wishlist Manager */}
      <WishlistManager />

      {/* Checkout Modal */}
      <CheckoutOptimization 
        isVisible={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
    </div>
  );
};

export default HomePage;