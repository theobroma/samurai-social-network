import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IRoute, ROUTES, ROLE, ROLES } from '../@types';
import LoadingPage from '../@components/UI/LoadingPage';
import { NestedRoute } from './@common/NestedRoute/NestedRoute';
import { useAllowedRoutes } from '../@utils/useAllowedRoutes';
import { UserLayout, GuestLayout } from './@common/NestedRoute/Layouts';

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
    component: MainView,
    exact: true,
    layout: GuestLayout,
    path: ROUTES.ROOT,
  },
  {
    access: [ROLES.GUESTS],
    component: LoginView,
    exact: true,
    path: ROUTES.LOGIN,
    layout: GuestLayout,
  },
  {
    access: [ROLES.USERS],
    component: MusicView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.MUSIC,
  },
  {
    access: [ROLES.USERS],
    component: DialogsView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.DIALOGS,
  },
  {
    access: [ROLES.USERS],
    component: ProfileView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.PROFILE,
  },
  {
    access: [ROLES.USERS],
    component: SettingsView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.SETTINGS,
  },
  {
    access: [ROLES.USERS],
    component: UsersView,
    exact: true,
    layout: UserLayout,
    path: ROUTES.USERS,
  },
  {
    access: [ROLES.USERS],
    component: ChatView,
    exact: true,
    path: ROUTES.CHAT,
    layout: UserLayout,
  },
];

interface IAppProps {
  userRole: ROLE;
}

export const App: React.FC<IAppProps> = ({ userRole }) => {
  const preparedRoutes = useAllowedRoutes(APP_MAIN_ROUTES, userRole);
  // https://stackoverflow.com/a/37491381/3988363
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {preparedRoutes.map((route: IRoute) => (
          <NestedRoute key={route.path} {...route} />
        ))}
        {/* <Redirect to="/login" /> */}
        <Route path="/404" component={NotFoundPageView} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};
