import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2C2C2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">ARTISAN BUILDS</h2>
            <p className="text-white/60 leading-relaxed max-w-sm mb-6">
              Crafting premium outdoor spaces and home renovations with an artistic touch. 
              Grounded in quality, inspired by nature.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C4956A] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C4956A] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onNavigate(link)}
                    className="text-white/60 hover:text-[#C4956A] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Landscaping', 'Decks & Pergolas', 'Renovations', 'Maintenance'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate('Services')}
                    className="text-white/60 hover:text-[#C4956A] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2026 Artisan Builds. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Care</p>
          <button onClick={() => onNavigate('Admin')} className="opacity-0 hover:opacity-100 transition-opacity ml-4">Admin</button>
        </div>
      </div>
    </footer>
  );
};
