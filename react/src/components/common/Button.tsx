import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-DEFAULT hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isLoading || disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
