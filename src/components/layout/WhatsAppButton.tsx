import React from 'react';
import { MessageCircle } from 'lucide-react';

// Easily configurable WhatsApp number & default message
const WHATSAPP_NUMBER = '923001234567'; // Silver Haus Official WhatsApp Number
const DEFAULT_MESSAGE = encodeURIComponent('Hello Silver Haus, I would like to inquire about your jewellery collections.');

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact Silver Haus on WhatsApp"
    >
      <span className="whatsapp-float__label">Inquire on WhatsApp</span>
      <div className="whatsapp-float__btn">
        <MessageCircle size={22} />
      </div>
    </a>
  );
};
