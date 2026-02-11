import React from 'react';

// Colors (mapped to Tailwind classes in logic, but explicit hexes for reference)
// Primary: #5C4033, Secondary: #6B7F5E, Accent: #C4956A
// Fonts: Playfair Display (serif), Source Sans 3 (sans-serif)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center uppercase tracking-[0.15em] text-[0.85rem] font-semibold py-[0.85rem] px-8 rounded-[3px] border-2 transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-[#C4956A] border-[#C4956A] text-[#FAFAF7] hover:bg-[#D4AD88] hover:border-[#D4AD88] hover:-translate-y-[2px] hover:shadow-[0_4px_14px_rgba(196,149,106,0.4)]",
    secondary: "bg-[#6B7F5E] border-[#6B7F5E] text-[#FAFAF7] hover:bg-[#8FA47E] hover:border-[#8FA47E]",
    outline: "bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};
