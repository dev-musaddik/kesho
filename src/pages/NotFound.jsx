import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function NotFound() {
  useDocumentMetadata('Page Not Found | KESHO Aesthetics', 'The page you are looking for does not exist.');

  return (
    <div style={{ backgroundColor: 'var(--kesho-cream)', minHeight: '75vh', display: 'flex', alignItems: 'center', padding: '80px 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <span className="section-tag" style={{ fontSize: '14px', letterSpacing: '0.2em' }}>ERROR 404</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '48px', margin: '16px 0' }}>Page Not Found</h1>
        <p style={{ margin: '24px 0 40px', fontWeight: 300, opacity: 0.8, lineHeight: 1.6 }}>
          We could not find the page you are looking for. It may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/" className="btn-primary">Return Home</Link>
          <Link to="/treatments" className="btn-secondary" style={{ alignSelf: 'center' }}>View Treatments</Link>
        </div>
      </div>
    </div>
  );
}
