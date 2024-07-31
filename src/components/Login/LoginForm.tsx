import { createField } from 'components/common/FormsControls/createField';
import { Form } from 'react-final-form';
import { Input } from '../common/FormsControls/FormControls.tsx';
import { required } from '../utils/validators/validators.ts';
import st from './Login.module.css';

type Props = {
  login: (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ) => void;
  errorMessage: string;
  captchaUrl: string | null;
};

export type FormDataType = {
  email: string | null;
  password: string | null;
  rememberMe: boolean;
  captcha: string | null;
};

export type FieldNameTypes = Extract<keyof FormDataType, string>;

// I didn't figure it out how to type Field component properly

const LoginForm = ({ login, errorMessage, captchaUrl }: Props) => {
  const onSubmit = ({
    email,
    password,
    rememberMe = false,
    captcha,
  }: FormDataType) => {
    login(email, password, rememberMe, captcha);
  };

  return (
    <Form<FormDataType>
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form
          className={st.loginForm}
          onSubmit={handleSubmit}
        >
          {createField(
            'email',
            'email',
            Input,
            'Email',
            required,
            { type: 'text' },
            'Email'
          )}
          {createField(
            'password',
            'password',
            Input,
            'Password',
            required,
            { type: 'text' },
            'Password'
          )}

          {errorMessage && (
            <div className={st.errorMessage}>{errorMessage}</div>
          )}

          {captchaUrl && (
            <img
              src={captchaUrl}
              alt=""
            />
          )}
          {captchaUrl &&
            createField(
              'captcha',
              '',
              Input,
              'Write here from the picture',
              required,
              { type: 'text' }
            )}

          <div className={st.checkbox__submit}>
            {createField(
              'rememberMe',
              'rememberMe',
              'input',
              '',
              undefined,
              { type: 'checkbox' },
              'Remember me'
            )}
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
};

export default LoginForm;
