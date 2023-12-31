import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from '../common/FormsControls/Input';
import { required } from '../utils/validators/validators';
import st from './Login.module.css';

const LoginForm = ({ login, errorMessage, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe = false, captcha }) => {
    login(email, password, rememberMe, captcha);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={st.loginForm} onSubmit={handleSubmit}>
          <div className={st.email}>
            <label htmlFor='email'>Email:</label>
            <Field id='email' name='email' component={Input} type='text' validate={required} placeholder='Email' />
          </div>

          <div className={st.password}>
            <label htmlFor='password'>Password:</label>
            <Field id='password' name='password' component={Input} type='text' validate={required} placeholder='Password' />
          </div>

          {errorMessage && <div className={st.errorMessage}>{errorMessage}</div>}

          {captchaUrl && <img src={captchaUrl} alt='' />}
          {captchaUrl && (
            <Field
              id='captcha'
              name='captcha'
              component={Input}
              type='text'
              validate={required}
              placeholder='Write here from the picture'
            />
          )}

          <div className={st.checkbox__submit}>
            <div className={st.checkbox}>
              <Field name='rememberMe' component='input' type='checkbox' />
              <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
};

export default LoginForm;
