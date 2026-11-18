import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './header.css';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [servicesInView, setServicesInView] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setServicesInView(false);
      return undefined;
    }

    const section = document.getElementById('servicos');
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setServicesInView(entry.isIntersecting),
      { rootMargin: '-30% 0px -40% 0px', threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [location.pathname]);

  function goToServices(event) {
    event.preventDefault();
    setOpen(false);
    if (location.pathname === '/' && location.hash === '#servicos') {
      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate('/#servicos');
  }

  const onHome = location.pathname === '/';

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <img src="/images/logo-fundo-preto.png" alt="Destack Dedetizadora" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <nav className={open ? 'nav open' : 'nav'} aria-label="Principal">
          <Link className={onHome && !servicesInView ? 'active' : ''} to="/">
            Home
          </Link>
          <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">
            Sobre nós
          </Link>
          <a
            className={onHome && servicesInView ? 'active' : ''}
            href="/#servicos"
            onClick={goToServices}
          >
            Serviços
          </a>
          <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
