import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser, FiCalendar, FiThumbsUp, FiMessageCircle, FiFilter, FiChevronDown } = FiIcons;

const UserReviews = ({ serviceType = "all" }) => {
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "Toronto, ON",
      rating: 5,
      date: "2024-01-10",
      service: "Luxury Family Travel",
      title: "Absolutely Perfect Family Vacation",
      text: "SeetaLuxuryEscape exceeded every expectation! The villa in Tuscany was stunning, and every activity was perfectly planned for our family of four generations. My 6-year-old daughter and 78-year-old grandmother both had the time of their lives. The attention to detail was incredible.",
      verified: true,
      helpful: 24,
      images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
    },
    {
      id: 2,
      name: "David & Emma Rodriguez",
      location: "Vancouver, BC",
      rating: 5,
      date: "2024-01-05",
      service: "Romantic Getaways",
      title: "Most Romantic Trip Ever",
      text: "Our honeymoon in Santorini was magical beyond words. The private sunset dinner, couples spa treatments, and the surprise champagne setup on our terrace made it unforgettable. Every detail showed how much they care about creating perfect moments.",
      verified: true,
      helpful: 18,
      images: []
    },
    {
      id: 3,
      name: "Marcus Richards",
      location: "Brampton, ON",
      rating: 5,
      date: "2023-12-28",
      service: "Caribbean Air Travel",
      title: "Reliable and Affordable",
      text: "Flying home to Jamaica for Christmas was stress-free thanks to SeetaLuxuryEscape. Great prices, excellent customer service, and they understand the importance of family connections. Will definitely use them again.",
      verified: true,
      helpful: 15,
      images: []
    },
    {
      id: 4,
      name: "Jennifer & Paul Chen",
      location: "Calgary, AB",
      rating: 5,
      date: "2023-12-20",
      service: "Luxury Adventure",
      title: "Perfect Adventure-Luxury Balance",
      text: "The African safari exceeded our wildest dreams. Luxury tented camps, expert guides, and wildlife encounters that left us speechless. The logistics were flawless, allowing us to focus on the incredible experiences.",
      verified: true,
      helpful: 22,
      images: ["https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
    },
    {
      id: 5,
      name: "Lisa & Robert Johnson",
      location: "Montreal, QC",
      rating: 4,
      date: "2023-12-15",
      service: "Luxury Family Travel",
      title: "Great Experience with Minor Issues",
      text: "Overall fantastic trip to Costa Rica. The eco-lodges were beautiful and the kids loved the wildlife tours. Only minor issue was a delayed transfer, but the team handled it professionally and compensated us well.",
      verified: true,
      helpful: 9,
      images: []
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = selectedRating === "all" || review.rating.toString() === selectedRating;
    const serviceMatch = serviceType === "all" || review.service === serviceType;
    return ratingMatch && serviceMatch;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
    if (sortBy === "helpful") return b.helpful - a.helpful;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
      {/* Reviews Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-white font-serif">Client Reviews</h3>
          <motion.button
            onClick={() => setShowReviewForm(!showReviewForm)}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all"
          >
            Write Review
          </motion.button>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <SafeIcon
                  key={i}
                  icon={FiStar}
                  className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
                />
              ))}
            </div>
            <p className="text-gray-300">Based on {reviews.length} reviews</p>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="text-sm text-gray-300 w-8">{rating}</span>
                <SafeIcon icon={FiStar} className="w-4 h-4 text-amber-400" />
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-amber-400 h-2 rounded-full"
                    style={{ width: `${(ratingCounts[index] / reviews.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-gray-300 w-8">{ratingCounts[index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-black/30 border border-gray-600 rounded-lg p-6 mb-8"
        >
          <h4 className="text-xl font-bold text-white mb-4">Write a Review</h4>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400"
              />
              <select className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white">
                <option>Select Service Used</option>
                <option>Luxury Family Travel</option>
                <option>Romantic Getaways</option>
                <option>Luxury Adventure</option>
                <option>Caribbean Air Travel</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <SafeIcon
                  key={star}
                  icon={FiStar}
                  className="w-6 h-6 text-gray-600 hover:text-amber-400 cursor-pointer"
                />
              ))}
            </div>
            <input
              type="text"
              placeholder="Review Title"
              className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Share your experience..."
              className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400"
            />
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
              >
                Submit Review
              </motion.button>
              <motion.button
                onClick={() => setShowReviewForm(false)}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/20 border border-gray-700/50 rounded-lg p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">{review.name}</h5>
                  <p className="text-sm text-gray-400">{review.location}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                    {review.verified && (
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-1 rounded-full">
                {review.service}
              </span>
            </div>

            <h6 className="font-semibold text-white mb-2">{review.title}</h6>
            <p className="text-gray-300 mb-4">{review.text}</p>

            {review.images.length > 0 && (
              <div className="flex space-x-2 mb-4">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Review"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                <SafeIcon icon={FiThumbsUp} className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                <span>Reply</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;