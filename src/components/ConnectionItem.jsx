import React from 'react';

const ConnectionItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-lg bg-gradient-to-br from-[#0D1224] to-[#0D1224]/50 hover:scale-105 transition-transform duration-300 hover:pointer-default">
      <div className="w-8 h-8 rounded-full bg-[white]/10 text-white">{icon}</div>
      <h3 className="text-white font-semibold text-lg leading-snug mb-1 select-none">{title}</h3>
      <p className="text-white/80 text-sm select-none">{description}</p>
    </div>
  );
};

export default ConnectionItem;