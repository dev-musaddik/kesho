import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { blogPosts } from '../data/blogPosts';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogArchive() {
  useDocumentMetadata(
    'The KESHO Journal | Aesthetic Insights & Skincare Advice',
    'Read clinical insights, aftercare guides, and comparison studies written by our Finchley team of practitioners, doctors, and pharmacists.'
  );

  // Sort posts: newest first
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0', borderBottom: '1px solid var(--light-gray)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-tag">THE JOURNAL</span>
          <h1 style={{ marginBottom: '16px' }}>Insights for Your Best Self</h1>
          <p style={{ fontSize: '18px', opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}>
            Considered articles from our team on treatments, clinical evidence, aftercare, and the science of natural-looking results.
          </p>
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="blog-grid">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="blog-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px' }}>
                  <ImagePlaceholder 
                    type={post.category === 'Treatments' ? 'anti-wrinkle' : 'about'} 
                    height="100%" 
                  />
                </div>
                <div className="blog-card-content" style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="blog-card-meta">{post.category}</div>
                  
                  <h3 className="blog-card-title" style={{ fontSize: '22px', marginBottom: '12px', flexGrow: 0 }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="blog-card-excerpt" style={{ fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                    {post.meta_description.length > 150 
                      ? post.meta_description.substring(0, 150) + '...' 
                      : post.meta_description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '16px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--kesho-sand)', marginBottom: '20px', borderTop: '1px solid var(--light-gray)', paddingTop: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={12} /> By {post.author}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="blog-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 600 }}>
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Have a Specific Question?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 40px', fontWeight: 300 }}>
            Every treatment plan is bespoke. Book a complimentary, face-to-face consultation to discuss your skin with our clinical practitioners.
          </p>
          <Link to="/book" className="btn-white">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
