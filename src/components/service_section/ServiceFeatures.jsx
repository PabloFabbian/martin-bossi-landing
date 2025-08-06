import React from 'react';

const ServiceFeatures = ({ features }) => {
  return (
    <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#001d3d]/60 to-[#001645]/40 p-4 rounded-xl border border-[#0353A4]/20 hover:border-[#0466C8]/50 shadow-sm hover:shadow-md transition-all duration-250"
        >
          <h3 className="text-white font-semibold text-sm mb-1 hover:cursor-default">{item.title}</h3>
          <p className="text-[#7D8597] text-xs hover:cursor-default">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;