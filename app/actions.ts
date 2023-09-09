'use server';

import { cookies } from 'next/headers';

export async function create() {
  console.log('action');

  //   cookies().set('name', 'lee');
  //   // or
  //   cookies().set('name', 'hyeon', { secure: true });
  // or
  cookies().set({
    name: 'jeong',
    value: 'lee',
    httpOnly: true,
    path: '/',
  });
}
