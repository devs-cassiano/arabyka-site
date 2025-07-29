import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="logo-area">
          <img src="public/home-arabyka.png" alt="Arabyka Logo" className="logo" />
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre Nós</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/commodities">Commodities</Link>
          <Link to="/como-funciona">Como Funciona</Link>
          <Link to="/clientes">Clientes</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} Arabyka. Todos os direitos reservados.
      </footer>
    </>
  );
}
