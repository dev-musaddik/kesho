import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">KESHO</div>
            <div className="footer-tagline">Aesthetics · Elevate Your Beauty</div>
            <p className="footer-brand-text">
              Expert care, refined results, timeless confidence. Personalised aesthetic treatments in Finchley, North London — delivered by a team of registered medical and regulated practitioners.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Treatments</div>
            <ul className="footer-links">
              <li><Link to="/treatments/anti-wrinkle">Anti-Wrinkle</Link></li>
              <li><Link to="/treatments/lip-fillers">Lip Filler</Link></li>
              <li><Link to="/treatments/dermal-fillers">Dermal Filler</Link></li>
              <li><Link to="/treatments/skin-boosters">Skin Boosters</Link></li>
              <li><Link to="/treatments/microneedling">Microneedling</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Information</div>
            <ul className="footer-links">
              <li><Link to="/about">About Kesho</Link></li>
              <li><Link to="/pricing">Price Menu</Link></li>
              <li><Link to="/book">Book Consultation</Link></li>
              <li><Link to="/blog">The Journal</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Policies</div>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} Kesho Aesthetics. All rights reserved. All prices include a 2-week follow-up review.
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com/keshoaesthetics" target="_blank" rel="noopener noreferrer" className="social-link">ig</a>
            <a href="https://facebook.com/keshoaesthetics" target="_blank" rel="noopener noreferrer" className="social-link">fb</a>
            <a href="https://tiktok.com/@keshoaesthetics" target="_blank" rel="noopener noreferrer" className="social-link">tt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
