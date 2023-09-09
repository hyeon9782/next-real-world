'use client';
import { button } from '@/styles/app.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  onClick: () => void;
};
const Button = ({ children, onClick }: Props) => {
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
