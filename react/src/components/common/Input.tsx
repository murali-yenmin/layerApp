import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  // Props for Controller
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  value,
  onChange,
  onBlur,
  name,
  className,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-1 block w-full px-3 py-2 border border-neutral-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${className || ''}`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
