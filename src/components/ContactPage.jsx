import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiMessageCircle, FiUsers, FiHeart, FiCompass, FiAward } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelType: '',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your CRM or email service
    alert('Thank you for your inquiry! We\'ll be in touch within 24 hours.');
  };

  const launchTravelAssistant = () => {
    // Open Pickaxe Travel Assistant in a new window
    window.open('https://studio.pickaxe.co/STUDIOY9KXG1ZNYKZAY4U/Seetaluxuryescape_Travel_Assistant_BYQV4', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: ['seetachandra@rogers.com', 'johnchandra@rogers.com'],
      description: 'We typically respond within 4 hours'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: ['+1 905 886 6262'],
      description: 'Monday - Friday: 9AM - 6PM EST'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: ['Direct Travel New Wave', '1075 Bay Street', 'Toronto, Ontario, M5S 2B1'],
      description: 'TICO: 50023509'
    }
  ];

  const travelTypes = [
    { value: 'family', label: 'Luxury Family Travel', icon: FiUsers },
    { value: 'romantic', label: 'Romantic Getaways', icon: FiHeart },
    { value: 'adventure', label: 'Luxury Adventure', icon: FiCompass },
    { value: 'air-only', label: 'Caribbean Air Travel', icon: FiMapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
              Let's Plan Your Perfect Escape
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Ready to experience the Seeta Signature Glow? Our travel experts are here to craft your extraordinary journey. Get in touch and let's start planning.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-serif">
                Tell Us About Your Travel Dreams
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+1 905 886 6262"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Type of Travel Experience
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => handleInputChange('travelType', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select travel type</option>
                    {travelTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center text-gray-300">
                      <input
                        type="radio"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="mr-2 text-amber-500"
                      />
                      Email
                    </label>
                    <label className="flex items-center text-gray-300">
                      <input
                        type="radio"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="mr-2 text-amber-500"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Dream Trip *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Where would you like to go? What experiences are you seeking? Any special occasions or requirements?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send My Inquiry</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-serif">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={info.icon} className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                        {Array.isArray(info.content) ? (
                          info.content.map((item, idx) => (
                            <p key={idx} className="text-lg text-gray-300">{item}</p>
                          ))
                        ) : (
                          <p className="text-lg text-gray-300">{info.content}</p>
                        )}
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Response Time</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We pride ourselves on quick response times. You can expect to hear from our travel experts within 4 hours during business hours, and within 24 hours on weekends.
                </p>
                <p className="text-sm text-gray-400">
                  For urgent travel needs, please call us directly at +1 905 886 6262.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Prefer to Chat?</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Try our AI Travel Assistant for instant responses to your travel questions and to start planning your perfect escape.
                </p>
                <motion.button
                  onClick={launchTravelAssistant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  Launch Travel Assistant
                </motion.button>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Certified & Licensed</h3>
                </div>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-amber-400">Direct Travel New Wave</span>
                </p>
                <p className="text-gray-300 mb-2">1075 Bay Street, Toronto, Ontario, M5S 2B1</p>
                <p className="text-sm text-gray-400">
                  TICO Registration: 50023509 - Your protection and peace of mind guaranteed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How far in advance should I start planning my luxury trip?",
                answer: "We recommend starting the planning process 3-6 months in advance for most luxury trips. This allows us to secure the best accommodations, exclusive experiences, and ensure every detail is perfectly coordinated. However, we can also accommodate last-minute requests when needed."
              },
              {
                question: "What makes SeetaLuxuryEscape different from other travel companies?",
                answer: "Our 'Seeta Signature Glow' approach combines AI-powered preference matching with human expertise to create truly personalized experiences. We handle every detail from start to finish, ensuring seamless logistics while focusing on creating unforgettable moments tailored to your unique travel style."
              },
              {
                question: "Do you handle both luxury travel and regular air bookings?",
                answer: "Yes! We offer two distinct services: our luxury travel curation for extraordinary experiences, and our Caribbean Air Travel service for reliable, affordable flights to connect families and friends across the region. Both services reflect our commitment to exceptional customer care."
              },
              {
                question: "What's included in your travel planning service?",
                answer: "Our comprehensive service includes destination research, accommodation selection, activity curation, transportation coordination, dining reservations, and 24/7 support during your trip. We handle all logistics so you can focus on creating memories."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;