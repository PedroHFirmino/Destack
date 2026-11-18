import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada | Destack Dedetizadora';
  }, []);

  return (
    <main className="not-found">
      <div className="container">
        <h1>404</h1>
        <p>Não encontramos esta página.</p>
        <Link className="btn btn-red" to="/">Voltar para a home</Link>
      </div>
    </main>
  );
}
