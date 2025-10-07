import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'large';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-block text-center';

  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-[#A62D37] text-white hover:bg-[#8a2530] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#035AA6] text-white hover:bg-[#024a8a] shadow-lg hover:shadow-xl',
    tertiary: 'bg-white text-[#A62D37] border-2 border-[#A62D37] hover:bg-[#A62D37] hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
