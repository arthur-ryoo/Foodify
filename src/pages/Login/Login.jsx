import React from 'react';
import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = props => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
