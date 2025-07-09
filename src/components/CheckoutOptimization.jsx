import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiCreditCard, FiLock, FiCheck, FiCalendar, FiUsers, FiMapPin, 
  FiPhone, FiMail, FiShield, FiDollarSign, FiInfo, FiGift 
} = FiIcons;

const CheckoutOptimization = ({ 
  service = "Luxury Family Travel", 
  destination = "Tuscany, Italy", 
  duration = "7 Days", 
  guests = "4 Adults, 2 Children",
  basePrice = 15000,
  isVisible = false,
  onClose = () => {}
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Travel Details
    travelDates: '',
    specialRequests: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    
    // Additional Services
    travelInsurance: false,
    airportTransfers: false,
    privateDining: false,
    spaServices: false
  });

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate pricing
  const additionalServices = [
    { key: 'travelInsurance', label: 'Travel Insurance', price: 300 },
    { key: 'airportTransfers', label: 'Private Airport Transfers', price: 500 },
    { key: 'privateDining', label: 'Private Chef Experience', price: 800 },
    { key: 'spaServices', label: 'In-Villa Spa Services', price: 600 }
  ];

  const selectedServices = additionalServices.filter(service => formData[service.key]);
  const servicesTotal = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const subtotal = basePrice + servicesTotal;
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0; // 10% discount
  const taxes = (subtotal - promoDiscount) * 0.13; // 13% tax
  const total = subtotal - promoDiscount + taxes;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SEETA10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      
      {/* Checkout Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-4 bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl z-50 overflow-hidden"
      >
        <div className="h-full flex">
          {/* Left Side - Form */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white font-serif">Complete Your Booking</h2>
                  <p className="text-gray-400">Secure your luxury travel experience</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= stepNumber 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {step > stepNumber ? (
                        <SafeIcon icon={FiCheck} className="w-5 h-5" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`w-20 h-1 mx-2 ${
                        step > stepNumber ? 'bg-amber-500' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Travel Dates
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiCalendar} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange('travelDates', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="e.g., June 15-22, 2024"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Enhance Your Experience</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {additionalServices.map((service) => (
                      <div key={service.key} className="bg-black/20 border border-gray-700 rounded-lg p-4">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData[service.key]}
                            onChange={(e) => handleInputChange(service.key, e.target.checked)}
                            className="mt-1 text-amber-500"
                          />
                          <div className="flex-1">
                            <span className="font-medium text-white">{service.label}</span>
                            <div className="text-amber-400 font-semibold">${service.price}</div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Special Requests or Dietary Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Let us know about any special requirements, celebrations, or preferences..."
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Payment Information</h3>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 text-green-400">
                      <SafeIcon icon={FiShield} className="w-5 h-5" />
                      <span className="font-medium">Secure Payment</span>
                    </div>
                    <p className="text-sm text-green-300 mt-1">
                      Your payment information is encrypted and secure
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiCreditCard} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        CVV *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="123"
                        />
                        <SafeIcon icon={FiLock} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Billing Address *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Street address, City, State/Province, Postal Code, Country"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <motion.button
                    onClick={() => setStep(step - 1)}
                    whileHover={{ scale: 1.05 }}
                    className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all"
                  >
                    Previous
                  </motion.button>
                )}
                
                {step < 3 ? (
                  <motion.button
                    onClick={() => setStep(step + 1)}
                    whileHover={{ scale: 1.05 }}
                    className="ml-auto bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all"
                  >
                    Continue
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="ml-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
                  >
                    Complete Booking
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-96 bg-black/40 border-l border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white mb-6 font-serif">Booking Summary</h3>
            
            {/* Trip Details */}
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-amber-400 mb-3">{service}</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-400" />
                  <span>{destination}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-400" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 text-gray-400" />
                  <span>{guests}</span>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Base Package</span>
                <span>${basePrice.toLocaleString()}</span>
              </div>
              
              {selectedServices.map((service) => (
                <div key={service.key} className="flex justify-between text-gray-300">
                  <span>{service.label}</span>
                  <span>${service.price}</span>
                </div>
              ))}
              
              <div className="border-t border-gray-700 pt-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code"
                    className="flex-1 px-3 py-2 bg-black/50 border border-gray-600 rounded text-white placeholder-gray-400 text-sm"
                  />
                  <motion.button
                    onClick={applyPromoCode}
                    whileHover={{ scale: 1.05 }}
                    className="bg-amber-500 text-black px-4 py-2 rounded text-sm font-semibold hover:bg-amber-600 transition-colors"
                  >
                    Apply
                  </motion.button>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-400 text-sm">
                    <span>Promo Discount (10%)</span>
                    <span>-${promoDiscount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Taxes & Fees</span>
                <span>${taxes.toLocaleString()}</span>
              </div>
              
              <div className="border-t border-gray-700 pt-2">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Security & Guarantees */}
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="w-4 h-4 text-green-400" />
                <span>Secure SSL encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-400" />
                <span>TICO registered & protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiGift} className="w-4 h-4 text-amber-400" />
                <span>24/7 concierge support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CheckoutOptimization;