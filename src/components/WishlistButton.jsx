import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useWishlist } from './WishlistManager';

const { FiHeart, FiLoader } = FiIcons;

const WishlistButton = ({ item }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, isLoading } = useWishlist();
  const [animating, setAnimating] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  
  const inWishlist = isInWishlist(item?.id);
  
  const handleToggle = () => {
    if (isLoading || localLoading || !item) return;
    
    setAnimating(true);
    setLocalLoading(true);
    
    setTimeout(() => {
      if (inWishlist) {
        removeFromWishlist(item.id);
      } else {
        addToWishlist(item);
      }
      setLocalLoading(false);
      setAnimating(false);
    }, 300);
  };

  if (isLoading) {
    return (
      <div className="p-2 rounded-full bg-black/50 text-gray-400">
        <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  return (
    <motion.button 
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={animating ? { 
        scale: [1, 1.2, 1], 
        rotate: [0, 15, -15, 0]
      } : {}}
      transition={animating ? { duration: 0.5 } : {}}
      className={`p-2 rounded-full transition-all ${
        localLoading 
          ? 'bg-gray-700 text-gray-400' 
          : inWishlist 
            ? 'bg-pink-500 text-white' 
            : 'bg-black/50 text-gray-400 hover:text-pink-400'
      }`}
      disabled={localLoading}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {localLoading ? (
        <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" />
      ) : (
        <SafeIcon 
          icon={FiHeart} 
          className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} 
        />
      )}
    </motion.button>
  );
};

export default WishlistButton;