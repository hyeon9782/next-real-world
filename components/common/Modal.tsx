import { modalBackground, modalBlock } from '@/styles/app.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
const Modal = ({ children }: Props) => {
  return (
    <div className={modalBackground}>
      <div className={modalBlock}>{children}</div>
    </div>
  );
};

export default Modal;
