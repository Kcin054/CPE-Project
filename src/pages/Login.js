import React, { useState, useEffect } from 'react';
import './Login.css';
import { Button , Input }from"antd" ;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const form = document.getElementById('loginForm'); 

    if (form) { // Check if the form element exists
      form.addEventListener('submit', handleSubmit); 
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit); 
      }
    };
  }, []); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... your login logic ...
  };

  return (
    <form className='form-login' id="loginForm"> 
      <div className='container'>
        <p>Login</p>
        <Input placeholder="User Name"></Input>
        <Input placeholder='Password'></Input>
        <h>--------------------------------------</h>
        <Button style={{backgroundColor:'green'}}>Sign in</Button>
        <Button style={{backgroundColor:'blue'}}>Sign up</Button>
    </div>
    </form>
  );
}

export default Login;