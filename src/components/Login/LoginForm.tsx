import { createField } from 'components/common/formsControls/createField.tsx';
import { Form } from 'react-final-form';
import { Input } from '../common/formsControls/FormControls.tsx';
import { required } from '../utils/validators/validators.ts';
import st from './Login.module.css';
import { memo } from 'react';
import { GetStringKeys } from '../../@types/types.ts';

type Props = {
    login: (
        email: string | null,
        password: string | null,
        rememberMe: boolean,
        captcha: string | null,
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

export type FieldNameTypes = GetStringKeys<FormDataType>;

// I didn't figure it out how to type Field component properly

const LoginForm = memo(({ login, errorMessage, captchaUrl }: Props) => {
    const onSubmit = ({ email, password, rememberMe = false, captcha }: FormDataType) => {
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
                    {createField<FieldNameTypes>(
                        'email',
                        'email',
                        Input,
                        'Email',
                        required,
                        { type: 'text' },
                        'Email',
                    )}
                    {createField<FieldNameTypes>(
                        'password',
                        'password',
                        Input,
                        'Password',
                        required,
                        { type: 'text' },
                        'Password',
                    )}

                    {errorMessage && <div className={st.errorMessage}>{errorMessage}</div>}

                    {captchaUrl && (
                        <img
                            src={captchaUrl}
                            alt=""
                        />
                    )}
                    {captchaUrl &&
                        createField<FieldNameTypes>(
                            'captcha',
                            '',
                            Input,
                            'Write here from the picture',
                            required,
                            { type: 'text' },
                        )}

                    <div className={st.checkbox__submit}>
                        {createField<FieldNameTypes>(
                            'rememberMe',
                            'rememberMe',
                            'input',
                            undefined,
                            undefined,
                            { type: 'checkbox' },
                            'Remember me',
                        )}
                        <button>Login</button>
                    </div>
                </form>
            )}
        />
    );
});

export default LoginForm;
