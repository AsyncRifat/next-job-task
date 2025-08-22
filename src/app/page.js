import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductHighlights from './components/ProductHighlights';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductHighlights />
    </div>
  );
};

export default page;
