import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Commodities from './pages/Commodities';
import HowItWorks from './pages/HowItWorks';
import Clients from './pages/Clients';

import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
