import React, { useState, useEffect } from 'react';
import './Login.css';
import { Button , Input , Row , Col }from"antd" ;
import { Content, Header } from 'antd/es/layout/layout';

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

        <Header className='header'>Login</Header>

        <Content className='content-login'>
          
          <Row className='user'>
            <Row className='input-user'>
              <div>User Name</div>
              <Input placeholder="User Name"></Input>
            </Row>
          </Row>
          
          <Row className='pass'>
            <Row className='input-password'>
              <div>Password</div>
              <Input placeholder='Password'></Input>
            </Row>
          </Row>

          <Row className='button'>
            <Col style={{marginRight:'2vw'}}>
              <Button style={{backgroundColor:'white'}}>Sign Up</Button>
            </Col>

            <Col>
              <Button style={{backgroundColor:'white'}}>Sign In</Button>
            </Col>
          </Row>

          <Row style={{float:"right", marginRight:'2vw'}}>
            <a>Forget Password?</a>
          </Row>

        </Content>

      </div>
    </form>
  );
}

export default Login;