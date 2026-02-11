import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Services', 'Gallery', 'About', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] flex items-center
        ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''}
        bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E0D8D0]`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer group"
          onClick={() => onNavigate('Home')}
        >
          <h1 className="font-serif text-2xl font-bold text-[#5C4033] leading-none group-hover:text-[#7A5C4F] transition-colors">
            ARTISAN <span className="text-[#C4956A]">BUILDS</span>
          </h1>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#6B7F5E] mt-1 font-semibold">
            Trades & Landscapes
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className={`relative text-[0.9rem] uppercase tracking-[0.1em] font-medium transition-colors
                ${currentPage === link ? 'text-[#5C4033]' : 'text-[#3A3A3A] hover:text-[#C4956A]'}
              `}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#C4956A] transition-all duration-300
                ${currentPage === link ? 'w-full' : 'w-0 hover:w-full'}
              `} />
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#5C4033]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
          <div
            className="absolute top-[80px] left-0 right-0 bg-[#FAFAF7] border-b border-[#E0D8D0] shadow-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    onNavigate(link);
                    setMobileOpen(false);
                  }}
                  className={`text-left text-lg uppercase tracking-widest font-medium py-2 border-b border-gray-100
                    ${currentPage === link ? 'text-[#C4956A]' : 'text-[#3A3A3A]'}
                  `}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
      )}
    </header>
  );
};
