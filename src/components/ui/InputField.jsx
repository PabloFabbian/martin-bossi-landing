import React from 'react';

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  rows,
  className = "",
  hasError = false,
  ...props
}) => {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';

  const borderClass = hasError ? 'border-red-500' : 'border-slate-600';
  const focusBorderClass = hasError ? 'focus:border-red-400' : 'focus:border-blue-500';
  const focusRingClass = hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500';

  const baseClasses = `w-full bg-transparent border ${borderClass} rounded-xl px-4 py-3 text-white placeholder-slate-400 ${focusBorderClass} focus:outline-none focus:ring-1 ${focusRingClass} transition-colors ${className}`;

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
        {...props}
      />
    </div>
  );
};

export default InputField;