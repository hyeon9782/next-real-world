import { button } from '@/styles/app.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
const Button = ({ children }: Props) => {
  return <button className={button}>{children}</button>;
};

export default Button;
