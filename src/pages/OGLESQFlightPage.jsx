import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HelpHub from '../components/HelpHub';
import ProductRecommendations from '../components/ProductRecommendations';

const { FiPlane, FiHeart, FiDollarSign, FiShield, FiClock, FiMapPin, FiPhone, FiCalendar } = FiIcons;

const OGLESQFlightPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    // Create deployment div if it doesn't exist
    const deploymentDiv = document.getElementById('deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e');
    if (!deploymentDiv) {
      const div = document.createElement('div');
      div.id = 'deployment-96a74e98-952b-4ce0-ad40-3ad1e28f516e';
      
      // Make sure the container exists before appending
      const pickaxeContainer = document.getElementById('pickaxe-container');
      if (pickaxeContainer) {
        pickaxeContainer.appendChild(div);
      }
    }

    // Load Pickaxe script with proper CSP handling
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onerror = () => {
      setLoadError("Failed to load booking widget. Please refresh the page or try again later.");
      setIsLoading(false);
    };
    script.onload = () => {
      setIsLoading(false);
    };
    
    document.body.appendChild(script);

    // Set a timeout to handle slow loading
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000);

    return () => {
      // Cleanup
      clearTimeout(timeout);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isLoading]);

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
            Book your flights with ease using our advanced booking system
          </motion.p>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }} 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8 shadow-xl"
          >
            {/* Pickaxe Container */}
            <div id="pickaxe-container" className="w-full min-h-[600px] rounded-lg overflow-hidden">
              {/* Pickaxe widget will be mounted here */}
              
              {/* Loading/Error state */}
              {(isLoading || loadError) && (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <SafeIcon icon={isLoading ? FiClock : FiPlane} className={`w-16 h-16 ${isLoading ? 'text-amber-400 animate-pulse' : 'text-cyan-400'} mb-4`} />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isLoading ? "Loading Flight Search Widget..." : "Flight Search"}
                  </h3>
                  <p className="text-gray-400 max-w-md mb-6">
                    {loadError || (isLoading ? "Please wait while we initialize our booking system..." : "Our flight search widget is ready to use.")}
                  </p>
                  
                  {/* Manual search fallback */}
                  {!isLoading && (
                    <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-6 rounded-lg border border-cyan-500/30 w-full max-w-lg">
                      <h4 className="text-lg font-semibold text-white mb-4">Quick Search</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">From</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white"
                            placeholder="City or Airport"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">To</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white"
                            placeholder="City or Airport"
                          />
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold w-full">
                        Search Flights
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
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
          </motion.div>
        </div>
      </section>

      {/* Help Hub Component */}
      <HelpHub />
    </div>
  );
};

export default OGLESQFlightPage;