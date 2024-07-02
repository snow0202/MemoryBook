import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import Style from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
}

// 共通ボタンコンポーネント
export const Button: FC<ButtonProps> = (props) => {
  const { children, variant = "default", ...rest } = props;

  return (
    <button
      className={`${Style.button} ${Style[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
};
