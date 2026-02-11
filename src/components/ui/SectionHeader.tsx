import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  subtitle, 
  centered = true,
  className = '',
  light = false
}) => {
  return (
    <div className={`max-w-[650px] mb-12 ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <div>
        <span className="block text-[0.75rem] uppercase tracking-[0.3em] font-semibold text-[#6B7F5E] mb-3">
          {label}
        </span>
        <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-[#FAFAF7]' : 'text-[#5C4033]'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-[1.1rem] leading-relaxed ${light ? 'text-[#FAFAF7]/70' : 'text-[#6B6B6B]'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
