import React from 'react';
import '../assets/styles/register.scss';
import RegisterContainer from '../components/RegisterContainer';
import FormRegister from '../components/FormRegister';

function Register() {
  return (
    <div className='register'>
      <RegisterContainer>
        <FormRegister />
      </RegisterContainer>
    </div>
  );
}

export default Register;
