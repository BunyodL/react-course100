import { LoginProps } from './LoginContainer';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import st from './Login.module.css';
import { LoginForm } from '@/components/login/loginForm';
import { Navigation } from '@/@types/navigation';

const Login: FC<LoginProps> = ({ isAuth, login, errorMessage, captchaUrl }) => {
    if (isAuth) return <Navigate to={`${Navigation.Profile}`} />;

    return (
        <div className={st.loginItem}>
            <div className={st.loginList}>
                <h2>Authorization</h2>
                <LoginForm
                    login={login}
                    errorMessage={errorMessage}
                    captchaUrl={captchaUrl}
                />
            </div>
        </div>
    );
};

export default Login;
