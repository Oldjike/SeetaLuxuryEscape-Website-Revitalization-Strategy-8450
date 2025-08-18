import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HelpHub from '../components/HelpHub';
import ProductRecommendations from '../components/ProductRecommendations';
import WishlistManager from '../components/WishlistManager';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock, FiMapPin, FiPhone, FiCalendar, FiSearch, FiRefreshCw, FiExternalLink } = FiIcons;

const OGLESQFlightPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [showWhyNotAllowed, setShowWhyNotAllowed] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1'
  });

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDirectSearch = () => {
    // Redirect to pathfndr.io with search parameters
    const params = new URLSearchParams({
      from: searchData.from,
      to: searchData.to,
      departure: searchData.departure,
      return: searchData.return,
      passengers: searchData.passengers
    });
    
    window.open(`https://seetaluxuryescape.pathfndr.io/search/trips?${params.toString()}`, '_blank');
  };

  const retryLoading = () => {
    setRetryCount(prev => prev + 1);
    setIsLoading(true);
    setLoadError(null);
    
    // Remove existing script if any
    const existingScript = document.querySelector('script[src="https://studio.pickaxe.co/api/embed/bundle.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear existing deployment div
    const deploymentDiv = document.getElementById('deployment-46f5c045-be7f-4852-a296-eb974dca1671');
    if (deploymentDiv) {
      deploymentDiv.innerHTML = '';
    }
  };

  useEffect(() => {
    // Create deployment div if it doesn't exist
    let deploymentDiv = document.getElementById('deployment-46f5c045-be7f-4852-a296-eb974dca1671');
    if (!deploymentDiv) {
      deploymentDiv = document.createElement('div');
      deploymentDiv.id = 'deployment-46f5c045-be7f-4852-a296-eb974dca1671';
      
      // Make sure the container exists before appending
      const pickaxeContainer = document.getElementById('pickaxe-container');
      if (pickaxeContainer) {
        pickaxeContainer.appendChild(deploymentDiv);
      }
    }

    // Load Pickaxe script with enhanced error handling
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    script.crossOrigin = "anonymous";
    
    script.onerror = (error) => {
      console.error('Pickaxe script loading error:', error);
      setLoadError("Unable to load the booking widget. This might be due to network issues or content security policies.");
      setIsLoading(false);
    };
    
    script.onload = () => {
      console.log('Pickaxe script loaded successfully');
      // Give the widget time to initialize
      setTimeout(() => {
        setIsLoading(false);
        // Check if the widget actually loaded
        const widgetContent = deploymentDiv?.innerHTML;
        if (!widgetContent || widgetContent.trim() === '') {
          setLoadError("Booking widget failed to initialize properly.");
        }
      }, 3000);
    };
    
    document.body.appendChild(script);

    // Set a timeout to handle slow loading
    const timeout = setTimeout(() => {
      if (isLoading) {
        setLoadError("Booking widget is taking longer than expected to load.");
        setIsLoading(false);
      }
    }, 15000);

    return () => {
      clearTimeout(timeout);
      // Don't remove script on cleanup to avoid issues
    };
  }, [retryCount]);

  const handleShowWhyNotAllowed = () => {
    setShowWhyNotAllowed(!showWhyNotAllowed);
  };

  const popularRoutes = [
    { from: "Toronto", to: "Kingston", price: "From $499", code: "YYZ → KIN" },
    { from: "Montreal", to: "Barbados", price: "From $599", code: "YUL → BGI" },
    { from: "Vancouver", to: "Nassau", price: "From $699", code: "YVR → NAS" },
    { from: "Calgary", to: "Port of Spain", price: "From $649", code: "YYC → POS" }
  ];

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
            Book your flights with ease using our advanced booking system. Connect with family and friends across the Caribbean.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={handleDirectSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center space-x-2"
            >
              <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
              <span>Search Flights Directly</span>
            </motion.button>
            <a 
              href="tel:+19058866262" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call +1 905 886 6262</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Widget */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.3 }} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Flight Search Widget</h2>
                {(loadError || !isLoading) && (
                  <motion.button
                    onClick={retryLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
                    <span className="text-sm">Retry</span>
                  </motion.button>
                )}
              </div>

              {/* CSP Information */}
              {showWhyNotAllowed && (
                <div className="mb-6 bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 text-sm">
                  <h4 className="text-blue-400 font-semibold mb-2">Troubleshooting Information</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>If the booking widget isn't loading, it could be due to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Browser security settings blocking third-party scripts</li>
                      <li>Ad blockers preventing the widget from loading</li>
                      <li>Network connectivity issues</li>
                      <li>Content Security Policy restrictions</li>
                    </ul>
                    <div className="mt-3 p-3 bg-cyan-900/30 rounded border border-cyan-500/30">
                      <p className="text-cyan-300 font-medium">Quick Solutions:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-cyan-200">
                        <li>Try disabling your ad blocker for this site</li>
                        <li>Use the direct search form below</li>
                        <li>Call us directly for assistance</li>
                      </ul>
                    </div>
                  </div>
                  <button 
                    onClick={handleShowWhyNotAllowed} 
                    className="mt-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm underline"
                  >
                    Hide troubleshooting info
                  </button>
                </div>
              )}

              {/* Pickaxe Container */}
              <div id="pickaxe-container" className="w-full min-h-[500px] rounded-lg overflow-hidden">
                {/* Widget loading/error state */}
                {(isLoading || loadError) && (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center p-6">
                    <SafeIcon 
                      icon={isLoading ? FiClock : FiPlane} 
                      className={`w-16 h-16 mb-4 ${isLoading ? 'text-amber-400 animate-spin' : 'text-cyan-400'}`} 
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {isLoading ? "Loading Flight Search..." : "Flight Search Widget"}
                    </h3>
                    <p className="text-gray-400 max-w-md mb-4">
                      {loadError || "Initializing our advanced booking system..."}
                    </p>
                    
                    {loadError && (
                      <div className="space-y-3">
                        <button 
                          onClick={handleShowWhyNotAllowed} 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm underline"
                        >
                          Why isn't it loading? (Troubleshooting)
                        </button>
                        <div className="flex space-x-3">
                          <button
                            onClick={retryLoading}
                            className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-600 transition-colors"
                          >
                            Try Again
                          </button>
                          <button
                            onClick={handleDirectSearch}
                            className="border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-500/10 transition-colors"
                          >
                            Use Direct Search
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Enhanced Manual Search Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Flight Search</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">From</label>
                    <input 
                      type="text" 
                      value={searchData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="City or Airport Code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">To</label>
                    <input 
                      type="text" 
                      value={searchData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="City or Airport Code"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Departure Date</label>
                    <input 
                      type="date" 
                      value={searchData.departure}
                      onChange={(e) => handleInputChange('departure', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Return Date (Optional)</label>
                    <input 
                      type="date" 
                      value={searchData.return}
                      onChange={(e) => handleInputChange('return', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-600 rounded-lg text-black focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Passengers</label>
                  <select 
                    value={searchData.passengers}
                    onChange={(e) => handleInputChange('passengers', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                </div>
                <motion.button
                  onClick={handleDirectSearch}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <SafeIcon icon={FiSearch} className="w-5 h-5" />
                  <span>Search Flights</span>
                </motion.button>
                
                <div className="text-center pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-2">Need personalized assistance?</p>
                  <a 
                    href="tel:+19058866262" 
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>Call +1 905 886 6262</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif"
            >
              Popular Routes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
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
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-cyan-400/40 transition-all cursor-pointer group"
                onClick={() => {
                  setSearchData(prev => ({
                    ...prev,
                    from: route.from,
                    to: route.to
                  }));
                }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="font-semibold text-white">{route.from}</span>
                    <SafeIcon icon={FiPlane} className="w-5 h-5 text-cyan-400 transform rotate-90" />
                    <span className="font-semibold text-white">{route.to}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{route.code}</p>
                  <p className="text-2xl font-bold text-cyan-400">{route.price}</p>
                  <p className="text-sm text-gray-400 mt-2 group-hover:text-cyan-300 transition-colors">
                    Click to search this route
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FiShield, title: "Secure Booking", description: "Safe and encrypted transactions for your peace of mind" },
              { icon: FiClock, title: "24/7 Support", description: "Round-the-clock assistance for all your travel needs" },
              { icon: FiDollarSign, title: "Best Rates", description: "Competitive prices with no hidden fees" }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-cyan-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white text-center md:text-left">{feature.title}</h3>
                    <p className="text-gray-300 text-center md:text-left">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Recommendations Section */}
      <ProductRecommendations 
        title="Popular Flight Packages"
        description="Discover our most popular flight deals and packages"
        type="flights"
      />

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
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="tel:+19058866262" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call +1 905 886 6262</span>
            </a>
            <button
              onClick={handleDirectSearch}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-500/10 transition-all flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
              <span>Direct Flight Search</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Help Hub Component */}
      <HelpHub />
      
      {/* Wishlist Manager */}
      <WishlistManager />
    </div>
  );
};

export default OGLESQFlightPage;