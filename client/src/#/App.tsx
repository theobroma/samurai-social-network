import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IRoute, ROUTES } from '../@types';
import LoadingPage from '../@components/UI/LoadingPage';
import { UserLayout, GuestLayout } from './@common/PrivateRoute/Layouts';
import AuthenticatedRoute from './@common/PrivateRoute/AuthenticatedRoute';

const MIN_LAZY_DELAY = 1000;

const MainView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "MainView" */ './#/Main'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const LoginView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "LoginView" */ './#login'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const MusicView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "MusicView" */ './Music'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const DialogsView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "DialogsView" */ './Dialogs'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const ProfileView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "ProfileView" */ './Profile'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const SettingsView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "SettingsView" */ './Settings'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const UsersView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "UsersView" */ './Users'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const ChatView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "ChatView" */ '../@views/ChatView'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

const NotFoundPageView = lazy(() => {
  return Promise.all([
    import(/* webpackChunkName: "NotFoundPageView */ './@common/NotFoundPage'),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]).then(([moduleExports]) => moduleExports);
});

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

export const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {APP_MAIN_ROUTES.map((route: IRoute) => (
          <AuthenticatedRoute {...route}>
            <route.layout>
              <route.comp />
            </route.layout>
          </AuthenticatedRoute>
        ))}
        {/* https://stackoverflow.com/a/37491381/3988363 */}
        <Route path="/404" component={NotFoundPageView} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};
