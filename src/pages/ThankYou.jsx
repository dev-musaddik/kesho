import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  // Set Rank Math / SEO parameters: noindex, follow
  useDocumentMetadata('Thank You | KESHO Aesthetics', 'Thank you for your enquiry. We will get back to you shortly.');

  // Set robot tag dynamically (useful if server crawler reads dynamically, or just for standard React compliance)
  React.useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, follow';

    return () => {
      // Clean up robots tag when leaving the thank you page
      if (robots) {
        robots.content = 'index, follow';
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--kesho-cream)', minHeight: '75vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
        <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
          <CheckCircle2 size={64} strokeWidth={1} />
        </div>
        
        <h1 style={{ marginBottom: '16px', lineHeight: 1.15 }}>Thank you — we'll be in touch soon.</h1>
        
        <p style={{ fontSize: '16px', opacity: 0.85, fontWeight: 300, lineHeight: 1.7, marginBottom: '48px' }}>
          We've received your details and a member of the KESHO clinical team will reply within one working day. In the meantime, you might find these resources helpful:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '380px', margin: '0 auto' }}>
          <Link to="/treatments" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            Explore Treatments <ArrowRight size={14} />
          </Link>
          <Link to="/blog" className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            Read the Journal <ArrowRight size={14} />
          </Link>
          <Link to="/" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--kesho-sand)', fontWeight: 600, marginTop: '16px' }}>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
