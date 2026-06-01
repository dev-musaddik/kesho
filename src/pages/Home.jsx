import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Marquee from '../components/Marquee';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, User, Flower2, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const MonogramLogo = ({ size = 60, color = 'var(--kesho-sand)' }) => (
  <svg viewBox="0 0 100 100" style={{ width: size, height: size, flexShrink: 0, opacity: 0.8 }} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1.5" />
    <path d="M38 28 V72 M38 50 H44 L60 28 M44 50 L60 72" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M62 28 C 76 34, 76 66, 62 72" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  useDocumentMetadata(
    'KESHO Aesthetics | Premium Clinic in Finchley, London',
    'Expert aesthetic treatments in Finchley. Anti-wrinkle, lip fillers, dermal fillers, skin boosters, microneedling. Book a complimentary consultation today.'
  );

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const trustItems = [
    {
      icon: <User size={28} strokeWidth={1.5} />,
      title: 'EXPERT CARE',
      desc: 'Highly trained professionals with a patient-first approach.'
    },
    {
      icon: <Flower2 size={28} strokeWidth={1.5} />,
      title: 'PERSONALISED',
      desc: 'Tailored treatments designed for your unique beauty.'
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: 'SAFE & ADVANCED',
      desc: 'Evidence-based treatments with premium products.'
    },
    {
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      title: 'NATURAL RESULTS',
      desc: 'Enhancing your features while keeping you, you.'
    }
  ];

  const showcaseTreatments = [
    {
      slug: 'anti-wrinkle',
      title: 'Anti-Wrinkle',
      desc: 'Smooth fine lines and wrinkles for a refreshed, youthful appearance.'
    },
    {
      slug: 'lip-fillers',
      title: 'Lip Fillers',
      desc: 'Enhance volume, shape and definition for naturally beautiful lips.'
    },
    {
      slug: 'dermal-fillers',
      title: 'Dermal Fillers',
      desc: 'Restore volume, contour and balance with expert precision.'
    },
    {
      slug: 'skin-boosters',
      title: 'Skin Boosters',
      desc: 'Deep hydration for glowing, healthy and radiant skin from within.'
    },
    {
      slug: 'microneedling',
      title: 'Microneedling',
      desc: 'Stimulate collagen and improve texture for smoother skin.'
    }
  ];

  const testimonials = [
    {
      text: "The team at KESHO made me feel so comfortable and confident. The results are natural and exactly what I wanted.",
      author: "SOPHIE M."
    },
    {
      text: "Kyle and the team run KESHO like a proper medical clinic. Kyle reviewed my history in person, wrote the prescription, and did the follow-up. That level of accountability is hard to find.",
      author: "MICHAEL T."
    },
    {
      text: "Highly recommend the polynucleotides skin boosters. My skin feels deeply hydrated and has a natural glow I haven't seen in years.",
      author: "ELENA R."
    }
  ];

  // Map homepage journal content to visual mockup text
  const journalPosts = [
    {
      title: "The Power of Skin Boosters",
      category: "Skincare",
      slug: "dermal-fillers-vs-skin-boosters",
      imageType: "skin_boosters"
    },
    {
      title: "Beauty Rituals for Mind & Skin",
      category: "Wellness",
      slug: "kesho-approach-natural-results",
      imageType: "clinic_interior"
    },
    {
      title: "Microneedling: What to Expect",
      category: "Treatments",
      slug: "microneedling-pdrn-collagen-exosomes",
      imageType: "microneedling"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', minHeight: '82vh', display: 'flex', alignItems: 'center', padding: '80px 0 100px', borderBottom: '1px solid rgba(138, 112, 96, 0.08)' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left', paddingRight: '20px' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(46px, 6.5vw, 68px)', fontWeight: 300, color: 'var(--kesho-brown)', lineHeight: 1.15, marginBottom: '24px' }}>
                Elevate <br />Your Beauty
              </h1>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--kesho-brown)', opacity: 0.8, marginBottom: '28px', fontStyle: 'italic', fontWeight: 300 }}>
                Timeless confidence. Refined results.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--kesho-body)', lineHeight: 1.75, marginBottom: '44px', fontWeight: 300, maxWidth: '520px' }}>
                At KESHO Aesthetics, we blend advanced techniques with a personalised approach to help you look and feel your absolute best.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/treatments" className="btn-primary" style={{ padding: '14px 28px', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.15em', background: 'var(--kesho-sand)', borderColor: 'var(--kesho-sand)', textTransform: 'uppercase' }}>
                  Explore Treatments
                </Link>
                <Link to="/book" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.15em', borderColor: 'var(--kesho-sand)', color: 'var(--kesho-brown)', background: 'transparent', textTransform: 'uppercase' }}>
                  Book Consultation
                </Link>
              </div>
            </div>
            <div style={{ height: '520px', borderRadius: '2px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type="hero" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Text Loop */}
      <Marquee />

      {/* 3. Trust Strip Section */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(138, 112, 96, 0.08)' }}>
        <div className="container">
          <div className="grid-4col" style={{ gap: '32px' }}>
            {trustItems.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '12px' }}>
                <div style={{ color: 'var(--kesho-sand)', marginBottom: '20px', display: 'inline-block' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '12px', letterSpacing: '0.18em', fontWeight: 600, color: 'var(--kesho-brown)', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(61, 46, 34, 0.75)', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatments Showcase */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '12px' }}>OUR TREATMENTS</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 300, color: 'var(--kesho-brown)' }}>Advanced Aesthetics. Natural You.</h2>
          </div>

          <div className="showcase-5col">
            {showcaseTreatments.map((t) => (
              <Link key={t.slug} to={`/treatments/${t.slug}`} className="showcase-card">
                <div className="showcase-card-img-wrap">
                  <ImagePlaceholder type={t.slug} height="100%" />
                </div>
                <div className="showcase-card-content">
                  <h3 className="showcase-card-title">{t.title}</h3>
                  <p className="showcase-card-desc">{t.desc}</p>
                  <div className="showcase-card-arrow">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Teaser */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="grid-2col" style={{ gap: '80px', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-tag">ABOUT KESHO</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 300, color: 'var(--kesho-brown)', margin: '16px 0 24px', lineHeight: 1.2 }}>
                Redefining Aesthetics <br />With Intention
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--kesho-body)', lineHeight: 1.8, marginBottom: '36px', fontWeight: 300 }}>
                KESHO Aesthetics is more than a clinic. It's a sanctuary for transformation, self-care and confidence.
              </p>
              <Link to="/about" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', borderColor: 'var(--kesho-sand)', color: 'var(--kesho-brown)' }}>
                LEARN MORE
              </Link>
            </div>
            <div style={{ height: '460px', borderRadius: '2px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type="clinic_interior" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '120px 0', borderTop: '1px solid rgba(138, 112, 96, 0.08)', borderBottom: '1px solid rgba(138, 112, 96, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag" style={{ letterSpacing: '0.25em' }}>WHAT OUR CLIENTS SAY</span>
          </div>

          <div className="testimonial-slider-container">
            <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <p className="testimonial-quote">
                “{testimonials[activeTestimonial].text}”
              </p>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', fontWeight: 600, color: 'var(--kesho-brown)', textTransform: 'uppercase' }}>
                - {testimonials[activeTestimonial].author}
              </span>
            </div>

            {/* Slider Navigation arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
              <button onClick={prevTestimonial} className="testimonial-nav-btn" aria-label="Previous testimonial">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextTestimonial} className="testimonial-nav-btn" aria-label="Next testimonial">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slider Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveTestimonial(idx)}
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    background: activeTestimonial === idx ? 'var(--kesho-brown)' : 'rgba(61, 46, 34, 0.2)', 
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Blog Teaser */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag" style={{ letterSpacing: '0.25em', display: 'block', marginBottom: '12px' }}>FROM THE JOURNAL</span>
          </div>

          <div className="journal-grid-custom">
            {journalPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`} className="journal-card-custom">
                <div className="journal-card-img-wrap">
                  <ImagePlaceholder type={post.imageType} height="100%" />
                </div>
                <div className="journal-card-body">
                  <span className="journal-card-meta">{post.category}</span>
                  <h3 className="journal-card-title">{post.title}</h3>
                  <span className="journal-card-link">READ MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pre-footer CTA */}
      <section className="pre-footer-banner">
        <div className="container">
          <div className="pre-footer-banner-content">
            <div style={{ textAlign: 'left' }}>
              <span className="section-tag" style={{ letterSpacing: '0.2em', display: 'block', marginBottom: '8px', color: 'var(--kesho-sand)' }}>Ready to Elevate Your Beauty?</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, color: 'var(--kesho-brown)', margin: '0 0 12px 0' }}>
                Ready to Elevate Your Beauty?
              </h2>
              <p style={{ fontSize: '14.5px', color: 'var(--kesho-body)', margin: 0, fontWeight: 300 }}>
                Book a consultation today and begin your personalised journey.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <Link to="/book" className="btn-primary" style={{ padding: '14px 28px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', background: 'var(--kesho-sand)', borderColor: 'var(--kesho-sand)', textTransform: 'uppercase' }}>
                Book Consultation
              </Link>
              <div className="hide-mobile">
                <MonogramLogo size={56} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
