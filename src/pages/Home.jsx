import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Marquee from '../components/Marquee';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Star, ShieldCheck, HeartHandshake, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function Home() {
  useDocumentMetadata(
    'KESHO Aesthetics | Premium Clinic in Finchley, London',
    'Expert aesthetic treatments in Finchley. Anti-wrinkle, lip fillers, dermal fillers, skin boosters, microneedling. Book a complimentary consultation today.'
  );

  // Get first 3 blog posts for teaser
  const recentPosts = blogPosts.slice(0, 3);

  const trustItems = [
    {
      icon: <BadgeCheck size={28} />,
      title: 'Expert Care',
      desc: 'Pharmacist, doctor, and OfQual-regulated practitioner — under one roof.'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Personalised',
      desc: 'Every treatment plan begins with a complimentary consultation.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Safe & Advanced',
      desc: 'Prescription-only medicines, in-house. Emergency-ready, always.'
    },
    {
      icon: <ShieldAlert size={28} />,
      title: 'Natural Results',
      desc: 'Considered, conservative, reversible where possible.'
    }
  ];

  const showcaseTreatments = [
    {
      slug: 'anti-wrinkle',
      title: 'Anti-Wrinkle',
      desc: 'Smooth lines and refresh your appearance with expertly placed botulinum toxin.',
      price: '£180'
    },
    {
      slug: 'lip-fillers',
      title: 'Lip Fillers',
      desc: 'Subtle volume, balanced shape — never overdone.',
      price: '£150'
    },
    {
      slug: 'dermal-fillers',
      title: 'Dermal Fillers',
      desc: 'Restore lost volume and definition with premium hyaluronic acid fillers.',
      price: '£280'
    },
    {
      slug: 'skin-boosters',
      title: 'Skin Boosters',
      desc: 'Deep hydration, glow, and improved skin quality from within.',
      price: '£150'
    },
    {
      slug: 'microneedling',
      title: 'Microneedling',
      desc: 'Stimulate your skin\'s own renewal — with PDRN, collagen, or exosomes.',
      price: '£100'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah H.',
      location: 'Finchley',
      text: 'I was so nervous before my first anti-wrinkle treatment. Claire was incredibly patient, explaining the anatomy and looking at my expressions. The results look completely natural — I still look like me, just refreshed!'
    },
    {
      name: 'Michael T.',
      location: 'Barnet',
      text: 'Kyle and the team run KESHO like a proper medical clinic. Kyle reviewed my history in person, wrote the prescription, and did the follow-up. That level of accountability is hard to find in London aesthetics.'
    },
    {
      name: 'Elena R.',
      location: 'North London',
      text: 'Highly recommend the polynucleotides skin boosters. My skin feels deeply hydrated and has a natural glow I haven\'t seen in years. Truly premium experience in a beautiful, calm space.'
    }
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 0 100px', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <div className="grid-asymmetric" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-tag" style={{ letterSpacing: '0.4em' }}>ELEVATE YOUR BEAUTY</span>
              <h1 style={{ lineHeight: 1.1, marginBottom: '24px' }}>Timeless Confidence. Refined Results.</h1>
              <p style={{ fontSize: '18px', color: 'var(--kesho-body)', opacity: 0.8, marginBottom: '40px', lineHeight: 1.6, fontWeight: 300 }}>
                Expert care. Advanced techniques. Natural results. Premium aesthetic treatments in Finchley, North London — delivered by a team of registered medical and regulated practitioners.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link to="/book" className="btn-primary">Book Consultation</Link>
                <Link to="/treatments" className="btn-secondary" style={{ alignSelf: 'center' }}>Explore Treatments</Link>
              </div>
            </div>
            <div style={{ height: '480px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type="hero" height="100%" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marquee Text Loop */}
      <Marquee />

      {/* 3. Trust Strip Section */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <div className="grid-4col" style={{ gap: '32px' }}>
            {trustItems.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '16px' }}>
                <div style={{ color: 'var(--kesho-sand)', marginBottom: '24px', display: 'inline-block' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(46, 36, 28, 0.75)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatments Showcase */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '64px' }}>
            <span className="section-tag">OUR TREATMENTS</span>
            <h2>Science. Art. You.</h2>
            <p style={{ opacity: 0.8, fontSize: '16px', maxWidth: '600px' }}>
              A focused, evidence-led menu of treatments. No upsells, no gimmicks — just refined results, tailored to your goals.
            </p>
          </div>

          <div className="cards-grid">
            {showcaseTreatments.map((t, idx) => (
              <div key={t.slug} className={`card ${idx === 0 ? 'featured' : ''}`}>
                <h3 style={{ fontSize: '26px', marginBottom: '8px' }}>{t.title}</h3>
                <div className="card-price">From {t.price}</div>
                <p className="card-desc">{t.desc}</p>
                <Link to={`/treatments/${t.slug}`} className="card-link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Teaser */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="grid-2col" style={{ gap: '80px', alignItems: 'center' }}>
            <div style={{ height: '440px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-subtle)' }}>
              <ImagePlaceholder type="about" height="100%" />
            </div>
            <div>
              <span className="section-tag">ABOUT KESHO</span>
              <h2>Elevated Care. Exceptional Experience.</h2>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '24px', lineHeight: 1.8 }}>
                KESHO Aesthetics is more than a clinic — it's a space where science, artistry, and your individual goals come together. Our team brings pharmacy expertise, medical training, and aesthetic excellence to every consultation.
              </p>
              <p style={{ fontSize: '15.5px', color: 'rgba(46, 36, 28, 0.8)', marginBottom: '36px', lineHeight: 1.8 }}>
                We believe in transparency, education, and treatments that work <em>with</em> your features — never against them.
              </p>
              <Link to="/about" className="btn-primary">Learn more about us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag">WHAT OUR CLIENTS SAY</span>
            <h2>Trusted by people who care about results.</h2>
          </div>
          <div className="grid-3col">
            {testimonials.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--white)', padding: '40px', border: '1px solid rgba(138, 112, 96, 0.08)', boxShadow: 'var(--shadow-subtle)', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#d4af37', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" stroke="none" />
                  ))}
                </div>
                <p style={{ fontSize: '14.5px', fontStyle: 'italic', opacity: 0.85, marginBottom: '24px', lineHeight: 1.7 }}>
                  "{item.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--light-gray)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--kesho-brown)' }}>{item.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--kesho-sand)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Blog Teaser */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--light-gray)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
            <div>
              <span className="section-tag">THE KESHO JOURNAL</span>
              <h2>Insights for Your Best Self</h2>
            </div>
            <Link to="/blog" className="btn-secondary" style={{ paddingBottom: '2px', marginBottom: '8px' }}>
              View all articles
            </Link>
          </div>

          <div className="blog-grid">
            {recentPosts.map((post) => (
              <div key={post.slug} className="blog-card">
                <div style={{ height: '200px' }}>
                  <ImagePlaceholder type={post.category === 'Treatments' ? 'anti-wrinkle' : 'about'} height="100%" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">{post.category}</div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">
                    {post.meta_description.length > 120 ? post.meta_description.substring(0, 120) + '...' : post.meta_description}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    Read article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section style={{ backgroundColor: 'var(--kesho-brown)', color: 'var(--white)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>Ready to Elevate Your Beauty?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto 48px', fontWeight: 300, fontSize: '16px' }}>
            Book a complimentary consultation. We will listen, advise, and guide your journey — with absolutely no obligation.
          </p>
          <Link to="/book" className="btn-white">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
}
