import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { GiFly, GiMite, GiPlunger, GiRat, GiScorpion, GiSpiderAlt, GiWaterTank } from 'react-icons/gi';
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE, SERVICES, whatsappUrl } from '../data/company';
import './home.css';

const ICONS = {
  desratizacao: GiRat,
  aranhas: GiSpiderAlt,
  escorpioes: GiScorpion,
  cupins: GiMite,
  moscas: GiFly,
  desentupimento: GiPlunger,
  'caixa-dagua': GiWaterTank,
};

const MAIN_SERVICES = [
  SERVICES.find((service) => service.id === 'desratizacao'),
  {
    id: 'desinsetizacao',
    title: 'Desinsetização (aranhas, escorpiões, cupins e moscas)',
  },
  SERVICES.find((service) => service.id === 'desentupimento'),
  SERVICES.find((service) => service.id === 'caixa-dagua'),
];

const MAIN_ICONS = {
  desratizacao: GiRat,
  desinsetizacao: GiSpiderAlt,
  desentupimento: GiPlunger,
  'caixa-dagua': GiWaterTank,
};

export default function Home() {
  useEffect(() => {
    document.title = 'Destack Dedetizadora | Controle de pragas em Campo Mourão';
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img className="hero-logo" src="/images/logo-branca.png" alt="Destack Dedetizadora" />
          <h1>Controle de pragas com técnica, segurança e resultado</h1>
          <p className="hero-lead">
            Atendimento em {COMPANY.city} para residências, condomínios e empresas.
            Desratização, desinsetização, desentupimento e limpeza de caixa d&apos;água.
          </p>
          <div className="hero-actions">
            <a className="btn btn-outline" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Solicite orçamento
            </a>
            <a className="btn btn-red" href="#servicos">
              Serviços
            </a>
          </div>
        </div>
      </section>

      <div className="promo-wrap">
        <div className="container">
          <div className="promo">
            <h2>Sua casa ou empresa livre de pragas!</h2>
            <a className="btn btn-outline" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Contate-nos agora
            </a>
          </div>
        </div>
      </div>

      <section className="intro">
        <div className="container intro-grid">
          <div className="photo-stage">
            <div className="photo-grid">
              <figure>
                <img src="/images/caixa-suja.jpg" alt="Caixa d'água antes da limpeza, com sujeira acumulada" />
                <figcaption>Antes</figcaption>
              </figure>
              <figure>
                <img src="/images/caixa-limpa.jpg" alt="Caixa d'água depois da limpeza, higienizada" />
                <figcaption>Depois</figcaption>
              </figure>
            </div>
          </div>

          <div className="intro-copy">
            <h2 className="section-title">Chega de conviver com pragas!</h2>
            <p>
              Mais do que controlar as pragas, a Destack leva segurança, higiene e
              tranquilidade para quem confia o imóvel à nossa equipe. O mesmo cuidado
              vale para o desentupimento e a limpeza da caixa d&apos;água.
            </p>
            <ul className="service-list">
              {MAIN_SERVICES.map((service) => {
                const Icon = MAIN_ICONS[service.id];
                const target = service.id === 'desinsetizacao' ? 'aranhas' : service.id;
                return (
                  <li key={service.id}>
                    <a href={`#${target}`}>
                      <Icon aria-hidden="true" />
                      <span>{service.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a className="btn btn-red" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Chame-nos agora
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="container">
          <div className="services-head">
            <h2>Serviços</h2>
            <p>
              Prevenção, técnica e produtos regulamentados para proteger sua casa ou
              empresa. A desinsetização cobre aranhas, escorpiões, cupins e moscas.
            </p>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.id];
              return (
                <a
                  className="service-card"
                  id={service.id}
                  key={service.id}
                  href={whatsappUrl(`Olá! Gostaria de um orçamento de ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon aria-hidden="true" />
                  {service.group ? <span>{service.group}</span> : null}
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <strong>Pedir orçamento</strong>
                </a>
              );
            })}
          </div>

          <div className="services-cta">
            <h2>Sua tranquilidade contra pragas está a um clique de distância!</h2>
            <a className="btn btn-red" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              Chame-nos agora
            </a>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container story-grid">
          <div className="story-copy">
            <h2 className="section-title">Uma história de compromisso</h2>
            <p>{COMPANY.about}</p>
            <div className="story-actions">
              <a className="btn btn-outline-dark" href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                Solicite orçamento
              </a>
              <Link className="btn btn-red" to="/about">
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="pillars">
            <article className="pillar">
              <h3>Equipe treinada</h3>
              <p>Profissionais preparados para um atendimento técnico, seguro e responsável.</p>
            </article>
            <article className="pillar">
              <h3>Produtos regulamentados</h3>
              <p>Uso de produtos regularizados, com cuidado com a saúde de quem vive e trabalha no local.</p>
            </article>
            <article className="pillar">
              <h3>{COMPANY.city}</h3>
              <p>Atendimento local, com respeito ao meio ambiente e ao patrimônio do cliente.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
