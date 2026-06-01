import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PractitionerDetail from './pages/PractitionerDetail';
import TreatmentsHub from './pages/TreatmentsHub';
import TreatmentDetail from './pages/TreatmentDetail';
import Pricing from './pages/Pricing';
import Book from './pages/Book';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import BlogArchive from './pages/BlogArchive';
import BlogPostDetail from './pages/BlogPostDetail';
import Policies from './pages/Policies';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:name" element={<PractitionerDetail />} />
          <Route path="/treatments" element={<TreatmentsHub />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/blog" element={<BlogArchive />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/privacy-policy" element={<Policies />} />
          <Route path="/terms" element={<Policies />} />
          <Route path="/cookie-policy" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
