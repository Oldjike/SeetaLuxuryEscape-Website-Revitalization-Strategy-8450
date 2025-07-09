import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShare2, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiCopy, FiCheck } = FiIcons;

const SocialSharing = ({ 
  url = window.location.href, 
  title = "Check out this amazing travel experience from SeetaLuxuryEscape!", 
  description = "Experience the Seeta Signature Glow with personalized luxury travel",
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: FiFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-400/10'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      url: '#',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10',
      onClick: () => {
        // Instagram doesn't support direct sharing, so we'll copy the content
        navigator.clipboard.writeText(`${title}\n\n${description}\n\n${url}`);
        alert('Content copied! You can now paste it on Instagram.');
      }
    },
    {
      name: 'Email',
      icon: FiMail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    if (platform.onClick) {
      platform.onClick();
    } else {
      window.open(platform.url, '_blank', 'width=600,height=400');
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg"
      >
        <SafeIcon icon={FiShare2} className="w-4 h-4" />
        <span>Share</span>
      </motion.button>

      {/* Share Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-full right-0 mt-2 w-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/20 rounded-xl shadow-2xl z-50 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Share This Experience</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Social Platforms */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {socialPlatforms.map((platform) => (
                <motion.button
                  key={platform.name}
                  onClick={() => handleShare(platform)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg border border-gray-600 ${platform.bgColor} ${platform.color} text-gray-300 hover:border-gray-500 transition-all`}
                >
                  <SafeIcon icon={platform.icon} className="w-5 h-5" />
                  <span className="text-sm font-medium">{platform.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Copy Link */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Or copy link</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={url}
                  readOnly
                  className="flex-1 bg-black/50 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300"
                />
                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-black px-3 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <SafeIcon icon={copied ? FiCheck : FiCopy} className="w-4 h-4" />
                </motion.button>
              </div>
              {copied && (
                <p className="text-xs text-green-400">Link copied to clipboard!</p>
              )}
            </div>

            {/* Preview */}
            <div className="mt-4 p-3 bg-black/30 rounded-lg border border-gray-700">
              <p className="text-xs text-gray-400 mb-2">Preview:</p>
              <div className="flex items-start space-x-3">
                <img src={image} alt="Preview" className="w-12 h-12 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{title}</p>
                  <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SocialSharing;