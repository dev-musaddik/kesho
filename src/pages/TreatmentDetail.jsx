import React from 'react';
import { useParams, Link } from 'react-router-dom';
import treatmentsData from '../data/treatmentsData';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import FAQSection from '../components/FAQSection';
import { Check, X, ArrowRight, User } from 'lucide-react';

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

  // Get other treatments for the "Related Treatments" section
  const relatedSlugs = Object.keys(treatmentsData).filter(s => s !== slug).slice(0, 3);

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '100px 0 80px', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag">Treatment Page</span>
            <h1 style={{ marginBottom: '16px', lineHeight: 1.15 }}>{treatment.title}</h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--kesho-body)', opacity: 0.85, marginBottom: '32px', fontWeight: 300 }}>
              {treatment.subtext}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--kesho-sand)' }}>
                Pricing: <span style={{ fontSize: '20px', fontFamily: 'var(--font-display)', color: 'var(--kesho-brown)', fontWeight: 400 }}>{treatment.priceRange}</span>
              </div>
              <Link to="/book" className="btn-primary">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What It Is Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Overview</span>
              <h2 style={{ marginBottom: '24px' }}>What is {treatment.title}?</h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '32px' }}>
                {treatment.whatItIs}
              </p>
              
              <div style={{ padding: '24px', borderLeft: '2px solid var(--kesho-sand)', backgroundColor: 'var(--kesho-subtle)' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--kesho-sand)', display: 'block', marginBottom: '8px' }}>
                  Safety First
                </span>
                <p style={{ fontSize: '13.5px', margin: 0, opacity: 0.85 }}>
                  At KESHO, all injectable procedures are performed under strict clinical protocols with in-person prescribing pharmacists and emergency reversal agents stored on-site.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type={treatment.imageType} height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who It's For Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Suitability</span>
            <h2>Who it is for.</h2>
            <p style={{ opacity: 0.8 }}>We customize every treatment plan, but this procedure is typically ideal for:</p>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {treatment.whoItIsFor.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '16px', background: 'var(--white)', padding: '28px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px' }}>
                <div style={{ color: 'var(--kesho-sand)', flexShrink: 0 }}>
                  <Check size={20} />
                </div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.85 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Transparent Fees</span>
            <h2>Treatment Pricing</h2>
            <p style={{ opacity: 0.8 }}>Transparent rates with no hidden costs. All prices include your initial clinical review.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Treatment details</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {treatment.pricing.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 400 }}>{item.name}</td>
                      <td className="price">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p style={{ fontSize: '12px', color: 'var(--kesho-sand)', fontStyle: 'italic', marginTop: '16px' }}>
              {treatment.pricingNote || '*Note: Final treatment cost depends on product choices and is confirmed during your consultation.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Timeline Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Step-by-step</span>
            <h2>What to expect.</h2>
            <p style={{ opacity: 0.8 }}>Your journey with KESHO from the moment you book to your review.</p>
          </div>
          
          <div className="timeline">
            {treatment.timeline.map((step, idx) => (
              <div key={idx} className="timeline-step">
                <div className="timeline-number">0{idx + 1}</div>
                <div className="timeline-title">{step.step.replace(/^\d+\.\s*/, '')}</div>
                <div className="timeline-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Aftercare Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag">Self-care Guide</span>
            <h2>Aftercare Guidelines</h2>
            <p style={{ opacity: 0.8 }}>Follow these simple rules to ensure optimal settling, prevent infection, and maximize your results.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Dos */}
            <div style={{ border: '1px solid rgba(138, 112, 96, 0.1)', padding: '40px', background: 'var(--white)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--kesho-brown)', borderBottom: '1px solid var(--light-gray)', paddingBottom: '16px', marginBottom: '24px' }}>
                <Check size={24} style={{ color: 'green' }} /> What to do
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {treatment.aftercare.do.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '14px', lineHeight: 1.6, opacity: 0.85 }}>
                    <span style={{ color: 'var(--kesho-sand)', fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Don'ts */}
            <div style={{ border: '1px solid rgba(138, 112, 96, 0.1)', padding: '40px', background: 'var(--white)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--kesho-brown)', borderBottom: '1px solid var(--light-gray)', paddingBottom: '16px', marginBottom: '24px' }}>
                <X size={24} style={{ color: 'red' }} /> What to avoid
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {treatment.aftercare.dont.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '14px', lineHeight: 1.6, opacity: 0.85 }}>
                    <span style={{ color: 'var(--kesho-sand)', fontWeight: 'bold' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ opacity: 0.8 }}>Answers to common questions about {treatment.title} at our Finchley clinic.</p>
          </div>
          <FAQSection faqs={treatment.faqs} />
        </div>
      </section>

      {/* 8. Meet Your Practitioners Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-tag">Accountability</span>
            <h2>Meet your practitioners.</h2>
            <p style={{ opacity: 0.8 }}>Regulated, statutory professionals in charge of your safety and care.</p>
          </div>
          
          <div className="practitioner-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Claire */}
            <div className="practitioner-card">
              <div style={{ height: '300px' }}><ImagePlaceholder type="claire" height="100%" /></div>
              <div className="practitioner-info" style={{ padding: '24px' }}>
                <div className="practitioner-name" style={{ fontSize: '20px' }}>Claire</div>
                <div className="practitioner-role" style={{ fontSize: '10px', marginBottom: '16px' }}>Lead Aesthetic Practitioner</div>
                <Link to="/about/claire" className="btn-secondary">View Profile</Link>
              </div>
            </div>
            
            {/* Kyle */}
            <div className="practitioner-card">
              <div style={{ height: '300px' }}><ImagePlaceholder type="kyle" height="100%" /></div>
              <div className="practitioner-info" style={{ padding: '24px' }}>
                <div className="practitioner-name" style={{ fontSize: '20px' }}>Kyle</div>
                <div className="practitioner-role" style={{ fontSize: '10px', marginBottom: '16px' }}>Prescribing Pharmacist</div>
                <Link to="/about/kyle" className="btn-secondary">View Profile</Link>
              </div>
            </div>
            
            {/* Dr Ryan Marni */}
            <div className="practitioner-card">
              <div style={{ height: '300px' }}><ImagePlaceholder type="dr-ryan-marni" height="100%" /></div>
              <div className="practitioner-info" style={{ padding: '24px' }}>
                <div className="practitioner-name" style={{ fontSize: '20px' }}>Dr Ryan Marni</div>
                <div className="practitioner-role" style={{ fontSize: '10px', marginBottom: '16px' }}>Medically Qualified Doctor</div>
                <Link to="/about/dr-ryan-marni" className="btn-secondary">View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Related Treatments */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <h2>Other Treatments</h2>
          </div>
          <div className="cards-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {relatedSlugs.map((s) => {
              const item = treatmentsData[s];
              return (
                <div key={s} className="card" style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '24px', flexGrow: 1 }}>{item.subtext}</p>
                  <Link to={`/treatments/${s}`} className="card-link" style={{ fontSize: '10px' }}>
                    Explore Treatment <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to Begin Your Journey?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 40px', fontWeight: 300 }}>
            Book your complimentary consultation. We will listen, examine, and guide your aesthetic choices with complete honesty.
          </p>
          <Link to="/book" className="btn-white">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
