'use client';
import Button from '@/components/common/Button';
import { container } from '@/styles/app.css';

const Page = () => {
  return (
    <div className={container}>
      <Button onClick={() => fetch('/api/auth', { method: 'POST' })}>확인</Button>
    </div>
  );
};

export default Page;
