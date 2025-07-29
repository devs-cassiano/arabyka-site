
import React from 'react';
import './Commodities.css';

export default function Commodities() {
  return (
    <div className="commodities-page">
      <h1>Commodities</h1>
      <ul className="commodities-list">
        <li><strong>Café:</strong> Transparência do campo à xícara, garantindo origem e práticas sustentáveis.</li>
        <li><strong>Soja:</strong> Rastreio de toda a cadeia, combatendo fraudes e agregando valor ao produto.</li>
        <li><strong>Trigo:</strong> Controle de qualidade e procedência, facilitando exportação e confiança do consumidor.</li>
        <li><strong>Milho:</strong> Monitoramento de etapas logísticas, reduzindo perdas e otimizando processos.</li>
        <li><strong>Azeite de oliva:</strong> Autenticidade comprovada, evitando adulterações e protegendo a reputação do produtor.</li>
        <li><strong>Cacau:</strong> Garantia de origem ética, valorizando o produto e promovendo responsabilidade social.</li>
        <li><strong>Outras:</strong> Adaptamos a solução para diversas cadeias do agronegócio.</li>
      </ul>
    </div>
  );
}
