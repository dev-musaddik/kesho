import React from 'react';
import { useParams, Link } from 'react-router-dom';
import practitionerData from '../data/practitionerData';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Award, Shield, FileText, CheckCircle } from 'lucide-react';

export default function PractitionerDetail() {
  const { name } = useParams();
  const practitioner = practitionerData[name];

  // Apply SEO Title & Description dynamically
  useDocumentMetadata(
    practitioner ? practitioner.seoTitle : 'Practitioner Profile | KESHO',
    practitioner ? practitioner.seoDescription : ''
  );

  if (!practitioner) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>Practitioner Profile Not Found</h1>
        <p style={{ margin: '24px 0', fontWeight: 300 }}>The practitioner profile you are looking for does not exist or has been moved.</p>
        <Link to="/about" className="btn-primary">Back to About Team</Link>
      </div>
    );
  }

  return (
    <div>
      {/* 1. Hero Section (2-columns) */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0 60px', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-tag">{practitioner.role}</span>
              <h1 style={{ marginBottom: '16px', lineHeight: 1.1 }}>{practitioner.fullName}</h1>
              <h3 style={{ fontSize: '18px', color: 'var(--kesho-sand)', fontWeight: 500, marginBottom: '24px' }}>
                {practitioner.credentials}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, opacity: 0.8, marginBottom: '32px' }}>
                {practitioner.positioning}
              </p>
              <Link to="/book" className="btn-primary">
                Book consultation with {practitioner.name}
              </Link>
            </div>
            <div style={{ height: '420px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type={practitioner.imageType} height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Biography Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-tag" style={{ display: 'block', textAlign: 'center', marginBottom: '16px' }}>BACKGROUND</span>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>About {practitioner.name}</h2>
            
            <div style={{ fontSize: '16px', lineHeight: 1.85, fontWeight: 300, color: 'rgba(46, 36, 28, 0.85)' }}>
              {practitioner.bio.map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: '24px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credentials & Qualifications Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'flex-start' }}>
            {/* Left: Qualifications */}
            <div style={{ background: 'var(--white)', padding: '48px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--light-gray)', paddingBottom: '16px', marginBottom: '24px' }}>
                <Award size={24} style={{ color: 'var(--kesho-sand)' }} /> Qualifications & Training
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {practitioner.qualifications.map((qual, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '14.5px', opacity: 0.85, lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--kesho-sand)', fontWeight: 'bold' }}>✓</span>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Registrations & Memberships */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Registration body number */}
              <div style={{ background: 'var(--white)', padding: '36px', borderLeft: '4px solid var(--kesho-sand)', borderRadius: '2px', boxShadow: 'var(--shadow-subtle)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--kesho-brown)', marginBottom: '12px' }}>
                  <Shield size={20} style={{ color: 'var(--kesho-sand)' }} /> Statutory Registration
                </h4>
                <p style={{ fontSize: '14px', fontWeight: 500, margin: 0 }}>
                  {practitioner.registrationBody}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--kesho-sand)', fontWeight: 600, marginTop: '8px', margin: 0 }}>
                  {practitioner.registrationNumber}
                </p>
              </div>

              {/* Memberships */}
              <div style={{ background: 'var(--white)', padding: '36px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', boxShadow: 'var(--shadow-subtle)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--kesho-brown)', marginBottom: '16px' }}>
                  <FileText size={20} style={{ color: 'var(--kesho-sand)' }} /> Professional Bodies
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {practitioner.memberships.map((member, idx) => (
                    <li key={idx} style={{ fontSize: '13.5px', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--kesho-sand)' }}></span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatments I Perform Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">CLINICAL PRACTICE</span>
          <h2 style={{ marginBottom: '40px' }}>Treatments I Perform</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
            {practitioner.treatments.map((t, idx) => (
              <Link 
                key={idx} 
                to={t.path} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--white)',
                  border: '1px solid var(--kesho-sand)',
                  color: 'var(--kesho-brown)',
                  padding: '12px 28px',
                  fontSize: '13px',
                  fontWeight: 500,
                  transition: 'var(--transition)'
                }}
                className="practitioner-treatment-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--kesho-sand)';
                  e.currentTarget.style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--white)';
                  e.currentTarget.style.color = 'var(--kesho-brown)';
                }}
              >
                <CheckCircle size={16} />
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to Schedule Your Appointment?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 40px', fontWeight: 300 }}>
            Book a complimentary, unhurried consultation with {practitioner.name} to discuss your individual skin goals.
          </p>
          <Link to="/book" className="btn-white">Book Consultation Now</Link>
        </div>
      </section>
    </div>
  );
}
