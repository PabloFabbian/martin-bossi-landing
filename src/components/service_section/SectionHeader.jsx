import React from 'react';

const SectionHeader = ({ label, title, subtitle }) => (
  <div className="fade-in-up text-center mb-10">
    <p className="text-[#0468C8] text-xs uppercase mb-3 tracking-wider">{label}</p>
    <h2 className="text-2xl md:text-3xl text-white font-medium mb-2">
      {title}
    </h2>
    <p className="text-[#7D8597] max-w-xl mx-auto">{subtitle}</p>
  </div>
);

export default SectionHeader;