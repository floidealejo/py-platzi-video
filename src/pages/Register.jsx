import React from 'react';
import '../assets/styles/register.scss';
import RegisterContainer from '../components/RegisterContainer';
import FormRegister from '../components/FormRegister';
import Layout from '../components/Layout';

function Register() {
  return (
    <Layout>
      <div className='register'>
        <RegisterContainer>
          <FormRegister />
        </RegisterContainer>
      </div>
    </Layout>
  );
}

export default Register;
