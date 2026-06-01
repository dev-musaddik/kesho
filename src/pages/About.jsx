import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Sparkles, Activity, UserCheck, ShieldAlert } from 'lucide-react';

export default function About() {
  useDocumentMetadata(
    'About KESHO Aesthetics | Our Team & Ethos | Finchley',
    'Meet the KESHO team — pharmacist Kyle (GPhC), Dr Ryan Marni (GMC), and Claire (OfQual). Premium aesthetic care in Finchley, North London.'
  );

  const ethosItems = [
    {
      icon: <Sparkles size={24} />,
      title: 'Natural Results',
      desc: 'We treat to enhance — never to alter. Results should look like the best version of you.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Evidence-Based',
      desc: 'Every treatment we offer is grounded in clinical evidence and delivered by qualified professionals.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Personalised',
      desc: 'No two faces are the same. No two treatment plans should be either.'
    }
  ];

  const team = [
    {
      slug: 'claire',
      name: 'Claire',
      role: 'Lead Aesthetic Practitioner',
      credentials: 'OfQual-regulated',
      imageType: 'claire'
    },
    {
      slug: 'kyle',
      name: 'Kyle',
      role: 'Independent Prescribing Pharmacist',
      credentials: 'GPhC-registered',
      imageType: 'kyle'
    },
    {
      slug: 'dr-ryan-marni',
      name: 'Dr Ryan Marni',
      role: 'Doctor',
      credentials: 'GMC-registered',
      imageType: 'dr-ryan-marni'
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0', borderBottom: '1px solid var(--light-gray)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">ABOUT KESHO</span>
          <h1 style={{ marginBottom: '16px', lineHeight: 1.15 }}>Elevated Care. Exceptional Experience.</h1>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">Our Vision</span>
              <h2 style={{ marginBottom: '24px' }}>Why we built KESHO.</h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '16px', lineHeight: 1.8 }}>
                The UK aesthetics industry has grown rapidly — but regulation hasn't kept pace. Too many people walk into appointments unsure whether the person treating them is qualified, whether the products are genuine, or whether there's a plan if something goes wrong.
              </p>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '16px', lineHeight: 1.8 }}>
                We built KESHO around a simple idea: aesthetic care should hold itself to the same standards as the rest of healthcare. A consultation before every treatment. A prescriber on-site for every injectable. Premium products, transparent pricing, honest advice — including when the answer is "not yet" or "not at all."
              </p>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '0', lineHeight: 1.8, fontWeight: 400 }}>
                We're proud of who we are: a GMC-registered doctor, a GPhC-registered prescribing pharmacist, and an OfQual-regulated lead practitioner — working together, in one place, for you.
              </p>
            </div>
            <div style={{ height: '400px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type="why" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Ethos Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag">Core Principles</span>
            <h2>Our Ethos</h2>
          </div>
          <div className="grid-3col">
            {ethosItems.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--white)', padding: '40px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', textAlign: 'center' }}>
                <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(46, 36, 28, 0.75)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet The Team Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Clinicians & Practitioners</span>
            <h2>Meet the team.</h2>
            <p style={{ opacity: 0.8 }}>Our team consists of regulated, registered professionals committed to safe, clinical aesthetic care.</p>
          </div>
          
          <div className="practitioner-grid">
            {team.map((member) => (
              <div key={member.slug} className="practitioner-card">
                <div style={{ height: '360px' }}>
                  <ImagePlaceholder type={member.imageType} height="100%" />
                </div>
                <div className="practitioner-info">
                  <h3 className="practitioner-name">{member.name}</h3>
                  <div className="practitioner-role">{member.role} · {member.credentials}</div>
                  <Link to={`/about/${member.slug}`} className="btn-primary" style={{ fontSize: '10px', padding: '12px 24px' }}>
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Premises Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-tag">THE CLINIC</span>
              <h2>Our Finchley clinic.</h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '24px', lineHeight: 1.8 }}>
                A calm, considered space at 375 Regents Park Road, Finchley. Designed for comfort, privacy, and the kind of unhurried consultation good aesthetic care requires.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--kesho-sand)', fontWeight: 500 }}>
                Located a short 8-minute walk from Finchley Central station, with easy transport links and street parking available.
              </p>
            </div>
            <div className="grid-2col" style={{ gap: '16px' }}>
              <div style={{ height: '160px', overflow: 'hidden', borderRadius: '2px' }}>
                <ImagePlaceholder type="clinic" height="100%" />
              </div>
              <div style={{ height: '160px', overflow: 'hidden', borderRadius: '2px' }}>
                <ImagePlaceholder type="clinic" height="100%" />
              </div>
              <div style={{ height: '160px', overflow: 'hidden', borderRadius: '2px' }}>
                <ImagePlaceholder type="clinic" height="100%" />
              </div>
              <div style={{ height: '160px', overflow: 'hidden', borderRadius: '2px' }}>
                <ImagePlaceholder type="clinic" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Credentials Block */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontSize: '24px', marginBottom: '40px' }}>Registered. Regulated. Insured.</h3>
          
          <div className="trust-badges" style={{ border: 'none', padding: 0, margin: 0 }}>
            <div className="trust-badge-item">
              GPhC Registered
              <span className="trust-badge-circle"></span>
            </div>
            <div className="trust-badge-item">
              GMC Registered
              <span className="trust-badge-circle"></span>
            </div>
            <div className="trust-badge-item">
              OfQual Regulated
              <span className="trust-badge-circle"></span>
            </div>
            <div className="trust-badge-item">
              Fully Insured
            </div>
          </div>
          
          <p style={{ fontSize: '13px', color: 'var(--kesho-sand)', marginTop: '40px', opacity: 0.8 }}>
            All practitioners hold active professional indemnity insurance and are registered with their respective UK statutory healthcare regulators.
          </p>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to Begin?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 40px', fontWeight: 300 }}>
            Book your complimentary consultation. We will listen, examine, and guide your aesthetic choices with complete honesty.
          </p>
          <Link to="/book" className="btn-white">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
