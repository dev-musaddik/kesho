import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function Pricing() {
  useDocumentMetadata(
    'Treatment Prices | KESHO Aesthetics Finchley',
    'Transparent pricing for all KESHO aesthetic treatments in Finchley — anti-wrinkle from £180, lip fillers from £150, microneedling from £100.'
  );

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0', borderBottom: '1px solid var(--light-gray)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-tag">PRICE LIST</span>
          <h1 style={{ marginBottom: '16px' }}>Transparent pricing.</h1>
          <p style={{ fontSize: '18px', opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}>
            Honest, upfront prices — because trust starts before the first appointment. Final treatment plans are agreed at your complimentary consultation.
          </p>
        </div>
      </section>

      {/* 2. Anchor Nav Strip */}
      <div style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--light-gray)', sticky: 'top', top: '90px', zIndex: 10, padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          <a href="#microneedling" style={{ color: 'var(--kesho-sand)' }}>Microneedling</a>
          <span style={{ color: 'var(--light-gray)' }}>·</span>
          <a href="#anti-wrinkle" style={{ color: 'var(--kesho-sand)' }}>Anti-Wrinkle</a>
          <span style={{ color: 'var(--light-gray)' }}>·</span>
          <a href="#lip-fillers" style={{ color: 'var(--kesho-sand)' }}>Lip Fillers</a>
          <span style={{ color: 'var(--light-gray)' }}>·</span>
          <a href="#dermal-fillers" style={{ color: 'var(--kesho-sand)' }}>Dermal Fillers</a>
          <span style={{ color: 'var(--light-gray)' }}>·</span>
          <a href="#skin-boosters" style={{ color: 'var(--kesho-sand)' }}>Skin Boosters</a>
        </div>
      </div>

      {/* 3. Pricing Sections */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Section: Microneedling */}
          <div id="microneedling" style={{ scrollMarginTop: '160px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', borderBottom: '1px solid var(--kesho-sand)', paddingBottom: '12px', marginBottom: '24px' }}>Microneedling</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Treatment Booster</th>
                    <th style={{ textAlign: 'right' }}>1 Session</th>
                    <th style={{ textAlign: 'right' }}>2 Sessions</th>
                    <th style={{ textAlign: 'right' }}>3 Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500 }}>With PDRN (Cellular Regeneration)</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£150</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£250</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£380</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>With Collagen Builder</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£100</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£180</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£190</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>With Exosomes (Stem Cell Signals)</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£200</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£350</td>
                    <td style={{ textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--kesho-brown)' }}>£550</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Anti-Wrinkle */}
          <div id="anti-wrinkle" style={{ scrollMarginTop: '160px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', borderBottom: '1px solid var(--kesho-sand)', paddingBottom: '12px', marginBottom: '24px' }}>Anti-Wrinkle</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Treatment Area / Details</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 Area (Forehead, Frown, or Crow's Feet)</td><td className="price">£180</td></tr>
                  <tr><td>2 Areas</td><td className="price">£220</td></tr>
                  <tr><td>3 Areas (Full Upper Face)</td><td className="price">£280</td></tr>
                  <tr><td>Lip Flip</td><td className="price">£80</td></tr>
                  <tr><td>DOA (Mouth Corner Lifting)</td><td className="price">£80</td></tr>
                  <tr><td>Masseter (Jaw Slimming / Teeth Grinding)</td><td className="price">£230</td></tr>
                  <tr><td>Jawline Slimming</td><td className="price">£299</td></tr>
                  <tr><td>Neck Tightening</td><td className="price">£249</td></tr>
                  <tr><td>Nefertiti Neck Lift</td><td className="price">£179</td></tr>
                  <tr><td>Trap Tox (Shoulder)</td><td className="price">£299</td></tr>
                  <tr><td>Hyperhidrosis (Excess Sweating)</td><td className="price">£500</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--kesho-sand)', fontStyle: 'italic', marginTop: '8px' }}>
              *Upper face areas refer to: forehead lines, frown lines (between brows), and crow's feet (around eyes).
            </p>
          </div>

          {/* Section: Lip Fillers */}
          <div id="lip-fillers" style={{ scrollMarginTop: '160px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', borderBottom: '1px solid var(--kesho-sand)', paddingBottom: '12px', marginBottom: '24px' }}>Lip Fillers</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Treatment Details</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Subtle Lip Hydration / Definition (up to 0.55ml)</td><td className="price">£150</td></tr>
                  <tr><td>Full Lip Volume & Shape (1.0ml)</td><td className="price">£220</td></tr>
                  <tr><td>Lip Flip (Aesthetic Toxin)</td><td className="price">£80</td></tr>
                  <tr><td>Upper Perioral Filler (Vertical lip lines)</td><td className="price">£150</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Dermal Fillers */}
          <div id="dermal-fillers" style={{ scrollMarginTop: '160px', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', borderBottom: '1px solid var(--kesho-sand)', paddingBottom: '12px', marginBottom: '24px' }}>Dermal Fillers</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Treatment Area (Premium Hyaluronic Acid)</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Nasolabial Folds (Smile Lines)</td><td className="price">£280</td></tr>
                  <tr><td>Chin Definition / Projection</td><td className="price">£300</td></tr>
                  <tr><td>Cheek Contouring & Volume Lift</td><td className="price">£380</td></tr>
                  <tr><td>Jawline Sculpting Structure</td><td className="price">£380</td></tr>
                  <tr><td>Chin & Jawline Profile Combination Package</td><td className="price">£680</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Skin Boosters */}
          <div id="skin-boosters" style={{ scrollMarginTop: '160px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', borderBottom: '1px solid var(--kesho-sand)', paddingBottom: '12px', marginBottom: '24px' }}>Skin Boosters</h2>
            <div className="price-table-wrapper">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Injectable Skincare / Cellular Nutrition</th>
                    <th style={{ textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Skin Booster HA (Micro-droplet hydration) - 1 Session</td><td className="price">£380</td></tr>
                  <tr><td>Juvéderm Skinvive - 1 Session</td><td className="price">£400</td></tr>
                  <tr><td>Polynucleotides (Cellular Renewal) - 1 Session</td><td className="price">£250</td></tr>
                  <tr><td>Polynucleotides (Cellular Renewal) - Course of 2 Sessions</td><td className="price">£550</td></tr>
                  <tr><td>Polynucleotides (Cellular Renewal) - Course of 3 Sessions</td><td className="price">£750</td></tr>
                  <tr><td>Vitamin B12 Booster Injection - Course of 4 Shots</td><td className="price">£150</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes Block */}
          <div style={{ background: 'var(--kesho-subtle)', padding: '32px', border: '1px solid rgba(138, 112, 96, 0.1)', borderRadius: '2px', fontSize: '13.5px', lineHeight: 1.7 }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Please Note:</h3>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>All prices listed are standard guidelines. Your finalized, personal treatment plan and total fee are confirmed during your consultation.</li>
              <li>Multiple-area treatments must be booked and administered in a single appointment to qualify for combined pricing rates.</li>
              <li>Course packages require sessions to be booked and paid for in a single package upfront.</li>
              <li>A booking deposit applies to all treatments over £100; this is non-refundable but is fully deducted from your final balance on treatment day.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Final CTA */}
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
