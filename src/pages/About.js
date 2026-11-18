import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from '../data/company';
import './pages.css';

export default function About() {
  useEffect(() => {
    document.title = 'Sobre nós | Destack Dedetizadora';
  }, []);

  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Sobre nós</p>
          <h1>{COMPANY.name}</h1>
          <p>Controle de pragas profissional, seguro e responsável em {COMPANY.city}.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-layout">
          <div>
            <h2>Nossa história</h2>
            <p>{COMPANY.about}</p>
            <p>
              O trabalho cobre desratização, desinsetização de aranhas, escorpiões, cupins
              e moscas, além de desentupimento e limpeza de caixa d&apos;água. Cada
              atendimento busca proteger a saúde de quem usa o espaço e cuidar do patrimônio.
            </p>
            <p className="about-actions">
              <a className="btn btn-red" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                Solicite orçamento
              </a>
            </p>
          </div>
          <div className="values">
            <article className="value">
              <h3>Profissionalismo</h3>
              <p>Serviço técnico, com equipe altamente treinada e atendimento responsável.</p>
            </article>
            <article className="value">
              <h3>Segurança</h3>
              <p>Produtos regulamentados e procedimentos pensados para a saúde dos clientes.</p>
            </article>
            <article className="value">
              <h3>Meio ambiente</h3>
              <p>Compromisso com o controle das pragas e com o respeito ao ambiente ao redor.</p>
            </article>
            <article className="value">
              <h3>Onde atuamos</h3>
              <p>{COMPANY.city}.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
