import React from 'react';
import './Solutions.css';

export default function Solutions() {
  return (
    <div className="solutions-page">
      <h1>Soluções</h1>
      <ul className="solutions-list">
        <li><strong>Consultoria:</strong> Mapeamento de processos e identificação de oportunidades para blockchain.</li>
        <li><strong>Sugestão de soluções:</strong> Recomendação de ferramentas e integrações ideais.</li>
        <li><strong>Software personalizado:</strong> Desenvolvimento sob medida com blockchain.</li>
        <li><strong>Integração:</strong> Soluções conectadas aos sistemas já usados pela empresa.</li>
        <li><strong>Suporte contínuo:</strong> Acompanhamento e evolução das soluções implantadas.</li>
        <li className="solutions-future"><strong>Futuramente:</strong> tokenização de ativos agrícolas</li>
      </ul>
    </div>
  );
}
