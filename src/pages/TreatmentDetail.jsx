import React from 'react';
import { useParams, Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { Check, Clock, ShieldAlert, Sparkles, Activity, ArrowRight } from 'lucide-react';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = treatmentsData[slug];

  // Apply SEO Title & Description dynamically
  useDocumentMetadata(
    treatment ? treatment.seoTitle : 'Treatment Not Found | KESHO',
    treatment ? treatment.seoDescription : ''
  );

  if (!treatment) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>Treatment Not Found</h1>
        <p style={{ margin: '24px 0', fontWeight: 300 }}>The treatment page you are looking for does not exist or has been moved.</p>
        <Link to="/treatments" className="btn-primary">View Treatments Menu</Link>
      </div>
    );
  }

  // Get quick facts based on treatment slug
  const getQuickFacts = (treatmentSlug) => {
    switch (treatmentSlug) {
      case 'anti-wrinkle':
        return { time: '15-20 minutes', downtime: 'Minimal', results: '3-5 days', duration: '3-6 months' };
      case 'lip-fillers':
        return { time: '30-40 minutes', downtime: '24-72 hours', results: 'Immediate', duration: '6-12 months' };
      case 'dermal-fillers':
        return { time: '30-45 minutes', downtime: '24-72 hours', results: 'Immediate', duration: '12-18 months' };
      case 'skin-boosters':
        return { time: '15-20 minutes', downtime: '12-24 hours', results: '2-4 weeks', duration: '4-9 months' };
      case 'microneedling':
        return { time: '45-60 minutes', downtime: '24-48 hours', results: '4-6 weeks', duration: '3-6 months' };
      default:
        return { time: '20 minutes', downtime: 'Minimal', results: '3-5 days', duration: '3-6 months' };
    }
  };

  const facts = getQuickFacts(slug);

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '100px 0 80px', borderBottom: '1px solid rgba(138, 112, 96, 0.08)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--kesho-sand)', marginBottom: '32px' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>·</span>
            <Link to="/treatments" style={{ color: 'inherit', textDecoration: 'none' }}>Treatments</Link>
            <span style={{ margin: '0 8px' }}>·</span>
            <span style={{ color: 'var(--kesho-brown)' }}>{treatment.title.replace(' Treatment', '')}</span>
          </div>

          <div className="grid-asymmetric" style={{ alignItems: 'center', gap: '64px' }}>
            <div style={{ textAlign: 'left' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 300, color: 'var(--kesho-brown)', lineHeight: 1.15, marginBottom: '20px' }}>
                {treatment.title.replace(' Treatment', '')}
              </h1>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--kesho-brown)', opacity: 0.8, marginBottom: '24px', fontStyle: 'italic', fontWeight: 300 }}>
                {treatment.subtext.split('.')[0]}.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--kesho-body)', lineHeight: 1.7, marginBottom: '40px', fontWeight: 300 }}>
                {treatment.whatItIs.substring(0, 180)}...
              </p>
              
              <Link to="/book" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', borderColor: 'var(--kesho-sand)', color: 'var(--kesho-brown)', textTransform: 'uppercase', background: 'transparent' }}>
                Book Your Consultation
              </Link>
            </div>
            
            <div style={{ borderRadius: '2px', overflow: 'hidden', height: '460px', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type={treatment.imageType} height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detail Columns section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ gap: '64px' }}>
            {/* Left Column: About & What to Expect */}
            <div>
              <div style={{ marginBottom: '64px' }}>
                <span className="section-tag" style={{ display: 'block', marginBottom: '16px' }}>About the treatment</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--kesho-brown)', marginBottom: '20px' }}>
                  About the Treatment
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--kesho-body)', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                  {treatment.whatItIs}
                </p>
              </div>

              <div>
                <span className="section-tag" style={{ display: 'block', marginBottom: '16px' }}>What to expect</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--kesho-brown)', marginBottom: '32px' }}>
                  What to Expect
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {treatment.timeline.slice(0, 3).map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '24px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--kesho-sand)', fontWeight: 300, lineHeight: 1 }}>
                        {idx + 1}
                      </span>
                      <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--kesho-brown)', textTransform: 'uppercase', marginBottom: '8px' }}>
                          {step.step.replace(/^\d+\.\s*/, '')}
                        </h4>
                        <p style={{ fontSize: '13.5px', color: 'rgba(61, 46, 34, 0.75)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Benefits & Quick Facts */}
            <div>
              <div style={{ marginBottom: '56px' }}>
                <span className="section-tag" style={{ display: 'block', marginBottom: '16px' }}>Benefits</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--kesho-brown)', marginBottom: '24px' }}>
                  Benefits
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
                  {treatment.whoItIsFor.map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <Check size={16} style={{ color: 'var(--kesho-sand)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '14px', color: 'rgba(61, 46, 34, 0.8)', lineHeight: 1.5, fontWeight: 300 }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Facts Panel */}
              <div style={{ backgroundColor: 'var(--kesho-subtle)', border: '1px solid rgba(138, 112, 96, 0.08)', padding: '36px', borderRadius: '2px' }}>
                <h3 style={{ fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, color: 'var(--kesho-brown)', textTransform: 'uppercase', marginBottom: '28px', borderBottom: '1px solid rgba(138, 112, 96, 0.1)', paddingBottom: '16px' }}>
                  Quick Facts
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Clock size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(61, 46, 34, 0.5)', marginBottom: '2px' }}>Treatment Time</div>
                      <div style={{ fontSize: '13px', color: 'var(--kesho-brown)', fontWeight: 500 }}>{facts.time}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <ShieldAlert size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(61, 46, 34, 0.5)', marginBottom: '2px' }}>Downtime</div>
                      <div style={{ fontSize: '13px', color: 'var(--kesho-brown)', fontWeight: 500 }}>{facts.downtime}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Sparkles size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(61, 46, 34, 0.5)', marginBottom: '2px' }}>Results</div>
                      <div style={{ fontSize: '13px', color: 'var(--kesho-brown)', fontWeight: 500 }}>{facts.results}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Activity size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(61, 46, 34, 0.5)', marginBottom: '2px' }}>Duration</div>
                      <div style={{ fontSize: '13px', color: 'var(--kesho-brown)', fontWeight: 500 }}>{facts.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-width interior banner image */}
      <section style={{ height: '420px', position: 'relative', overflow: 'hidden' }}>
        <ImagePlaceholder type="clinic_interior" height="100%" />
      </section>

      {/* 4. Newsletter Subscription Bar */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', borderTop: '1px solid rgba(138, 112, 96, 0.08)', borderBottom: '1px solid rgba(138, 112, 96, 0.08)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-tag" style={{ color: 'var(--kesho-sand)', display: 'block', marginBottom: '4px' }}>STAY IN THE KNOW</span>
              <p style={{ fontSize: '14.5px', color: 'var(--kesho-body)', margin: 0, fontWeight: 300 }}>
                Sign up for the latest news, offers and skincare tips.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', borderBottom: '1.5px solid var(--kesho-sand)', width: '100%', maxWidth: '380px', paddingBottom: '6px' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ background: 'transparent', border: 'none', color: 'var(--kesho-brown)', fontSize: '13px', padding: '4px 0', outline: 'none', flexGrow: 1, fontWeight: 300 }}
                required
              />
              <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--kesho-sand)', cursor: 'pointer', padding: '0 4px' }} aria-label="Submit Email">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
