import React from 'react';

const InputField = ({
  id,
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

  const fieldId = id || name;

  const borderClass = hasError ? 'border-red-500' : 'border-slate-600';
  const focusBorderClass = hasError ? 'focus:border-red-400' : 'focus:border-blue-500';
  const focusRingClass = hasError ? 'focus:ring-red-500' : 'focus:ring-blue-500';

  const baseClasses = `w-full bg-transparent border ${borderClass} rounded-xl px-4 py-3 text-white placeholder-slate-400 ${focusBorderClass} focus:outline-none focus:ring-1 ${focusRingClass} transition-colors ${className}`;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <Component
        type={isTextarea ? undefined : type}
        id={fieldId}
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