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
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Catalog />
        <Stats />
        <Origin />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
