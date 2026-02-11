import React from 'react';
import { Button } from './Button';

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onClick?: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ 
  title, 
  subtitle, 
  buttonText = "Get a Free Quote",
  onClick 
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5C4033] via-[#3A2920] to-[#2C3E28]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#FAFAF7] font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[#FAFAF7]/80 max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
          <Button variant="primary" onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
