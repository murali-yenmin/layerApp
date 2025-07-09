import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClasses = "inline-block border-none rounded font-medium uppercase no-underline cursor-pointer outline-none transition-shadow duration-200 ease-in-out shadow-md hover:shadow-lg active:shadow-xl";

  const variantClasses = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-teal-500 text-white",
    danger: "bg-red-700 text-white",
  };

  const sizeClasses = {
    small: "px-3 h-8 leading-8 text-sm",
    medium: "px-4 h-9 leading-9 text-base",
    large: "px-6 h-11 leading-11 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
