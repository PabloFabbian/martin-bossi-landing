import React from 'react';

const GradientButton = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyles = `
    relative overflow-hidden group select-none
    text-white text-[0.775rem] rounded-full px-6 py-2
    transition-all duration-300 ease-in-out
    focus:outline-none focus-visible:ring-2
  `;

  const variants = {
    default: `
      font-semibold
      bg-gradient-to-r from-[#035EBB] to-[#002052]
      hover:scale-105 hover:shadow-lg hover:-translate-y-0.5
      focus-visible:ring-[#035EBB]/50

      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-[#002052] before:to-[#035EBB]
      before:opacity-0 before:transition-opacity before:duration-300
      group-hover:before:opacity-100
    `,

    navbar: `
      relative
      font-medium px-6 py-2 rounded-full
      border border-white/30
      text-white
      bg-gradient-to-r from-white/25 via-white/10 to-white/25
      overflow-hidden

      transition transform duration-300 ease-in-out

      hover:bg-gradient-to-r hover:from-white/50 hover:via-white/30 hover:to-white/50
      hover:scale-103 hover:shadow-md

      focus-visible:ring-[#035EBB]/50 focus-visible:ring-2 focus-visible:ring-offset-2

      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-white/30 before:via-white/15 before:to-white/30
      before:opacity-0 before:transition-opacity before:duration-700
      hover:before:opacity-40

      after:absolute after:top-0 after:left-[-40%] after:w-48 after:h-full
      after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent
      after:rotate-12 after:opacity-0 after:transition-transform after:duration-900
      hover:after:opacity-40 hover:after:left-[150%]
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GradientButton;