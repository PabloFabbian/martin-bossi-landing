import React from 'react';

const ChevronIcon = ({ isOpen, className = "" }) => (
  <svg 
    className={`w-5 h-5 text-slate-400 pointer-events-none transition-all duration-300 ease-in-out ${
      isOpen ? '-rotate-180' : 'rotate-0'
    } ${className}`}
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default ChevronIcon;