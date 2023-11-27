import React from 'react'

import { useState } from "react";

const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:",email,"pasword:",pass);
    setEmail('');
    setPass('');
    setName('');
  }

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit} >
        <label htmlFor="name" >Full name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='full Name' id='name' name='name' />
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='********' id='password' name='password' />
        <button className='btn'>Log In</button>
      </form>
      <button className='link-btn'  onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register