import React from 'react';

export default function Marquee() {
  const items = [
    "Expert Care",
    "Refined Results",
    "Timeless Confidence",
    "Microneedling",
    "Anti-Wrinkle",
    "Dermal Fillers",
    "Skin Boosters",
    "Complimentary Consultation"
  ];

  // Double the array to make the infinite scroll smooth
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="marquee-text">
            {item} <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
