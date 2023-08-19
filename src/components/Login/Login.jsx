import React from 'react';
import st from './Login.module.css';
import LoginForm from './LoginForm';
import { Navigate } from 'react-router-dom';

const Login = ({ isAuth, login, errorMessage, captchaUrl }) => {
  if (isAuth) return <Navigate to={'/profile'} />;

  return (
    <div className={st.loginItem}>
      <div className={st.loginList}>  
        <h2>Authorization</h2>
        <LoginForm login={login} errorMessage={errorMessage} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};

export default Login;
