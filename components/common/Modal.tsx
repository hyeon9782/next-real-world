import { modalBackground, modalBlock } from '@/styles/app.css';
import React from 'react';

const Modal = () => {
  return (
    <div className={modalBackground}>
      <div className={modalBlock}>
        Modal입니다. WSL 테스트를 진행합니다.
      </div>
    </div>
  );
};

export default Modal;
