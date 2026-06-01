import React from 'react';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import BookingMock from '../components/BookingMock';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function Book() {
  useDocumentMetadata(
    'Book a Consultation | KESHO Aesthetics Finchley',
    'Book your complimentary KESHO consultation in Finchley. Real-time availability — choose your treatment, date, and practitioner.'
  );

  return (
    <div style={{ backgroundColor: 'var(--kesho-subtle)', padding: '60px 0 100px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">APPOINTMENTS</span>
          <h1 style={{ marginBottom: '16px' }}>Book your consultation.</h1>
          <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '700px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            Complimentary, unhurried, and entirely obligation-free. Secure your slot at our Finchley Central clinic in under a minute.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid-asymmetric-rev" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Column: Guidelines & Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* What to expect card */}
            <div style={{ background: 'var(--white)', padding: '40px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', boxShadow: 'var(--shadow-subtle)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={22} style={{ color: 'var(--kesho-sand)' }} /> What to expect
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(46, 36, 28, 0.8)', lineHeight: 1.7, marginBottom: '0' }}>
                Allow 30-45 minutes for your first visit. We will sit down in a private treatment room to discuss your goals, review your medical history, examine your expressions, and design a custom treatment plan. If we believe a treatment is not suitable or necessary, we will tell you honestly. There is never any pressure to book.
              </p>
            </div>

            {/* Alternative contact card */}
            <div style={{ background: 'var(--white)', padding: '40px', border: '1px solid rgba(138, 112, 96, 0.08)', borderRadius: '2px', boxShadow: 'var(--shadow-subtle)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '4px' }}>Prefer to call or email?</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Phone size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--kesho-sand)' }}>Call Us</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 500 }}>07300 123456</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Mail size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--kesho-sand)' }}>Email Us</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 500 }}>info@keshoaesthetics.co.uk</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <MapPin size={18} style={{ color: 'var(--kesho-sand)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--kesho-sand)' }}>Visit Us</div>
                  <div style={{ fontSize: '14.5px', fontWeight: 500 }}>375 Regents Park Road, Finchley, N3 1DE</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Booking Form */}
          <div>
            <BookingMock />
          </div>

        </div>

      </div>
    </div>
  );
}
