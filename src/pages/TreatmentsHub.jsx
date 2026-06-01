import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { ArrowRight, BadgeCheck, ShieldAlert, Sparkles } from 'lucide-react';

export default function TreatmentsHub() {
  useDocumentMetadata(
    'Aesthetic Treatments in Finchley | KESHO Aesthetics',
    'Explore KESHO\'s treatment menu — anti-wrinkle, lip fillers, dermal fillers, skin boosters, and microneedling. Book a complimentary consultation.'
  );

  const treatments = [
    {
      slug: 'anti-wrinkle',
      title: 'Anti-Wrinkle',
      desc: 'Smooth fine lines and refresh your appearance with prescribed botulinum toxin.',
      fromPrice: '£180',
      imageType: 'anti-wrinkle'
    },
    {
      slug: 'lip-fillers',
      title: 'Lip Fillers',
      desc: 'Balanced lip enhancement with premium hyaluronic acid filler.',
      fromPrice: '£150',
      imageType: 'lip-fillers'
    },
    {
      slug: 'dermal-fillers',
      title: 'Dermal Fillers',
      desc: 'Restore facial structure and definition with HA filler.',
      fromPrice: '£280',
      imageType: 'dermal-fillers'
    },
    {
      slug: 'skin-boosters',
      title: 'Skin Boosters',
      desc: 'Improve skin hydration, glow, and quality from within.',
      fromPrice: '£150',
      imageType: 'skin-boosters'
    },
    {
      slug: 'microneedling',
      title: 'Microneedling',
      desc: 'Stimulate skin renewal with PDRN, collagen, or exosomes.',
      fromPrice: '£100',
      imageType: 'microneedling'
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0', borderBottom: '1px solid var(--light-gray)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-tag">OUR SERVICES</span>
          <h1 style={{ marginBottom: '16px' }}>Considered treatments. Confident results.</h1>
          <p style={{ fontSize: '18px', opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}>
            Explore our focused menu of advanced aesthetic treatments — each backed by clinical evidence, delivered by registered practitioners, and tailored to your goals.
          </p>
        </div>
      </section>

      {/* 2. Treatments Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="cards-grid">
            {treatments.map((t) => (
              <div key={t.slug} className="blog-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px' }}>
                  <ImagePlaceholder type={t.imageType} height="100%" />
                </div>
                <div className="blog-card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '32px' }}>
                  <div className="blog-card-meta">From {t.fromPrice}</div>
                  <h3 className="blog-card-title" style={{ fontSize: '24px' }}>{t.title}</h3>
                  <p className="blog-card-excerpt" style={{ fontSize: '14px', lineHeight: 1.6 }}>{t.desc}</p>
                  <Link to={`/treatments/${t.slug}`} className="blog-card-link" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Explore treatment <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mid-page CTA */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="section-tag">Consultation</span>
          <h2 style={{ marginBottom: '16px' }}>Not sure where to start?</h2>
          <p style={{ opacity: 0.85, marginBottom: '32px', fontSize: '15.5px' }}>
            Your complimentary consultation is the best place to begin. We will assess your skin, discuss your goals, and design a plan around you — never the other way around.
          </p>
          <Link to="/book" className="btn-primary">Book Consultation</Link>
        </div>
      </section>

      {/* 4. Why KESHO Strip (3 columns) */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag">THE KESHO DIFFERENCE</span>
            <h2>Why our clients choose KESHO.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {/* Col 1 */}
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
                <BadgeCheck size={28} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Prescriber on-site</h3>
              <p style={{ fontSize: '14px', color: 'rgba(46, 36, 28, 0.75)', lineHeight: 1.6 }}>
                All injectables are prescribed by Kyle, our in-house GPhC-registered pharmacist — not a remote consultation based on a form.
              </p>
            </div>

            {/* Col 2 */}
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
                <ShieldAlert size={28} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Emergency-ready</h3>
              <p style={{ fontSize: '14px', color: 'rgba(46, 36, 28, 0.75)', lineHeight: 1.6 }}>
                We carry hyaluronidase on-site and have clear, clinical protocols for the rare event of filler complications.
              </p>
            </div>

            {/* Col 3 */}
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Honest advice</h3>
              <p style={{ fontSize: '14px', color: 'rgba(46, 36, 28, 0.75)', lineHeight: 1.6 }}>
                We turn people away when a treatment isn't right for them. Long-term skin health matters more than today's booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
