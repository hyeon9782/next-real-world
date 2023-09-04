import { modalBackground, modalBlock } from '@/styles/app.css';
import React from 'react';

const Modal = () => {
  return (
    <div className={modalBackground}>
      <div className={modalBlock}>Modal</div>
    </div>
  );
};

export default Modal;
