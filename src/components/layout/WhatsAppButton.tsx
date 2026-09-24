import React from 'react';
import { MessageCircle } from 'lucide-react';

// AZ JEWELRY Official WhatsApp Number & Message
const WHATSAPP_NUMBER = '923001234567';
const DEFAULT_MESSAGE = encodeURIComponent('Hello AZ JEWELRY, I would like to inquire about your lab-grown diamond collection.');

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact AZ JEWELRY on WhatsApp"
    >
      <span className="whatsapp-float__label">Inquire on WhatsApp</span>
      <div className="whatsapp-float__btn">
        <MessageCircle size={22} />
      </div>
    </a>
  );
};
