import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiUsers, FiShare2, FiCopy, FiCheck, FiTrendingUp, FiAward, FiStar } = FiIcons;

const ReferralProgram = () => {
  const [referralCode, setReferralCode] = useState('SEETA-LUXURY-VIP123');
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  const referralBenefits = [
    {
      icon: FiGift,
      title: "Travel Credit",
      description: "For every friend who books a luxury trip",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: FiUsers,
      title: "VIP Status Upgrade",
      description: "Unlock exclusive perks and priority service",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: FiAward,
      title: "Exclusive Experiences",
      description: "Access to members-only luxury adventures",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: FiTrendingUp,
      title: "Tier Rewards",
      description: "Earn more with each successful referral",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const rewardTiers = [
    {
      tier: "Bronze Explorer",
      referrals: "1-9 Referrals",
      reward: "Contact us for more information",
      perks: ["Priority customer support", "Travel planning consultation"]
    },
    {
      tier: "Silver Adventurer", 
      referrals: "10-25 Referrals",
      reward: "Contact us",
      perks: ["Complimentary room upgrades", "Welcome amenities", "Late checkout"]
    },
    {
      tier: "Gold Ambassador",
      referrals: "25+ Referrals", 
      reward: "Contact us",
      perks: ["Personal travel concierge", "Exclusive experiences", "VIP airport transfers"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiGift} className="w-10 h-10 text-black" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
              Seeta Signature
            </span>
            <br />
            <span className="text-white">Referral Program</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Share the luxury with friends and earn exclusive rewards. The more you refer, 
            the more <span className="text-amber-400 font-semibold">golden</span> experiences await.
          </motion.p>
        </div>

        {/* Referral Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Exclusive Referral Code</h3>
            <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
              <div className="flex-1 bg-black/50 border border-amber-500/30 rounded-lg p-4">
                <code className="text-amber-400 font-mono text-lg font-semibold">
                  {referralCode}
                </code>
              </div>
              <motion.button
                onClick={copyReferralCode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg flex items-center space-x-2"
              >
                <SafeIcon icon={copied ? FiCheck : FiCopy} className="w-5 h-5" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiShare2, title: "Share Your Code", desc: "Send to friends via email, social media, or text" },
              { icon: FiUsers, title: "Friend Books Trip", desc: "They use your code for their luxury escape" },
              { icon: FiGift, title: "Earn Rewards", desc: "Receive travel credits and exclusive perks" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {referralBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <SafeIcon icon={benefit.icon} className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Reward Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              VIP Reward Tiers
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewardTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 rounded-2xl p-8 hover:scale-105 transition-all ${
                  index === 2 ? 'border-amber-500/50 shadow-amber-500/20 shadow-2xl' : 'border-gray-700/50'
                }`}
              >
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-2">
                    {[...Array(index + 1)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{tier.tier}</h4>
                  <p className="text-gray-400 mb-4">{tier.referrals}</p>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                    {tier.reward}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {tier.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center text-gray-300">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-400 mr-3" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h3>
          <p className="text-gray-300 mb-6">
            Join our exclusive referral program and start sharing luxury experiences today.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg"
            >
              Join Program
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ReferralProgram;