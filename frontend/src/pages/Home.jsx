import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

function Home() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default Home;