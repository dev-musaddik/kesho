import React from 'react';

// Import local generated assets
import heroImg from '../assets/hero_skincare.png';
import clinicImg from '../assets/clinic_interior.png';
import claireImg from '../assets/claire.png';
import kyleImg from '../assets/kyle.png';
import drRyanImg from '../assets/dr_ryan.png';

// Import treatment-specific local assets
import antiWrinkleImg from '../assets/anti_wrinkle.png';
import lipFillersImg from '../assets/lip_fillers.png';
import dermalFillersImg from '../assets/dermal_fillers.png';
import skinBoostersImg from '../assets/skin_boosters.png';
import microneedlingImg from '../assets/microneedling.png';

export default function ImagePlaceholder({ type = 'hero', height = '100%', title = '' }) {
  // Select gradient and SVG structure based on type
  let gradient = 'linear-gradient(135deg, #c9c4bd 0%, #a8a098 30%, #8e8680 60%, #b5ad9e 100%)';
  let svgContent = null;
  let useImgSrc = null;
  let customOverlay = null;

  if (type === 'hero') {
    useImgSrc = heroImg;
  } else if (type === 'why' || type === 'about' || type === 'clinic' || type === 'clinic_interior' || type === 'clinic-interior') {
    useImgSrc = clinicImg;
  } else if (type === 'claire') {
    useImgSrc = claireImg;
    customOverlay = (
      <div className="placeholder-text-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(61,46,34,0.9) 100%)',
        padding: '24px 20px',
        color: '#fff',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', letterSpacing: '0.05em' }}>Claire Spencer</div>
        <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8, marginTop: '4px' }}>Lead Aesthetic Practitioner</div>
      </div>
    );
  } else if (type === 'kyle') {
    useImgSrc = kyleImg;
    customOverlay = (
      <div className="placeholder-text-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(61,46,34,0.9) 100%)',
        padding: '24px 20px',
        color: '#fff',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', letterSpacing: '0.05em' }}>Kyle Sterling</div>
        <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8, marginTop: '4px' }}>Independent Prescribing Pharmacist</div>
      </div>
    );
  } else if (type === 'dr-ryan-marni') {
    useImgSrc = drRyanImg;
    customOverlay = (
      <div className="placeholder-text-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(61,46,34,0.9) 100%)',
        padding: '24px 20px',
        color: '#fff',
        zIndex: 2,
        textAlign: 'center'
      }}>
        <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', letterSpacing: '0.05em' }}>Dr Ryan Marni</div>
        <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8, marginTop: '4px' }}>Clinical Oversight Doctor</div>
      </div>
    );
  } else if (type === 'anti-wrinkle' || type === 'anti_wrinkle') {
    useImgSrc = antiWrinkleImg;
  } else if (type === 'lip-fillers' || type === 'lip_fillers') {
    useImgSrc = lipFillersImg;
  } else if (type === 'dermal-fillers' || type === 'dermal_fillers') {
    useImgSrc = dermalFillersImg;
  } else if (type === 'skin-boosters' || type === 'skin_boosters') {
    useImgSrc = skinBoostersImg;
  } else if (type === 'microneedling') {
    useImgSrc = microneedlingImg;
  } else if (type === 'microneedling') {
    gradient = 'linear-gradient(135deg, #8a7060 0%, #bea798 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '40%', opacity: 0.2 }} fill="none" stroke="#fff" strokeWidth="0.8">
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="15" />
        <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M25 75 L75 25" />
        <circle cx="50" cy="50" r="1" fill="#fff" />
        <circle cx="50" cy="35" r="1" fill="#fff" />
        <circle cx="50" cy="65" r="1" fill="#fff" />
        <circle cx="35" cy="50" r="1" fill="#fff" />
        <circle cx="65" cy="50" r="1" fill="#fff" />
      </svg>
    );
  } else if (type === 'anti-wrinkle') {
    gradient = 'linear-gradient(135deg, #3d2e22 0%, #7c6251 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '40%', opacity: 0.2 }} fill="none" stroke="#fff" strokeWidth="0.8">
        <path d="M20 30 C 35 25, 65 25, 80 30" />
        <path d="M20 40 C 35 37, 65 37, 80 40" strokeWidth="1.2" />
        <path d="M20 50 C 35 50, 65 50, 80 50" />
        <path d="M20 60 C 35 63, 65 63, 80 60" />
        <line x1="50" y1="10" x2="50" y2="25" strokeWidth="1.5" />
        <polygon points="50,28 48,22 52,22" fill="#fff" stroke="none" />
      </svg>
    );
  } else if (type === 'lip-fillers') {
    gradient = 'linear-gradient(135deg, #a68470 0%, #cfa995 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '40%', opacity: 0.2 }} fill="none" stroke="#fff" strokeWidth="0.8">
        <path d="M20 50 Q35 40 50 48 Q65 40 80 50 Q65 65 50 65 Q35 65 20 50 Z" />
        <path d="M20 50 Q50 53 80 50" />
      </svg>
    );
  } else if (type === 'dermal-fillers') {
    gradient = 'linear-gradient(135deg, #705d50 0%, #a69285 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '40%', opacity: 0.2 }} fill="none" stroke="#fff" strokeWidth="0.8">
        <path d="M20 30 Q50 20 80 30" />
        <path d="M20 45 Q50 60 80 45" />
        <path d="M30 75 Q50 60 70 75" />
        <circle cx="50" cy="45" r="8" strokeDasharray="2,2" />
      </svg>
    );
  } else if (type === 'skin-boosters') {
    gradient = 'linear-gradient(135deg, #8a7060 0%, #e8d5c0 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '40%', opacity: 0.2 }} fill="none" stroke="#fff" strokeWidth="0.8">
        <path d="M50 20 Q65 45 65 60 A15 15 0 0 1 35 60 Q35 45 50 20 Z" />
        <circle cx="50" cy="60" r="22" strokeDasharray="3,3" />
        <path d="M50 40 Q55 50 55 60" opacity="0.5" />
      </svg>
    );
  } else {
    gradient = 'linear-gradient(135deg, #c9c4bd 0%, #afa8a0 100%)';
    svgContent = (
      <svg viewBox="0 0 100 100" className="img-placeholder-pattern" style={{ width: '30%', opacity: 0.15 }} fill="none" stroke="#fff" strokeWidth="1">
        <rect x="20" y="20" width="60" height="60" rx="2" />
        <circle cx="50" cy="50" r="10" />
      </svg>
    );
  }

  // If a real image path exists, render it with fallback to styling
  if (useImgSrc) {
    return (
      <div 
        className="img-placeholder image-loaded" 
        style={{ 
          height: height, 
          minHeight: height === '100%' ? '350px' : height,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#3d2e22',
        }}
      >
        <img 
          src={useImgSrc} 
          alt={title || type} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease'
          }}
          className="placeholder-image-file"
        />
        {/* Soft shadow overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(61,46,34,0.1) 0%, rgba(61,46,34,0.3) 100%)',
          zIndex: 1
        }}></div>
        {customOverlay}
        {title && (
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            color: '#fff',
            fontFamily: 'Cormorant Garamond',
            fontSize: '24px',
            letterSpacing: '0.05em',
            zIndex: 2,
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            {title}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="img-placeholder" 
      style={{ 
        background: gradient, 
        height: height, 
        minHeight: height === '100%' ? '350px' : height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {svgContent}
      {title && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          color: '#fff',
          fontFamily: 'Cormorant Garamond',
          fontSize: '24px',
          letterSpacing: '0.05em',
          zIndex: 2,
          textShadow: '0 2px 10px rgba(0,0,0,0.15)'
        }}>
          {title}
        </div>
      )}
    </div>
  );
}
