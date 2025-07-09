import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useWishlist } from './WishlistManager';

const { FiHeart } = FiIcons;

const WishlistButton = ({ item }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(item.id);

  const handleToggle = () => {
    if (inWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full transition-all ${
        inWishlist 
          ? 'bg-pink-500 text-white' 
          : 'bg-black/50 text-gray-400 hover:text-pink-400'
      }`}
    >
      <SafeIcon 
        icon={FiHeart} 
        className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} 
      />
    </motion.button>
  );
};

export default WishlistButton;