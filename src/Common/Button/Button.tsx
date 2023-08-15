import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Style from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'default', ...props }) => {
  return (
    <button className={`${Style.button} ${Style[variant]}`} {...props}>
      {children}
    </button>
  );
};
