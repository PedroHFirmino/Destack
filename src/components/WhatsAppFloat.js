import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '../data/company';
import './whatsapp.css';

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
