import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiHeart } = FiIcons;

const BlogPostPage = () => {
  const { slug } = useParams();

  // This would typically come from a CMS or API
  const blogPost = {
    title: 'What Happens To Families Who Prioritize Work Over Quality Time',
    content: `
      <p>In today's fast-paced world, many successful families find themselves caught in a paradox: the very success that should enable quality time together often becomes the barrier preventing it. This phenomenon is more common than you might think, and its effects ripple through family relationships in ways that can last for generations.</p>

      <h2>The Hidden Cost of Success</h2>
      <p>When career achievements and financial success become the primary focus, families often experience what psychologists call "success syndrome" – a state where external accomplishments mask internal relationship deficits. Children of highly successful parents frequently report feeling disconnected from their parents despite living in comfortable circumstances.</p>

      <p>The statistics are telling: families in the top income brackets report spending 40% less quality time together compared to middle-income families. This isn't just about being physically present – it's about meaningful, uninterrupted connection.</p>

      <h2>What Quality Time Really Means</h2>
      <p>Quality time isn't just about being in the same room. It's about:</p>
      <ul>
        <li>Shared experiences that create lasting memories</li>
        <li>Uninterrupted conversations without digital distractions</li>
        <li>Activities that allow family members to see each other in new contexts</li>
        <li>Moments of vulnerability and authentic connection</li>
      </ul>

      <h2>The Luxury Travel Solution</h2>
      <p>This is where thoughtfully planned luxury travel becomes more than just a vacation – it becomes a relationship investment. When families step away from their familiar environment and daily routines, something magical happens:</p>

      <blockquote>
        <p>"Travel doesn't just change your location; it changes your perspective on what matters most."</p>
      </blockquote>

      <h3>Creating Forced Togetherness (In the Best Way)</h3>
      <p>Luxury travel creates what we call "productive proximity" – situations where family members are naturally together without the usual escape routes of work emails, social media, or separate activities. Whether it's a multi-generational safari in Africa or a private villa in Tuscany, these experiences create space for authentic connection.</p>

      <h3>Shared Adventure Builds Bonds</h3>
      <p>When families experience new cultures, overcome challenges together, or simply marvel at natural wonders, they create shared reference points that strengthen their connection long after the trip ends. These become the stories they tell at family gatherings for years to come.</p>

      <h2>The Multi-Generational Opportunity</h2>
      <p>One of the most powerful aspects of luxury family travel is its ability to bridge generational gaps. Grandparents who might struggle to connect with technology-focused grandchildren find common ground in shared adventures. Parents who feel caught between caring for aging parents and raising children discover that travel creates natural opportunities for multi-generational bonding.</p>

      <h2>Making It Happen: Overcoming the Obstacles</h2>
      <p>The biggest barrier to family travel isn't usually financial – it's logistical and psychological. Successful families often feel they can't afford to take time away from work, or they're overwhelmed by the complexity of planning meaningful experiences for multiple generations with different interests and physical capabilities.</p>

      <p>This is where expert curation becomes invaluable. When every detail is thoughtfully planned – from accommodations that work for all ages to activities that engage different interests – the family can focus on what matters most: each other.</p>

      <h2>The Ripple Effect</h2>
      <p>Families who prioritize shared travel experiences report lasting benefits:</p>
      <ul>
        <li>Stronger communication patterns that continue at home</li>
        <li>Increased empathy and understanding between family members</li>
        <li>Shared values around experiences over material possessions</li>
        <li>A family culture that values presence over productivity</li>
      </ul>

      <h2>Your Family's Story</h2>
      <p>Every family has a unique story, and luxury travel can be the chapter that changes everything. Whether it's healing strained relationships, creating new traditions, or simply giving busy family members permission to slow down and connect, the investment in shared experiences pays dividends that compound over time.</p>

      <p>The question isn't whether your family deserves this investment – it's whether you can afford not to make it. In a world that constantly pulls families apart, luxury travel becomes a powerful force that brings them back together.</p>

      <p>Ready to write your family's next chapter? The journey begins with a single conversation about what matters most.</p>
    `,
    excerpt: 'The hidden cost of putting career before connection and how luxury travel can restore family bonds.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: '2024-01-15',
    author: 'Seeta Travel Team',
    readTime: '8 min read',
    category: 'Family Travel'
  };

  const relatedPosts = [
    {
      slug: 'luxury-family-travel-multi-generational-planning',
      title: 'The Art of Multi-Generational Luxury Travel Planning',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Family Travel'
    },
    {
      slug: 'seeta-signature-glow-experience',
      title: 'What Makes the Seeta Signature Glow Experience Unique',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'About Us'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors">
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">{blogPost.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUser} className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Social Sharing Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Share Article</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <SafeIcon icon={FiShare2} className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    <span>Save</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif"
            >
              Related Articles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Continue exploring our travel insights and expert guidance
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                    {post.title}
                  </h3>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center space-x-2"
                    >
                      <span>Read Article</span>
                      <SafeIcon icon={FiArrowLeft} className="w-4 h-4 rotate-180" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif"
          >
            Ready to Create Your Family's Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Let us help you plan the luxury family experience that will strengthen your bonds 
            and create memories that last a lifetime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Start Planning Your Family Adventure
            </motion.button>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all"
              >
                Speak with an Expert
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;