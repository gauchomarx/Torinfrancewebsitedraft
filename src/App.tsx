import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CTABanner } from './components/ui/CTABanner';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

// Global Styles Injection for Fonts and resets
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

    :root {
      --font-serif: 'Playfair Display', serif;
      --font-sans: 'Source Sans 3', sans-serif;
    }

    body {
      font-family: var(--font-sans);
      background-color: #FAFAF7;
      color: #3A3A3A;
      overflow-x: hidden;
    }

    .font-serif {
      font-family: var(--font-serif);
    }
  `}</style>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Simple Router
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home onNavigate={setCurrentPage} />;
      case 'Services': return <Services onNavigate={setCurrentPage} />;
      case 'Gallery': return <Gallery />;
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Admin': return <Admin />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // CTA Banner is shown on all pages except Contact and Admin
  const showCTA = !['Contact', 'Admin'].includes(currentPage);
  const showFooter = currentPage !== 'Admin';
  const showNav = currentPage !== 'Admin';

  const getCTAText = () => {
    switch(currentPage) {
      case 'Home': return { title: "Ready to Start Your Project?", sub: "Let's turn your vision into reality. Quote is free." };
      case 'Services': return { title: "Got a Project in Mind?", sub: "We tackle everything from small repairs to big builds." };
      case 'Gallery': return { title: "Like What You See?", sub: "Every photo here is a real project for a real client." };
      case 'About': return { title: "Let's Build Something Together", sub: "Honest craftsmanship, straight from the source." };
      default: return { title: "Ready to Start?", sub: "" };
    }
  };

  const ctaData = getCTAText();

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalStyles />
      
      {showNav && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {showCTA && (
        <CTABanner 
          title={ctaData.title} 
          subtitle={ctaData.sub} 
          onClick={() => setCurrentPage('Contact')}
        />
      )}

      {showFooter && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}
