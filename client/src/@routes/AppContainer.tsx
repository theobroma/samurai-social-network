// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
import pMinDelay from 'p-min-delay';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoadingPage from '../@components/UI/LoadingPage';
import { IRoute, ROUTES } from '../@types';
import AuthenticatedRoute from './AuthenticatedRoute';
import { GuestLayout, UserLayout } from './Layouts';

const MIN_LAZY_DELAY = 300;

const MainView = lazy(() =>
  pMinDelay(import('../@views/MainView'), MIN_LAZY_DELAY),
);
const LoginView = lazy(() =>
  pMinDelay(import('../@views/LoginView'), MIN_LAZY_DELAY),
);
const MusicView = lazy(() =>
  pMinDelay(import('../@views/MusicView'), MIN_LAZY_DELAY),
);
const DialogsView = lazy(() =>
  pMinDelay(import('../@views/DialogsView'), MIN_LAZY_DELAY),
);
const ProfileView = lazy(() =>
  pMinDelay(import('../@views/ProfileView'), MIN_LAZY_DELAY),
);
const SettingsView = lazy(() =>
  pMinDelay(import('../@views/SettingsView'), MIN_LAZY_DELAY),
);
const UsersView = lazy(() =>
  pMinDelay(import('../@views/UsersView'), MIN_LAZY_DELAY),
);
const ChatView = lazy(() =>
  pMinDelay(import('../@views/ChatView'), MIN_LAZY_DELAY),
);
const NotFoundPageView = lazy(() =>
  pMinDelay(import('../@views/Page404View'), MIN_LAZY_DELAY),
);

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    comp: MainView,
    exact: true,
    layout: GuestLayout,
    onlyPublic: true,
    path: ROUTES.ROOT,
  },
  {
    comp: LoginView,
    exact: true,
    layout: GuestLayout,
    onlyPublic: true,
    path: ROUTES.LOGIN,
  },
  {
    comp: MusicView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.MUSIC,
  },
  {
    comp: DialogsView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.DIALOGS,
  },
  {
    comp: ProfileView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.PROFILE,
  },
  {
    comp: SettingsView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.SETTINGS,
  },
  {
    comp: UsersView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.USERS,
  },
  {
    comp: ChatView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.CHAT,
  },
];

export const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Switch>
          <Redirect from="/index.html" to="/" exact />
          {APP_MAIN_ROUTES.map((route: IRoute) => (
            <AuthenticatedRoute {...route}>
              <route.layout>
                <route.comp />
              </route.layout>
            </AuthenticatedRoute>
          ))}
          {/* 404 */}
          {/* https://stackoverflow.com/a/37491381/3988363 */}
          <Route
            path="/404"
            render={() => (
              <GuestLayout>
                <NotFoundPageView />
              </GuestLayout>
            )}
          />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
