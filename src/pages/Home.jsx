import React from 'react';
export default function Home() {
  return (
    <section>
      <h1>Blockchain na Agricultura</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2vw', marginBottom: '2em' }}>
        <img src="/cafeeiro.png" alt="Colheita de café" className="circle-img" />
        <img src="/consumidor.png" alt="Consumidor com café" className="circle-img" />
      </div>
      <p>Rastreabilidade, transparência e confiança para toda a cadeia de valor agrícola.</p>
    </section>
  );
}
