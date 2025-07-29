import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contato</h1>
      <div className="contact-info">
        <strong>GEORGE HIRAWA | CEO ARABYKA</strong><br />
        contato@arabyka.com.br<br />
        telefone: +55 43 99102-1288
      </div>
      <img src="/george.png" alt="George Hirawa" className="contact-img" />
    </div>
  );
}
