import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Apply SEO Title & Description dynamically
  useDocumentMetadata(
    post ? post.meta_title : 'Article Not Found | KESHO',
    post ? post.meta_description : ''
  );

  if (!post) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>Article Not Found</h1>
        <p style={{ margin: '24px 0', fontWeight: 300 }}>The journal article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn-primary">Back to KESHO Journal</Link>
      </div>
    );
  }

  // Simple parser to convert basic markdown into React elements
  const renderMarkdownContent = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    let insideList = false;
    const htmlElements = [];

    // Helper for basic inline formatting (bold **)
    const parseInlineStyles = (txt) => {
      if (!txt) return '';
      const parts = txt.split(/\*\*([^*]+)\*\*/g);
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return <strong key={index} style={{ fontWeight: 600 }}>{part}</strong>;
        }
        return part;
      });
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) {
        if (insideList) {
          insideList = false;
        }
        continue;
      }

      // Headings
      if (line.startsWith('### ')) {
        insideList = false;
        htmlElements.push(
          <h4 key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 600, marginTop: '28px', marginBottom: '12px', color: 'var(--kesho-brown)' }}>
            {parseInlineStyles(line.slice(4))}
          </h4>
        );
      } else if (line.startsWith('## ')) {
        insideList = false;
        htmlElements.push(
          <h3 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 300, marginTop: '36px', marginBottom: '16px', color: 'var(--kesho-brown)' }}>
            {parseInlineStyles(line.slice(3))}
          </h3>
        );
      } else if (line.startsWith('# ')) {
        insideList = false;
        htmlElements.push(
          <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 300, marginTop: '40px', marginBottom: '20px', color: 'var(--kesho-brown)' }}>
            {parseInlineStyles(line.slice(2))}
          </h2>
        );
      } 
      // Bullet list items
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        insideList = true;
        htmlElements.push(
          <li key={i} style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '8px', marginLeft: '24px', listStyleType: 'disc', color: 'rgba(46, 36, 28, 0.85)', fontWeight: 300 }}>
            {parseInlineStyles(line.slice(2))}
          </li>
        );
      } 
      // Standard paragraphs
      else {
        insideList = false;
        htmlElements.push(
          <p key={i} style={{ fontSize: '15.5px', lineHeight: 1.85, fontWeight: 300, marginBottom: '20px', color: 'rgba(46, 36, 28, 0.85)' }}>
            {parseInlineStyles(line)}
          </p>
        );
      }
    }

    return htmlElements;
  };

  // Get other recommended articles
  const recommendations = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div>
      {/* Back to Blog header */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '40px 0 20px', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--kesho-sand)', fontWeight: 600 }}>
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </div>
      </section>

      {/* Main Article Container */}
      <article style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Post Category & Title */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ marginBottom: '16px', display: 'inline-block' }}>{post.category}</span>
            <h1 style={{ marginBottom: '24px', lineHeight: 1.15 }}>{post.title}</h1>
            
            {/* Meta bar */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '12px', color: 'var(--kesho-sand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} /> Written by {post.author}
              </span>
            </div>
          </div>

          {/* Large cover image placeholder */}
          <div style={{ height: '400px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)', marginBottom: '48px' }}>
            <ImagePlaceholder type={post.category === 'Treatments' ? 'anti-wrinkle' : 'about'} height="100%" />
          </div>

          {/* Parsed Body Content */}
          <div style={{ margin: '0 auto', maxWidth: '720px' }}>
            {renderMarkdownContent(post.body)}
          </div>
        </div>
      </article>

      {/* Recommended Articles Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '80px 0', borderTop: '1px solid var(--light-gray)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, textAlign: 'center', marginBottom: '40px' }}>
            Continue Reading
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {recommendations.map((rec) => (
              <div key={rec.slug} style={{ background: 'var(--white)', border: '1px solid rgba(138, 112, 96, 0.08)', padding: '32px' }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--kesho-sand)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  {rec.category}
                </span>
                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>
                  <Link to={`/blog/${rec.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {rec.title}
                  </Link>
                </h4>
                <p style={{ fontSize: '13px', opacity: 0.8, lineHeight: 1.5, marginBottom: '20px' }}>
                  {rec.meta_description.length > 110 ? rec.meta_description.substring(0, 110) + '...' : rec.meta_description}
                </p>
                <Link to={`/blog/${rec.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 600, color: 'var(--kesho-sand)' }}>
                  Read article <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to Elevate Your Skin Health?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 40px', fontWeight: 300 }}>
            Every KESHO journey starts with an unhurried, complimentary consultation. Let's design a plan aligned with your features.
          </p>
          <Link to="/book" className="btn-white">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
