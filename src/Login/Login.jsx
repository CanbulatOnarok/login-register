import axios from 'axios';
import React, { useState } from 'react';

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const getData = async () => {

    const response = await axios.get('http://localhost:3005/users');
    const users = response.data;

    const userFound = users.find(user => user.email === email && user.password === pass);

    if (userFound) {
      console.log('Giriş başarılı');

    } else {
      console.log('Kullanıcı bulunamadı veya şifre hatalı');
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(); // Kullanıcıyı kontrol etmek için verileri çek
    setEmail('');
    setPass('');
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='youremail@gmail.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='********'
          id='password'
          name='password'
        />
        <button className='btn'>Log In</button>
      </form>
      <button className='link-btn' onClick={() => onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
