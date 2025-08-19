import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import WishlistButton from './WishlistButton';

const { FiMapPin, FiCalendar, FiDollarSign, FiStar, FiArrowRight, FiLoader } = FiIcons;

const ProductRecommendations = ({
  title = "Recommended For You",
  description = "Curated experiences based on your preferences",
  type = "luxury" // luxury, flights, hotels
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Sample product data based on type
  useEffect(() => {
    // Simulate loading data from an API
    setIsLoading(true);
    setTimeout(() => {
      const productData = getProductsByType(type);
      setProducts(productData);
      setIsLoading(false);
    }, 500);
  }, [type]);

  const getProductsByType = (productType) => {
    switch (productType) {
      case 'flights':
        return [
          {
            id: 'flight-toronto-kingston',
            title: "Toronto to Kingston",
            description: "Direct flights with convenient schedules",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $499",
            location: "YYZ → KIN",
            date: "Multiple departures daily",
            rating: 4.8
          },
          {
            id: 'flight-montreal-barbados',
            title: "Montreal to Barbados",
            description: "Escape to paradise with our special rates",
            image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $599",
            location: "YUL → BGI",
            date: "Departures 3x weekly",
            rating: 4.7
          },
          {
            id: 'flight-toronto-guyana',
            title: "Toronto to Guyana",
            description: "Connect with family and friends with ease",
            image: "https://images.unsplash.com/photo-1554123168-b400f9c806ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $649",
            location: "YYZ → OGL",
            date: "Multiple options available",
            rating: 4.9
          }
        ];

      case 'hotels':
        return [
          {
            id: 'hotel-sandals-royal-barbados',
            title: "Sandals Royal Barbados",
            description: "All-inclusive luxury resort with world-class amenities",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $399 per night",
            location: "Barbados",
            date: "Available year-round",
            rating: 4.9
          },
          {
            id: 'hotel-jade-mountain',
            title: "Jade Mountain Resort",
            description: "Stunning architectural marvel with infinity pools",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $899 per night",
            location: "St. Lucia",
            date: "Available year-round",
            rating: 5.0
          },
          {
            id: 'hotel-secrets-wild-orchid',
            title: "Secrets Wild Orchid",
            description: "Adults-only beachfront paradise with gourmet dining",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $499 per night",
            location: "Jamaica",
            date: "Available year-round",
            rating: 4.8
          }
        ];

      default: // luxury
        return [
          {
            id: 'luxury-santorini-getaway',
            title: "Santorini Romantic Escape",
            description: "Cliffside suites with private infinity pools and sunset views",
            image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $3,499 per person",
            location: "Greece",
            date: "5-7 nights",
            rating: 4.9
          },
          {
            id: 'luxury-tuscany-villa',
            title: "Private Tuscan Villa",
            description: "Family-friendly luxury estate in the Italian countryside",
            image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $5,999 per family",
            location: "Italy",
            date: "7-10 nights",
            rating: 4.8
          },
          {
            id: 'luxury-safari-adventure',
            title: "African Safari Experience",
            description: "Luxury tented camps and private game drives",
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "From $7,499 per person",
            location: "Tanzania",
            date: "8-12 nights",
            rating: 5.0
          }
        ];
    }
  };

  const handleViewDetails = () => {
    window.open('https://seetaluxuryescape.pathfndr.io/search/trips', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin text-amber-400 mb-4">
              <SafeIcon icon={FiLoader} className="w-12 h-12" />
            </div>
            <p className="text-gray-400">Loading recommendations...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg hover:shadow-xl hover:border-amber-500/30 transition-all group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Wishlist Button */}
                  <div className="absolute top-4 right-4">
                    <WishlistButton
                      item={{
                        id: product.id,
                        title: product.title,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                        location: product.location,
                        type: type
                      }}
                    />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                      <span className="text-sm text-white ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{product.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{product.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-400 font-semibold">
                      <SafeIcon icon={FiDollarSign} className="w-4 h-4 mr-2" />
                      <span>{product.price}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleViewDetails}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>View Details</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <motion.button
            onClick={handleViewDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-amber-500 text-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-amber-500/10 transition-all inline-flex items-center space-x-2"
          >
            <span>View All {type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;