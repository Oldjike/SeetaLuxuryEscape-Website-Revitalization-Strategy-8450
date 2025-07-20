import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiGift, FiAward } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  SeetaLuxuryEscape
                </h3>
                <p className="text-sm text-gray-400">The Seeta Signature Glow</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating extraordinary travel experiences with personalized luxury and seamless service. Your trusted partner for{' '}
              <span className="text-amber-400">unforgettable journeys</span>.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Luxury Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Luxury Travel</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/luxury-family-travel" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Luxury Family Travel
                </Link>
              </li>
              <li>
                <Link to="/romantic-getaways" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Romantic Getaways
                </Link>
              </li>
              <li>
                <Link to="/luxury-adventure" className="text-gray-300 hover:text-green-400 transition-colors">
                  Luxury Adventure
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/air-only" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Caribbean Air Travel
                </Link>
              </li>
              <li>
                <Link to="/ogl-esq-flight" className="text-gray-300 hover:text-blue-400 transition-colors">
                  OGL-ESQ Flight
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Travel Insights
                </Link>
              </li>
              <li>
                <Link to="/referral" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2">
                  <SafeIcon icon={FiGift} className="w-4 h-4" />
                  <span>Referral Program</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-amber-400">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-400" />
                <div className="flex flex-col">
                  <span className="text-gray-300">seetachandra@rogers.com</span>
                  <span className="text-gray-300">johnchandra@rogers.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-gray-400" />
                <div className="flex flex-col">
                  <span className="text-gray-300">+1 905 886 6262</span>
                  <span className="text-gray-300">+1 416 928 3113</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex flex-col">
                  <span className="text-gray-300">Direct Travel New Wave</span>
                  <span className="text-gray-300">1075 Bay Street</span>
                  <span className="text-gray-300">Toronto, Ontario</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-sm text-gray-400 mb-4">
            <p className="mb-2">
              &copy;2024 SeetaLuxuryEscape - Direct Travel New Wave. All rights reserved.
            </p>
            <p>
              <span className="text-amber-400 hover:text-amber-300 cursor-pointer">Privacy Policy</span>
              {' | '}
              <span className="text-amber-400 hover:text-amber-300 cursor-pointer">Terms of Service</span>
              {' | '}
              <span className="text-gray-300">Tel: 905-886-6262 | 416-928-3113</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-amber-400 font-semibold">Check us out:</p>
            <div className="flex justify-center space-x-6 mt-2">
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Code - Add your tracking code here */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Add your tracking code here -->
            <!-- For best results, insert the code just before the closing </body> tag -->
            <!-- Example: Google Analytics, Facebook Pixel, or other tracking scripts -->
          `
        }}
      />
    </footer>
  );
};

export default Footer;