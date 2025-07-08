import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={value}
        name={name}
        type="radio"
        value={value}
        className={`form-radio h-5 w-5 text-blue-600 ${className}`}
        {...props}
      />
      <label htmlFor={value} className="ml-2 text-gray-700 text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
