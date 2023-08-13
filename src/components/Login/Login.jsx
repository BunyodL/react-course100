import React from 'react';
import st from './Login.module.css';
import LoginForm from './LoginForm';
import { Navigate } from 'react-router-dom';

const Login = props => {
  if (props.isAuth) return <Navigate to={'/profile'} />;

  return (
    <div className={st.loginItem}>
      <div className={st.loginList}>
        <h2>Authorization</h2>
        <LoginForm login={props.login} errorMessage={props.errorMessage} />
      </div>
    </div>
  );
};

export default Login;
