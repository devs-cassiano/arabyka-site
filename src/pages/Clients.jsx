import React from 'react';
import './Clients.css';

export default function Clients() {
  return (
    <div className="clients-page">
      <h1>Clientes e Cases</h1>
      <p>Conheça nossos clientes e casos de sucesso.</p>
      <div className="clients-logos">
        <img src="/dossantos.png" alt="Dossantos" title="Dossantos" />
        <img src="/nucoffee.png" alt="Nucoffee" title="Nucoffee" />
        <img src="/veracruz.png" alt="Veracruz" title="Veracruz" />
        <img src="/minamihara.png" alt="Minamihara" title="Minamihara" />
      </div>
    </div>
  );
}
