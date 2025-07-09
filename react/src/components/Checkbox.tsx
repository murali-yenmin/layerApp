import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        className={`h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-offset-0 focus:ring-2 ${className}`}
        {...props}
      />
      <label htmlFor={name} className="ml-2 text-gray-700 text-sm">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
