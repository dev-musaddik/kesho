import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { Phone, Mail, MapPin, Clock, Train, Bus, Car } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: 'General Enquiry',
    message: '',
    consent: false,
    honeypot: '' // Spam prevention
  });
  const [loading, setLoading] = useState(false);

  useDocumentMetadata(
    'Contact KESHO Aesthetics | Finchley, North London',
    'Visit KESHO Aesthetics at 375 Regents Park Road, Finchley N3 1DE. Call or email to book your consultation with our team.'
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Spam protection check
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      alert('Please fill in all required fields and check the consent box.');
      return;
    }

    setLoading(true);

    // Simulate form submission and redirect
    setTimeout(() => {
      setLoading(false);
      navigate('/thank-you');
    }, 1200);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'var(--kesho-cream)', padding: '80px 0', borderBottom: '1px solid var(--light-gray)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-tag">GET IN TOUCH</span>
          <h1 style={{ marginBottom: '16px' }}>Contact KESHO.</h1>
        </div>
      </section>

      {/* 2. NAP Block + Form */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px', alignItems: 'flex-start' }}>
            
            {/* Left Column: Contact details & Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '16px', display: 'block' }}>Details</span>
                
                {/* Details list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <MapPin size={20} style={{ color: 'var(--kesho-sand)', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Visit us</h4>
                      <p style={{ margin: '4px 0 0', opacity: 0.8 }}>375 Regents Park Road, Finchley, London N3 1DE</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Phone size={20} style={{ color: 'var(--kesho-sand)', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Call us</h4>
                      <p style={{ margin: '4px 0 0', opacity: 0.8 }}>07300 123456 (Mon - Sat)</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <Mail size={20} style={{ color: 'var(--kesho-sand)', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Email us</h4>
                      <p style={{ margin: '4px 0 0', opacity: 0.8 }}>info@keshoaesthetics.co.uk</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div style={{ background: 'var(--kesho-subtle)', padding: '32px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--kesho-brown)', marginBottom: '20px' }}>
                  <Clock size={20} style={{ color: 'var(--kesho-sand)' }} /> Opening Hours
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--light-gray)', paddingBottom: '6px' }}>
                    <span>Monday - Friday</span>
                    <span style={{ fontWeight: 500 }}>09:00 - 19:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--light-gray)', paddingBottom: '6px' }}>
                    <span>Saturday</span>
                    <span style={{ fontWeight: 500 }}>10:00 - 17:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                    <span>Sunday</span>
                    <span style={{ color: 'var(--kesho-sand)', fontWeight: 500 }}>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: 'var(--white)', padding: '48px', border: '1px solid rgba(138, 112, 96, 0.1)', boxShadow: 'var(--shadow-hover)' }}>
              <span className="section-tag" style={{ marginBottom: '16px', display: 'block' }}>ENQUIRY FORM</span>
              <h3 style={{ marginBottom: '32px' }}>Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                {/* Honeypot anti-spam field */}
                <input 
                  type="text" 
                  name="honeypot" 
                  style={{ display: 'none' }} 
                  value={formData.honeypot} 
                  onChange={handleInputChange} 
                />

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    required 
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className="form-control" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Treatment of Interest</label>
                  <select 
                    name="treatment" 
                    className="form-control" 
                    value={formData.treatment} 
                    onChange={handleInputChange}
                  >
                    <option value="General Enquiry">General Enquiry / Question</option>
                    <option value="Anti-Wrinkle">Anti-Wrinkle</option>
                    <option value="Lip Fillers">Lip Fillers</option>
                    <option value="Dermal Fillers">Dermal Fillers</option>
                    <option value="Skin Boosters">Skin Boosters</option>
                    <option value="Microneedling">Microneedling</option>
                    <option value="Not Sure">Not sure / Custom consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea 
                    name="message" 
                    className="form-control" 
                    required 
                    value={formData.message} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      required 
                      checked={formData.consent} 
                      onChange={handleInputChange} 
                    />
                    <span>
                      I agree to KESHO Aesthetics contacting me in response to my enquiry. View our Privacy Policy for more information on how we manage data.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', marginTop: '16px' }}
                  disabled={loading}
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <div style={{ width: '100%', height: '450px', borderTop: '1px solid var(--light-gray)', borderBottom: '1px solid var(--light-gray)' }}>
        {/* Google Maps Iframe */}
        <iframe 
          title="Kesho Aesthetics Finchley Clinic Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4357283457193!2d-0.19830578422672025!3d51.597818479650085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a293c66f56f%3A0xc00f0239cb0a95ad!2s375%20Regents%20Park%20Rd%2C%20London%20N3%201DE!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1) brightness(0.95)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 4. Getting Here Section */}
      <section style={{ backgroundColor: 'var(--kesho-subtle)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">DIRECTIONS</span>
            <h2>How to find us.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Tube */}
            <div style={{ background: 'var(--white)', padding: '32px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', textAlign: 'center' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '16px' }}><Train size={24} /></div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Public Transport</h4>
              <p style={{ fontSize: '13.5px', opacity: 0.8, margin: 0 }}>
                Nearest Tube: Finchley Central Station (Northern Line) — a short 8-minute flat walk to the clinic.
              </p>
            </div>

            {/* Bus */}
            <div style={{ background: 'var(--white)', padding: '32px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', textAlign: 'center' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '16px' }}><Bus size={24} /></div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Buses</h4>
              <p style={{ fontSize: '13.5px', opacity: 0.8, margin: 0 }}>
                Bus routes 82, 102, 125, 326, and 460 stop within a 2-minute walk from Regents Park Road.
              </p>
            </div>

            {/* Parking */}
            <div style={{ background: 'var(--white)', padding: '32px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', textAlign: 'center' }}>
              <div style={{ color: 'var(--kesho-sand)', marginBottom: '16px' }}><Car size={24} /></div>
              <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Parking</h4>
              <p style={{ fontSize: '13.5px', opacity: 0.8, margin: 0 }}>
                Paid meter street parking is available directly on Regents Park Road, and there are local car parks nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
