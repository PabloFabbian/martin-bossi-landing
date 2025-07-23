import React from 'react';

const InputField = ({ 
  label, 
  name, 
  type = "text", 
  value, 
  onChange, 
  placeholder,
  rows,
  className = ""
}) => {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';
  
  const baseClasses = `w-full bg-transparent border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${className}`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <Component
        type={isTextarea ? undefined : type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={isTextarea ? rows : undefined}
        className={`${baseClasses} ${isTextarea ? 'resize-none' : ''}`}
      />
    </div>
  );
};

export default InputField;