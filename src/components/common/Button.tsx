import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-heatz-green text-black hover:bg-opacity-80',
    secondary: 'bg-heatz-gray text-white hover:bg-heatz-light-gray',
    outline: 'bg-transparent border border-heatz-green text-heatz-green hover:bg-heatz-green hover:text-black',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;