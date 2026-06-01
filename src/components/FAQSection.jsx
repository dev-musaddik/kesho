import React, { useState } from 'react';

export default function FAQSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`faq-item ${isActive ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle-icon"></span>
            </div>
            <div className={`faq-answer ${isActive ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
