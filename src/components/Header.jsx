import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown, FiHelpCircle, FiGift } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLuxuryDropdownOpen, setIsLuxuryDropdownOpen] = useState(false);
  const location = useLocation();

  const luxuryServices = [
    { name: 'Luxury Family Travel', path: '/luxury-family-travel' },
    { name: 'Romantic Getaways', path: '/romantic-getaways' },
    { name: 'Luxury Adventure', path: '/luxury-adventure' }
  ];

  const isActive = (path) => location.pathname === path;

  const scrollToHelpHub = () => {
    const helpButton = document.querySelector('.quest-help-hub-trigger');
    if (helpButton) {
      helpButton.click();
    }
  };

  const handleStartPlanning = () => {
    window.open('https://seetaluxuryescape.pathfndr.io/search/trips#travel', '_blank');
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm shadow-2xl sticky top-0 z-40 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 font-serif">
                SeetaLuxuryEscape
              </h1>
              <p className="text-xs text-gray-400 font-light">The Seeta Signature Glow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-300 hover:text-amber-400 transition-colors ${
                isActive('/') ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              Home
            </Link>

            {/* Luxury Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsLuxuryDropdownOpen(true)}
                onMouseLeave={() => setIsLuxuryDropdownOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <span>Luxury Travel</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
              </button>
              
              {isLuxuryDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseEnter={() => setIsLuxuryDropdownOpen(true)}
                  onMouseLeave={() => setIsLuxuryDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl border border-amber-500/20 py-2 z-50"
                >
                  {luxuryServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-3 text-gray-300 hover:bg-amber-500/10 hover:text-amber-400 transition-colors ${
                        isActive(service.path) ? 'bg-amber-500/10 text-amber-400' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link
              to="/air-only"
              className={`text-gray-300 hover:text-cyan-400 transition-colors ${
                isActive('/air-only') ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              Caribbean Air Travel
            </Link>

            <Link
              to="/blog"
              className={`text-gray-300 hover:text-purple-400 transition-colors ${
                isActive('/blog') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Travel Insights
            </Link>

            <Link
              to="/contact"
              className={`text-gray-300 hover:text-green-400 transition-colors ${
                isActive('/contact') ? 'text-green-400 font-semibold' : ''
              }`}
            >
              Contact
            </Link>

            {/* Referral Program Link */}
            <Link
              to="/referral"
              className={`flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors ${
                isActive('/referral') ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              <SafeIcon icon={FiGift} className="w-4 h-4" />
              <span>Referrals</span>
            </Link>

            {/* Help Button */}
            <button
              onClick={scrollToHelpHub}
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors"
              title="Get Help"
            >
              <SafeIcon icon={FiHelpCircle} className="w-5 h-5" />
              <span className="text-sm">Help</span>
            </button>

            <motion.button
              onClick={handleStartPlanning}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg shadow-amber-500/30"
            >
              Start Planning
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-amber-400 transition-colors"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-r from-gray-900 to-black border-t border-amber-500/20 py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-300 hover:text-amber-400 transition-colors px-4 py-2 ${
                  isActive('/') ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                Home
              </Link>

              {luxuryServices.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-300 hover:text-amber-400 transition-colors px-4 py-2 ${
                    isActive(service.path) ? 'text-amber-400 font-semibold' : ''
                  }`}
                >
                  {service.name}
                </Link>
              ))}

              <Link
                to="/air-only"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 ${
                  isActive('/air-only') ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                Caribbean Air Travel
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-300 hover:text-purple-400 transition-colors px-4 py-2 ${
                  isActive('/blog') ? 'text-purple-400 font-semibold' : ''
                }`}
              >
                Travel Insights
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-300 hover:text-green-400 transition-colors px-4 py-2 ${
                  isActive('/contact') ? 'text-green-400 font-semibold' : ''
                }`}
              >
                Contact
              </Link>

              <Link
                to="/referral"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors px-4 py-2 ${
                  isActive('/referral') ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                <SafeIcon icon={FiGift} className="w-4 h-4" />
                <span>Referral Program</span>
              </Link>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToHelpHub();
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors px-4 py-2"
              >
                <SafeIcon icon={FiHelpCircle} className="w-5 h-5" />
                <span>Get Help</span>
              </button>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleStartPlanning();
                }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-full font-semibold mx-4 hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg"
              >
                Start Planning
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;