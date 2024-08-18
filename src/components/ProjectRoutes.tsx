import { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../@types/navigation';
import '../App.css';
import LoginContainer from './login/LoginContainer.tsx';
import Music from './music/Music.tsx';
import News from './news/News.tsx';
import Settings from './settings/Settings.tsx';
import UsersContainer from './users/UsersContainer.tsx';
import { Preloader } from './common/preloader/Preloader.tsx';

const DialogsContainer = lazy(() => import('./dialogs/DialogsContainer.tsx'));
const ProfileContainer = lazy(() => import('./profile/ProfileContainer.tsx'));

export const ProjectRoutes = memo(() => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route
                    path={Navigation.Home}
                    element="Hello"
                />
                <Route
                    path={Navigation.Profile}
                    element={<ProfileContainer />}
                >
                    <Route
                        path=":userId"
                        element={<ProfileContainer />}
                    />
                </Route>
                <Route
                    path={`${Navigation.Dialogs}/*`}
                    element={<DialogsContainer />}
                />
                <Route
                    path={`${Navigation.Users}/*`}
                    element={<UsersContainer />}
                />
                <Route
                    path={`${Navigation.News}/*`}
                    element={<News />}
                />
                <Route
                    path={`${Navigation.Music}/*`}
                    element={<Music />}
                />
                <Route
                    path={`${Navigation.Settings}/*`}
                    element={<Settings />}
                />
                <Route
                    path={`${Navigation.Login}`}
                    element={<LoginContainer />}
                />
                <Route
                    path="*"
                    element={<div>404 NOT FOUND</div>}
                />
            </Routes>
        </Suspense>
    );
});
