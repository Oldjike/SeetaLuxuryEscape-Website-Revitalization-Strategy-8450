import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiDollarSign, FiShield, FiHeart, FiUsers, FiHome, FiStar, FiSearch, FiPhone } = FiIcons;

const AirOnlyPage = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1'
  });

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    // Redirect to Pathfndr.io with parameters
    window.open('https://seetaluxuryescape.pathfndr.io/search/trips#travel', '_blank');
  };

  const popularRoutes = [
    { from: "Miami", to: "Kingston", price: "From $299", duration: "3h 15m" },
    { from: "New York", to: "Barbados", price: "From $459", duration: "4h 45m" },
    { from: "Toronto", to: "Port of Spain", price: "From $389", duration: "5h 30m" },
    { from: "London", to: "St. Lucia", price: "From $649", duration: "8h 20m" }
  ];

  const benefits = [
    {
      icon: FiDollarSign,
      title: "Competitive Pricing",
      description: "Best rates for Caribbean flights with transparent pricing and no hidden fees"
    },
    {
      icon: FiShield,
      title: "Reliable Service",
      description: "Dependable booking platform with 24/7 customer support for peace of mind"
    },
    {
      icon: FiMapPin,
      title: "Regional Expertise",
      description: "Deep knowledge of Caribbean routes and connections to get you home efficiently"
    },
    {
      icon: FiHeart,
      title: "Family Connections",
      description: "We understand the importance of visiting loved ones and staying connected"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Richards",
      location: "Brampton → Jamaica",
      text: "Flying home to visit family in Jamaica has never been easier. Reliable, affordable, and they understand exactly what we need.",
      rating: 5
    },
    {
      name: "Priya Patel",
      location: "London → Barbados",
      text: "Finally found a service that gets Caribbean travel. Great prices and excellent customer service when my flight was delayed.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      location: "Miami → Dominican Republic",
      text: "Regular traveler for business. SeetaLuxuryEscape makes booking quick and reliable every time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Your Way{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block">
              Home
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            Reliable, affordable Caribbean air travel that connects you with family and friends. We understand the importance of staying connected to home.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-xl"
            >
              Search Flights
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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

      {/* Flight Search Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Find Your Flight</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Search and book your Caribbean flight with ease
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
                <input
                  type="text"
                  value={searchData.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  placeholder="City or Airport"
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
                <input
                  type="text"
                  value={searchData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  placeholder="City or Airport"
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Departure</label>
                <input
                  type="date"
                  value={searchData.departure}
                  onChange={(e) => handleInputChange('departure', e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 rounded-lg text-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent [&::-webkit-calendar-picker-indicator]:invert-0 [&::-webkit-calendar-picker-indicator]:opacity-100"
                  style={{
                    colorScheme: 'light'
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Return</label>
                <input
                  type="date"
                  value={searchData.return}
                  onChange={(e) => handleInputChange('return', e.target.value)}
                  className="w-full p-3 bg-white border border-gray-600 rounded-lg text-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent [&::-webkit-calendar-picker-indicator]:invert-0 [&::-webkit-calendar-picker-indicator]:opacity-100"
                  style={{
                    colorScheme: 'light'
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Passengers</label>
                <select
                  value={searchData.passengers}
                  onChange={(e) => handleInputChange('passengers', e.target.value)}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5+">5+ Passengers</option>
                </select>
              </div>
            </div>

            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiSearch} className="w-5 h-5" />
              <span>Search Flights Now</span>
            </motion.button>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-2">Need help? Call us directly:</p>
              <a 
                href="tel:+19058866262"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>+1 905 886 6262</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Popular Routes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Frequently traveled Caribbean connections
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-cyan-400/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">{route.from}</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">{route.to}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-1">{route.price}</p>
                  <p className="text-sm text-gray-400">{route.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Air Travel Service?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We specialize in Caribbean air travel and understand the unique needs of travelers connecting with family and friends.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-lg hover:shadow-xl hover:border-cyan-500/30 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Caribbean Travelers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Real experiences from travelers who chose our air travel service
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-cyan-400">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Book Your Flight?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Find the best Caribbean flights at competitive prices. Your family is waiting - let's get you home.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
            >
              Search Flights Now
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
    </div>
  );
};

export default AirOnlyPage;