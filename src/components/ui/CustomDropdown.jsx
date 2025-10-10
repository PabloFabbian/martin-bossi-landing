import React from 'react';
import ChevronIcon from './ChevronIcon';
import DropdownOption from './DropdownOption'; // Aunque no se use, se mantiene

const CustomDropdown = ({
  name,
  label,
  placeholder,
  options,
  value,
  isOpen,
  onToggle,
  onSelect,
  setRef,
  hasError = false,
  ...props
}) => {
  const selectedOption = options.find(option => option.value === value);

  const borderClass = hasError ? 'border-red-500' : 'border-slate-600';
  const focusBorderClass = hasError ? 'focus:border-red-400' : 'focus:border-blue-500';
  const focusRingClass = hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500';
  const hoverBorderClass = hasError ? 'hover:border-red-400' : 'hover:border-slate-500';

  return (
    <div>
      <label
        id={`${name}-label`}
        className="block text-sm font-medium text-slate-300 mb-2"
      >
        {label}
      </label>

      <div className="relative" ref={setRef}>
        <button
          type="button"
          id={name}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${name}-label ${name}`}
          onClick={onToggle}
          className={`w-full bg-transparent border ${borderClass} rounded-xl px-4 py-3 text-left text-white ${focusBorderClass} focus:outline-none focus:ring-1 ${focusRingClass} transition-colors ${hoverBorderClass}`}
          {...props}
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
          <div
            role="listbox"
            aria-activedescendant={selectedOption?.value}
            className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-400"
          >
            {options.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => onSelect(option.value)}
                className={`cursor-pointer px-4 py-2 text-white hover:bg-slate-700 ${option.value === value ? 'bg-slate-700' : ''
                  }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;