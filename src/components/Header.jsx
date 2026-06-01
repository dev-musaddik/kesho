import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const MonogramLogo = ({ size = 40, color = 'var(--kesho-sand)' }) => (
  <svg viewBox="0 0 100 100" style={{ width: size, height: size, flexShrink: 0 }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1.5" />
    <path d="M38 28 V72 M38 50 H44 L60 28 M44 50 L60 72" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M62 28 C 76 34, 76 66, 62 72" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <span style={{ display: 'block', fontSize: '24px', letterSpacing: '0.12em', color: 'var(--kesho-brown)', fontFamily: 'var(--font-display)' }}>KESHO</span>
        <span style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', color: 'var(--kesho-sand)', fontWeight: 400, marginTop: '2px' }}>AESTHETICS</span>
      </Link>

      <div className={`nav-links-wrap ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/treatments" className={({ isActive }) => isActive ? 'active' : ''}>
              Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
              Journal
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Link to="/book" className="nav-cta-btn" style={{ padding: '12px 24px', fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', background: 'var(--kesho-sand)', borderColor: 'var(--kesho-sand)', color: '#white' }}>
          Book Consultation
        </Link>
        
        <Link to="/about" className="hide-mobile" style={{ display: 'flex', alignItems: 'center' }}>
          <MonogramLogo size={38} />
        </Link>

        <div 
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
