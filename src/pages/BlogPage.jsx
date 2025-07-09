import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiClock } = FiIcons;

const BlogPage = () => {
  const featuredPost = {
    slug: 'families-prioritize-work-over-quality-time',
    title: 'What Happens To Families Who Prioritize Work Over Quality Time',
    excerpt: 'The hidden cost of putting career before connection and how luxury travel can restore family bonds.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: '2024-01-15',
    author: 'Seeta Travel Team',
    readTime: '8 min read',
    category: 'Family Travel'
  };

  const blogPosts = [
    {
      slug: 'luxury-family-travel-multi-generational-planning',
      title: 'The Art of Multi-Generational Luxury Travel Planning',
      excerpt: 'How to create unforgettable experiences that satisfy grandparents, parents, and children alike.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '2024-01-10',
      author: 'Seeta Travel Team',
      readTime: '6 min read',
      category: 'Family Travel'
    },
    {
      slug: 'romantic-getaway-surprise-planning',
      title: 'Creating Magical Surprise Moments During Romantic Getaways',
      excerpt: 'Expert tips for planning thoughtful surprises that strengthen couples\' connections.',
      image: 'https://images.unsplash.com/photo-1518621012420-8ab10887b471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
      date: '2024-01-05',
      author: 'Seeta Travel Team',
      readTime: '5 min read',
      category: 'Romance'
    },
    {
      slug: 'luxury-adventure-safety-comfort-balance',
      title: 'Balancing Adventure and Luxury: The Art of Safe Exploration',
      excerpt: 'How to experience thrilling adventures without compromising on safety or comfort.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '2023-12-28',
      author: 'Seeta Travel Team',
      readTime: '7 min read',
      category: 'Adventure'
    },
    {
      slug: 'caribbean-air-travel-family-connections',
      title: 'Staying Connected: The Emotional Journey of Caribbean Air Travel',
      excerpt: 'Understanding the deep emotional significance of visiting family in the Caribbean.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      date: '2023-12-20',
      author: 'Seeta Travel Team',
      readTime: '4 min read',
      category: 'Air Travel'
    },
    {
      slug: 'luxury-travel-stress-free-planning',
      title: 'From Overwhelm to Extraordinary: Stress-Free Travel Planning',
      excerpt: 'How expert curation transforms travel planning from stressful to seamless.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '2023-12-15',
      author: 'Seeta Travel Team',
      readTime: '6 min read',
      category: 'Travel Planning'
    },
    {
      slug: 'seeta-signature-glow-experience',
      title: 'What Makes the Seeta Signature Glow Experience Unique',
      excerpt: 'Discover the philosophy and approach behind our personalized luxury travel service.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: '2023-12-10',
      author: 'Seeta Travel Team',
      readTime: '5 min read',
      category: 'About Us'
    }
  ];

  const categories = [
    'All Posts',
    'Family Travel',
    'Romance',
    'Adventure',
    'Air Travel',
    'Travel Planning',
    'About Us'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          >
            Travel Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Expert guidance, insider tips, and inspiration for your luxury travel journey. 
            Discover how to transform travel dreams into extraordinary experiences.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif"
            >
              Featured Article
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 font-serif leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <Link to={`/blog/${featuredPost.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg flex items-center space-x-2"
                >
                  <span>Read Full Article</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif"
            >
              Latest Articles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Discover insights, tips, and inspiration for your next luxury travel experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center space-x-2"
                    >
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif"
          >
            Stay Inspired
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Subscribe to our newsletter for exclusive travel insights, destination guides, 
            and luxury travel tips delivered to your inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;