import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookingMock() {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState('Anti-Wrinkle');
  const [selectedDate, setSelectedDate] = useState(0); // 0 to 4 (Mon to Fri)
  const [selectedTime, setSelectedTime] = useState('11:00');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  });

  const treatments = [
    'Anti-Wrinkle',
    'Lip Fillers',
    'Dermal Fillers',
    'Skin Boosters',
    'Microneedling',
    'General Consultation'
  ];

  // Generate next 5 business days
  const days = [
    { name: 'Mon', num: 1 },
    { name: 'Tue', num: 2 },
    { name: 'Wed', num: 3 },
    { name: 'Thu', num: 4 },
    { name: 'Fri', num: 5 }
  ];

  // Adjust numbers based on current date
  const getDaysData = () => {
    const today = new Date();
    const list = [];
    let added = 0;
    let current = new Date(today);

    while (added < 5) {
      current.setDate(current.getDate() + 1);
      // Skip Sunday (0)
      if (current.getDay() !== 0) {
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        list.push({
          name: dayNames[current.getDay()],
          num: current.getDate(),
          month: current.toLocaleString('default', { month: 'short' }),
          fullDate: new Date(current)
        });
        added++;
      }
    }
    return list;
  };

  const bookingDays = getDaysData();
  const times = ['09:30', '11:00', '13:30', '15:00', '16:30'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.consent) {
      alert('Please fill in all required fields and accept the consent checkbox.');
      return;
    }

    setLoading(true);

    // Simulate sending email and booking processing
    setTimeout(() => {
      setLoading(false);
      // Redirect to thank you page
      navigate('/thank-you');
    }, 1200);
  };

  return (
    <div className="booking-card">
      <form onSubmit={handleSubmit}>
        {/* Step 1: Select Treatment */}
        <div className="form-group">
          <label className="form-label">1. Select Treatment</label>
          <select 
            className="form-control" 
            value={selectedTreatment} 
            onChange={(e) => setSelectedTreatment(e.target.value)}
          >
            {treatments.map((t, idx) => (
              <option key={idx} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Step 2: Choose Date */}
        <div className="form-group">
          <label className="form-label">2. Choose Date</label>
          <div className="calendar-grid">
            {bookingDays.map((day, idx) => (
              <div 
                key={idx}
                className={`calendar-day ${selectedDate === idx ? 'selected' : ''}`}
                onClick={() => setSelectedDate(idx)}
              >
                <div className="calendar-day-name">{day.name}</div>
                <div className="calendar-day-num">{day.num}</div>
                <div style={{ fontSize: '9px', textTransform: 'uppercase', opacity: 0.8 }}>{day.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Choose Time */}
        <div className="form-group">
          <label className="form-label">3. Select Time</label>
          <div className="time-slots">
            {times.map((t, idx) => (
              <div 
                key={idx}
                className={`time-slot ${selectedTime === t ? 'selected' : ''}`}
                onClick={() => setSelectedTime(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Personal Information */}
        <div className="form-group">
          <label className="form-label">4. Your Information</label>
          <div className="form-row">
            <div>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <input 
              type="tel" 
              name="phone"
              className="form-control" 
              placeholder="Phone Number (for booking verification) *"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Step 5: Consent */}
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
              I agree to Kesho Aesthetics contacting me to confirm this appointment. I understand that consultations are complimentary and under no obligation.
            </span>
          </label>
        </div>

        {/* Submit */}
        <button 
          type="submit" 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '12px' }}
          disabled={loading}
        >
          {loading ? 'Securing Slot...' : 'Request Free Appointment'}
        </button>
      </form>
    </div>
  );
}
