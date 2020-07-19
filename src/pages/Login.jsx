import React from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';
import LoginContainer from '../components/LoginContainer';
import LoginMedia from '../components/LoginMedia';

export default function Login() {
  return (
    <div className='login'>
      <Layout>
        <LoginContainer>
          <Form />
          <LoginMedia />
        </LoginContainer>
      </Layout>
    </div>
  );
}
