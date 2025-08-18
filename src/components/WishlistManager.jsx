import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiTrash2, FiShare2, FiCalendar, FiMapPin, FiDollarSign, FiX, FiCheck, FiLoader } = FiIcons;

// Create context for wishlist functionality
const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  isLoading: false,
});

const WishlistManager = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [isLoading, setIsLoading] = useState(true);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('seetaWishlist');
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('seetaWishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Error saving wishlist to localStorage:', error);
        showNotification('Failed to save wishlist', 'error');
      }
    }
  }, [wishlist, isLoading]);

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
  };

  const addToWishlist = (item) => {
    if (!item || !item.id) {
      showNotification('Invalid item data', 'error');
      return;
    }

    const existingItem = wishlist.find(w => w.id === item.id);
    if (!existingItem) {
      setWishlist([...wishlist, { ...item, addedAt: new Date().toISOString() }]);
      showNotification(`${item.title} added to wishlist!`);
    } else {
      showNotification(`${item.title} is already in your wishlist`);
    }
  };

  const removeFromWishlist = (itemId) => {
    const itemToRemove = wishlist.find(item => item.id === itemId);
    if (itemToRemove) {
      setWishlist(wishlist.filter(item => item.id !== itemId));
      showNotification(`${itemToRemove.title} removed from wishlist`);
    }
  };

  const isInWishlist = (itemId) => {
    return wishlist.some(item => item.id === itemId);
  };

  const clearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlist([]);
      showNotification('Wishlist cleared');
    }
  };

  const shareWishlist = () => {
    const wishlistText = `Check out my travel wishlist from SeetaLuxuryEscape:\n\n${wishlist.map(item => `• ${item.title}`).join('\n')}\n\nPlan your luxury escape: ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Travel Wishlist - SeetaLuxuryEscape',
        text: wishlistText,
        url: window.location.origin
      }).catch(err => {
        console.error('Share failed:', err);
        copyToClipboard(wishlistText);
      });
    } else {
      copyToClipboard(wishlistText);
    }
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => showNotification('Wishlist copied to clipboard!'))
      .catch(() => showNotification('Failed to copy to clipboard', 'error'));
  };

  // Group wishlist items by type
  const groupedWishlist = wishlist.reduce((acc, item) => {
    const type = item.type || 'other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, isLoading }}>
      {/* Wishlist Toggle Button */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 transition-all relative"
          aria-label="Open wishlist"
        >
          {isLoading ? (
            <SafeIcon icon={FiLoader} className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <SafeIcon icon={FiHeart} className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </>
          )}
        </motion.button>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 ${
              notification.type === 'error' 
                ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                : 'bg-gradient-to-r from-amber-500 to-yellow-500'
            } text-black px-4 py-2 rounded-lg shadow-lg z-[60] flex items-center space-x-2`}
          >
            <SafeIcon icon={notification.type === 'error' ? FiX : FiCheck} className="w-5 h-5" />
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wishlist Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-br from-gray-900 to-black border-l border-amber-500/20 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white font-serif flex items-center">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-pink-400 mr-2" />
                    My Wishlist
                  </h2>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label="Close wishlist"
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                  </button>
                </div>
                
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <SafeIcon icon={FiLoader} className="w-12 h-12 text-amber-400 animate-spin mb-4" />
                    <p className="text-gray-400">Loading your wishlist...</p>
                  </div>
                ) : (
                  <>
                    {/* Wishlist Actions */}
                    {wishlist.length > 0 && (
                      <div className="flex space-x-2 mb-6">
                        <motion.button 
                          onClick={shareWishlist}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all"
                        >
                          <SafeIcon icon={FiShare2} className="w-4 h-4" />
                          <span>Share</span>
                        </motion.button>
                        
                        <motion.button 
                          onClick={clearWishlist}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-2 border border-red-500 text-red-400 px-4 py-2 rounded-lg font-semibold hover:bg-red-500/10 transition-all"
                        >
                          <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                          <span>Clear All</span>
                        </motion.button>
                      </div>
                    )}
                    
                    {/* Wishlist Items */}
                    {wishlist.length === 0 ? (
                      <div className="text-center py-12">
                        <SafeIcon icon={FiHeart} className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg mb-2">Your wishlist is empty</p>
                        <p className="text-gray-500 text-sm">Start adding your dream travel experiences!</p>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {Object.entries(groupedWishlist).map(([type, items]) => (
                          <div key={type} className="space-y-4">
                            <h3 className="text-lg font-semibold text-amber-400 capitalize border-b border-amber-500/20 pb-2">
                              {type === 'other' ? 'Saved Items' : `${type}`}
                            </h3>
                            
                            {items.map((item) => (
                              <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-black/30 border border-gray-700 rounded-lg p-4 hover:border-amber-500/30 transition-all"
                              >
                                <div className="flex items-start space-x-4">
                                  {item.image && (
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      className="w-16 h-16 object-cover rounded-lg"
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                                      }}
                                    />
                                  )}
                                  
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-white mb-1 truncate">{item.title}</h4>
                                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">{item.description}</p>
                                    
                                    {item.location && (
                                      <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                                        <SafeIcon icon={FiMapPin} className="w-3 h-3" />
                                        <span>{item.location}</span>
                                      </div>
                                    )}
                                    
                                    {item.price && (
                                      <div className="flex items-center space-x-1 text-xs text-amber-400 mb-2">
                                        <SafeIcon icon={FiDollarSign} className="w-3 h-3" />
                                        <span>{item.price}</span>
                                      </div>
                                    )}
                                    
                                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                                      <SafeIcon icon={FiCalendar} className="w-3 h-3" />
                                      <span>Added {new Date(item.addedAt).toLocaleDateString()}</span>
                                    </div>
                                  </div>
                                  
                                  <button 
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="text-red-400 hover:text-red-300 transition-colors p-2"
                                    aria-label="Remove from wishlist"
                                  >
                                    <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                                  </button>
                                </div>
                                
                                <div className="mt-4">
                                  <motion.button 
                                    onClick={() => window.open('https://seetaluxuryescape.pathfndr.io/search/trips', '_blank')}
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-2 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all text-sm"
                                  >
                                    Plan This Trip
                                  </motion.button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* CTA */}
                    {wishlist.length > 0 && (
                      <div className="mt-8 p-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg">
                        <h4 className="font-semibold text-amber-400 mb-2">Ready to Book?</h4>
                        <p className="text-sm text-gray-300 mb-4">
                          Let our experts turn your wishlist into an extraordinary journey.
                        </p>
                        <motion.a
                          href="tel:+19058866262"
                          whileHover={{ scale: 1.05 }}
                          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all block text-center"
                        >
                          Contact Our Travel Experts
                        </motion.a>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </WishlistContext.Provider>
  );
};

// Hook for easier wishlist management in other components
export const useWishlist = () => useContext(WishlistContext);

export default WishlistManager;