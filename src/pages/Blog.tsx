
import React, { useEffect } from 'react';
import Footer from '../components/landing/Footer';
import TopMenu from '../components/layout/TopMenu';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111F54] text-white">
      <TopMenu />
      
      <main className="container mx-auto px-4 py-6 pt-24">
        <section className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow" style={{ color: '#C3FF44' }}>
            Blog Coming Soon
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto">
            We're working on some exciting content for our blog. Stay tuned for upcoming articles about energy efficiency, smart home technology, and sustainability.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
