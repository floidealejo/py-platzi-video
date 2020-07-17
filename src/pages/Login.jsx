import React from 'react';
import Form from '../components/Form';
import LoginContainer from '../components/LoginContainer';
import LoginMedia from '../components/LoginMedia';

export default function Login() {
  return (
    <div className='login'>
      <LoginContainer>
        <Form />
        <LoginMedia />
      </LoginContainer>
    </div>
  );
}
