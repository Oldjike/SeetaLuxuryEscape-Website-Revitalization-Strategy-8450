import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle } = FiIcons;

const PickaxeAssistant = () => {
  const openPickaxeAssistant = () => {
    // Updated URL with working Pickaxe Travel Assistant
    window.open('https://studio.pickaxe.co/STUDIOY9KXG1ZNYKZAY4U/Seetaluxuryescape_Travel_Assistant_BYQV4', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="relative">
      {/* Assistant Trigger Button */}
      <motion.button
        onClick={openPickaxeAssistant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-xl flex items-center space-x-3"
      >
        <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
        <span>Tell Us Your Travel Dream</span>
      </motion.button>
    </div>
  );
};

export default PickaxeAssistant;