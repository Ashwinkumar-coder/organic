import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Catalog from './components/Catalog';
import Stats from './components/Stats';
import Origin from './components/Origin';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Marquee />
        <Catalog />
        <Stats />
        <Origin />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

