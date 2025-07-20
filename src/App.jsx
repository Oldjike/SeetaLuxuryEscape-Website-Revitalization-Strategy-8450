import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HelpHub from './components/HelpHub';
import WishlistManager from './components/WishlistManager';
import HomePage from './pages/HomePage';
import LuxuryFamilyPage from './pages/LuxuryFamilyPage';
import RomanticGetawaysPage from './pages/RomanticGetawaysPage';
import AdventurePage from './pages/AdventurePage';
import AirOnlyPage from './pages/AirOnlyPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import ReferralPage from './pages/ReferralPage';
import OGLESQFlightPage from './pages/OGLESQFlightPage';

import questConfig from './config/questConfig';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/luxury-family-travel" element={<LuxuryFamilyPage />} />
            <Route path="/romantic-getaways" element={<RomanticGetawaysPage />} />
            <Route path="/luxury-adventure" element={<AdventurePage />} />
            <Route path="/air-only" element={<AirOnlyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/referral" element={<ReferralPage />} />
            <Route path="/ogl-esq-flight" element={<OGLESQFlightPage />} />
          </Routes>
        </motion.main>
        <Footer />
        <WishlistManager />
      </div>
    </Router>
  );
}

export default App;