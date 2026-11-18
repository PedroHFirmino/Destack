import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '../data/company';
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <img className="footer-logo" src="/images/logo-fundo-preto.png" alt="" />
          <h2>Contato</h2>
          <div className="footer-contact">
            <a href={`tel:${COMPANY.phoneTel}`}>
              <FaPhoneAlt />
              {COMPANY.phone}
            </a>
            <a href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
            <a href={COMPANY.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
              {COMPANY.instagramLabel}
            </a>
            <span>
              <FaMapMarkerAlt />
              {COMPANY.city}
            </span>
          </div>
        </section>

        <section>
          <h2>Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre nós</Link></li>
            <li><Link to="/#servicos">Serviços</Link></li>
            <li><Link to="/contact">Fale conosco</Link></li>
          </ul>
        </section>

        <section>
          <h2>Nosso objetivo</h2>
          <p>
            Mais do que controlar as pragas, nossa missão é levar segurança, higiene e
            tranquilidade. Atuamos com equipe treinada, produtos regulamentados e respeito
            ao meio ambiente em {COMPANY.city}.
          </p>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
