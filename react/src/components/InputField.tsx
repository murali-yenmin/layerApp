import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  error,
  className = '',
  register,
  ...props
}) => {
  return (
    <div className="relative mb-4">
      <input
        id={name}
        {...register(name)}
        className={`w-full pt-4 pb-1 px-3 border-b border-gray-300 bg-transparent text-base text-gray-800 outline-none focus:border-purple-600 peer ${className}`}
        placeholder=" " // Required for the label animation
        {...props}
      />
      <label
        htmlFor={name}
        className="absolute top-4 left-3 text-base text-gray-600 pointer-events-none transition-all duration-200 ease-in-out peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
