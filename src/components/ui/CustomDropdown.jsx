import React, { useRef } from 'react';
import ChevronIcon from './ChevronIcon';
import DropdownOption from './DropdownOption';

const CustomDropdown = ({ 
  name, 
  label, 
  placeholder, 
  options, 
  value,
  isOpen,
  onToggle,
  onSelect,
  setRef
}) => {
  const selectedOption = options.find(option => option.value === value);
  
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <div className="relative" ref={setRef}>
        <button
          type="button"
          onClick={onToggle}
          className="w-full bg-transparent border border-slate-600 rounded-xl px-4 py-3 text-left text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors hover:border-slate-500"
        >
          <span className={selectedOption ? 'text-white' : 'text-slate-400'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronIcon 
            isOpen={isOpen} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2" 
          />
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-400">
            {options.map((option) => (
              <DropdownOption
                key={option.value}
                option={option}
                onClick={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;