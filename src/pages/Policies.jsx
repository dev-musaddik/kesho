import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function Policies() {
  const { pathname } = useLocation();

  // Set noindex, follow for legal pages
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'noindex, follow';
    return () => {
      if (robots) {
        robots.content = 'index, follow';
      }
    };
  }, []);

  let title = 'Legal Policies | KESHO';
  let content = null;

  if (pathname.includes('privacy-policy')) {
    title = 'Privacy Policy | KESHO Aesthetics';
    useDocumentMetadata(title, 'Privacy policy for Kesho Aesthetics.');
    content = (
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ opacity: 0.8, fontSize: '14.5px', marginBottom: '32px' }}>Last updated: June 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
          <p>
            At KESHO Aesthetics, we are committed to protecting and respecting your privacy. This policy explains how we collect, store, and process your personal and medical data in compliance with the UK General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>1. Information We Collect</h3>
          <p>
            We collect personal information that you provide when using our contact forms, booking consultations, or undergoing clinical treatments:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Contact details: Name, email address, phone number, and postal address.</li>
            <li>Medical information: Health history, prescription lists, allergy details, skin concerns, and consultation notes (crucial for statutory prescribing and clinical safety).</li>
            <li>Before and after photographs (for clinical records and treatment tracking; never shared publicly without explicit written consent).</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>2. How We Use Your Data</h3>
          <p>
            We process your information to fulfill our clinical duties, arrange appointments, and communicate about your treatments:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To perform complimentary consultations and clinical suitability assessments.</li>
            <li>To prescribe and dispense prescription-only medicines (e.g., botulinum toxin) via our GPhC prescribing pharmacist.</li>
            <li>To maintain accurate electronic medical records as required by clinical regulations and insurance policies.</li>
            <li>To send booking reminders and follow-up consultation scheduling emails.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>3. Data Storage & Security</h3>
          <p>
            All medical records, contact information, and treatment charts are stored securely using encrypted, password-protected electronic records systems. We do not sell or lease your personal information to third parties. Data is only shared with statutory healthcare regulators or insurers in the rare event of legal necessity.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>4. Your Rights</h3>
          <p>
            Under GDPR, you have the right to access the personal and medical records we hold, request corrections, or request data deletion (subject to statutory medical record-keeping retention laws which require us to keep medical records for a minimum duration).
          </p>
        </div>
      </div>
    );
  } else if (pathname.includes('terms')) {
    title = 'Terms & Conditions | KESHO Aesthetics';
    useDocumentMetadata(title, 'Terms and conditions for Kesho Aesthetics.');
    content = (
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '24px' }}>Terms & Conditions</h1>
        <p style={{ opacity: 0.8, fontSize: '14.5px', marginBottom: '32px' }}>Last updated: June 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
          <p>
            Welcome to KESHO Aesthetics. By booking a consultation or treatment with us, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>1. Consultations & Medical Suitability</h3>
          <p>
            All clients must undergo a complimentary face-to-face consultation prior to any injectable treatment. The final decision on treatment eligibility rests solely with KESHO's prescribing pharmacist, doctor, or regulated practitioner based on medical safety guidelines. We reserve the right to decline treatment if we determine it is not in your clinical interest.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>2. Deposits & Cancellations</h3>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>A booking deposit applies to treatments valued over £100. This deposit is non-refundable but is fully deducted from your final treatment balance.</li>
            <li>We request at least 48 hours notice for any appointment cancellations or rescheduling. Deposits may be forfeited for late cancellations or no-shows.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>3. Follow-Ups & Reviews</h3>
          <p>
            Certain treatments (such as anti-wrinkle injections) include a complimentary review 14 days post-treatment. This review must be booked within 21 days of the initial treatment. Top-ups requested after 21 days are considered new appointments and will be charged at standard rates.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>4. Age Restrictions</h3>
          <p>
            In strict compliance with UK law (Botulinum Toxin and Cosmetic Fillers (Children) Act 2021), we do not perform aesthetic treatments or consultations on anyone under the age of 18. Valid photo identification may be requested.
          </p>
        </div>
      </div>
    );
  } else {
    // Cookie Policy
    title = 'Cookie Policy | KESHO Aesthetics';
    useDocumentMetadata(title, 'Cookie policy for Kesho Aesthetics.');
    content = (
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, marginBottom: '24px' }}>Cookie Policy</h1>
        <p style={{ opacity: 0.8, fontSize: '14.5px', marginBottom: '32px' }}>Last updated: June 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '15px', lineHeight: 1.7, fontWeight: 300 }}>
          <p>
            Our website uses cookies to improve user experience, monitor site performance, and assist with navigation.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>1. What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your computer or mobile device by your browser. They are widely used to remember preferences, keep pages running smoothly, and provide anonymous statistics to site owners.
          </p>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>2. How We Use Cookies</h3>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Strictly Necessary Cookies:</strong> Essential for you to navigate our site, access pages, and submit forms.</li>
            <li><strong>Performance & Analytics Cookies:</strong> We use basic analytics to track page views and visitor sources. This data is fully aggregated and anonymised, containing no personal identification.</li>
            <li><strong>Functionality Cookies:</strong> Used to remember your booking preferences or scheduler details if you start a booking.</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '20px', fontWeight: 600, marginTop: '16px' }}>3. Managing Cookies</h3>
          <p>
            You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect the layout or usability of certain interactive features, such as our booking scheduler.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0 100px' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'var(--white)', padding: '56px', border: '1px solid rgba(138, 112, 96, 0.08)', boxShadow: 'var(--shadow-subtle)' }}>
        {content}
        <div style={{ borderTop: '1px solid var(--light-gray)', marginTop: '48px', paddingTop: '24px', textAlign: 'center' }}>
          <Link to="/" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--kesho-sand)', fontWeight: 600, textDecoration: 'none' }}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
