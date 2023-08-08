import React from 'react';
import { Form, Field } from 'react-final-form';
import st from './Login.module.css';

const MainLoginForm = props => {
  return (
    <form className={st.loginForm} onSubmit={props.handleSubmit}>
      <div className={st.email}>
        <label htmlFor='email'>Email:</label>
        <Field id='email' name='email' component='input' type='text' placeholder='Email' />
      </div>
      <div className={st.password}>
        <label htmlFor='password'>Password:</label>
        <Field id='password' name='password' component='input' type='text' placeholder='Password' />
      </div>
      <div className={st.checkbox__submit}>
        <div className={st.checkbox}>
          <Field name='rememberMe' component='input' type='checkbox' />
          <label htmlFor='rememberMe'>Remember me</label>
        </div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

const LoginForm = () => {
  const onSubmit = formdata => {
    console.log(formdata);
  };
  return <Form onSubmit={onSubmit} render={({ handleSubmit }) => <MainLoginForm handleSubmit={handleSubmit} />} />;
};

const Login = () => {
  return (
    <div className={st.loginItem}>
      <div className={st.loginList}>
        <h2>Authorization</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
