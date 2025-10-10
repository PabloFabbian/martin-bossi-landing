import React from 'react';

const DropdownOption = ({ option, onClick, isSelected = false }) => (
  <button
    type="button"
    role="option"
    aria-selected={isSelected}
    onClick={() => onClick(option.value)}
    className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors duration-150 border-b border-slate-700 last:border-b-0 focus:outline-none focus:bg-slate-700"
  >
    {option.label}
  </button>
);

export default DropdownOption;