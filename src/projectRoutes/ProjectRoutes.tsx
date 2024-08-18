import { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from '../@types/navigation.ts';
import '../App.css';
import { LoginContainer } from '../pages/login/index.ts';
import { Music } from '../pages/music';
import { News } from '../pages/news/index.ts';
import { Settings } from '../pages/settings/index.ts';
import { UsersContainer } from '../pages/users/index.ts';
import { Preloader } from '../components/common/preloader/index.ts';

const DialogsContainer = lazy(() => import('../pages/dialogs/DialogsContainer.tsx'));
const ProfileContainer = lazy(() => import('../pages/profile/ProfileContainer.tsx'));

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
