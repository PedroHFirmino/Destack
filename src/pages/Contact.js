import React, { useEffect, useState } from 'react';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { COMPANY, whatsappUrl } from '../data/company';
import './pages.css';

const OPTIONS = [
  'Desratização',
  'Desinsetização — aranhas',
  'Desinsetização — escorpiões',
  'Desinsetização — cupins',
  'Desinsetização — moscas',
  'Desentupimento',
  "Limpeza de caixa d'água",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: OPTIONS[0],
    message: '',
  });

  useEffect(() => {
    document.title = 'Contato | Destack Dedetizadora';
  }, []);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const text = [
      'Olá! Gostaria de um orçamento.',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      form.email ? `E-mail: ${form.email}` : null,
      `Serviço: ${form.service}`,
      `Mensagem: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Contato</p>
          <h1>Fale com a Destack</h1>
          <p>Peça um orçamento pelo WhatsApp. Atendemos {COMPANY.city}.</p>
        </div>
      </section>

      <section className="contact-block">
        <div className="container contact-layout">
          <div className="contact-details">
            <h2>Canais</h2>
            <a className="contact-card" href={`tel:${COMPANY.phoneTel}`}>
              <FaPhoneAlt />
              <span>
                <strong>Telefone e WhatsApp</strong>
                <span>{COMPANY.phone}</span>
              </span>
            </a>
            <a className="contact-card" href={whatsappUrl('Olá! Gostaria de falar com a Destack Dedetizadora.')} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <span>
                <strong>WhatsApp</strong>
                <span>Chamar agora</span>
              </span>
            </a>
            <a className="contact-card" href={COMPANY.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
              <span>
                <strong>Instagram</strong>
                <span>{COMPANY.instagramLabel}</span>
              </span>
            </a>
            <div className="contact-card">
              <FaMapMarkerAlt />
              <span>
                <strong>Atendimento</strong>
                <span>{COMPANY.city}</span>
              </span>
            </div>
          </div>

          <div className="contact-form">
            <h2>Solicite um orçamento</h2>
            <form onSubmit={submit}>
              <label>
                Nome
                <input name="name" value={form.name} onChange={update} required autoComplete="name" />
              </label>
              <label>
                Telefone
                <input name="phone" value={form.phone} onChange={update} required autoComplete="tel" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
              </label>
              <label>
                Serviço
                <select name="service" value={form.service} onChange={update}>
                  {OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Mensagem
                <textarea name="message" rows="5" value={form.message} onChange={update} required />
              </label>
              <button className="btn btn-red" type="submit">
                <FaWhatsapp />
                Enviar pelo WhatsApp
              </button>
              <p className="form-note">A mensagem abre no WhatsApp para você enviar direto à Destack.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2>Perguntas frequentes</h2>
          <div className="faq-grid">
            <article>
              <h3>Quais serviços vocês fazem?</h3>
              <p>
                Desratização, desinsetização de aranhas, escorpiões, cupins e moscas,
                desentupimento e limpeza de caixa d&apos;água.
              </p>
            </article>
            <article>
              <h3>Atendem fora de Campo Mourão?</h3>
              <p>Sim. O atendimento cobre Campo Mourão e região.</p>
            </article>
            <article>
              <h3>Como peço um orçamento?</h3>
              <p>Pelo botão de WhatsApp ou pelo formulário desta página, no número {COMPANY.phone}.</p>
            </article>
            <article>
              <h3>Os produtos são regulamentados?</h3>
              <p>
                Sim. A equipe usa produtos regulamentados, com foco na saúde dos clientes e no
                respeito ao meio ambiente.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
