import React from 'react';

const LoginPage = () => {
  const registerUser = async (formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form action={registerUser}>
        <input type="email" name="email" />
        <input type="password" name="password" />
      </form>
    </div>
  );
};

export default LoginPage;
