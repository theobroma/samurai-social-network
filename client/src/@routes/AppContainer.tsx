// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay
import React, { lazy, Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingPage from '../@components/UI/LoadingPage';

import { GuestLayout, UserLayout } from './Layouts';
import RequireAuth from './RequireAuth';

const MIN_LAZY_DELAY = 300;

// Public
const MainView = lazy(() =>
  pMinDelay(import('../@views/MainView'), MIN_LAZY_DELAY),
);
const LoginView = lazy(() =>
  pMinDelay(import('../@views/LoginView'), MIN_LAZY_DELAY),
);
// Protected
const ProfileView = lazy(() =>
  pMinDelay(import('../@views/ProfileView'), MIN_LAZY_DELAY),
);
const UsersView = lazy(() =>
  pMinDelay(import('../@views/UsersView'), MIN_LAZY_DELAY),
);
const UsersRTKQView = lazy(() =>
  pMinDelay(import('../@views/UsersRTKQView'), MIN_LAZY_DELAY),
);
const ChatView = lazy(() =>
  pMinDelay(import('../@views/ChatView'), MIN_LAZY_DELAY),
);
const MusicView = lazy(() =>
  pMinDelay(import('../@views/MusicView'), MIN_LAZY_DELAY),
);
const DialogsView = lazy(() =>
  pMinDelay(import('../@views/DialogsView'), MIN_LAZY_DELAY),
);
const SettingsView = lazy(() =>
  pMinDelay(import('../@views/SettingsView'), MIN_LAZY_DELAY),
);
// Not found page
const Page404View = lazy(() =>
  pMinDelay(import('../@views/Page404View'), MIN_LAZY_DELAY),
);

export const AppContainer = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            {/* index means default */}
            <Route index element={<MainView />} />
            <Route path="login" element={<LoginView />} />
          </Route>
          <Route path="/" element={<UserLayout />}>
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <ProfileView />
                </RequireAuth>
              }
            />
            <Route
              path="users"
              element={
                <RequireAuth>
                  <UsersView />
                </RequireAuth>
              }
            />
            <Route
              path="users-rtkq"
              element={
                <RequireAuth>
                  <UsersRTKQView />
                </RequireAuth>
              }
            />
            <Route
              path="chat"
              element={
                <RequireAuth>
                  <ChatView />
                </RequireAuth>
              }
            />
            {/* Empty pages */}
            <Route
              path="music"
              element={
                <RequireAuth>
                  <MusicView />
                </RequireAuth>
              }
            />
            <Route
              path="dialogs"
              element={
                <RequireAuth>
                  <DialogsView />
                </RequireAuth>
              }
            />
            <Route
              path="settings"
              element={
                <RequireAuth>
                  <SettingsView />
                </RequireAuth>
              }
            />
          </Route>
          {/* Not found page */}
          <Route path="*" element={<GuestLayout />}>
            <Route path="*" element={<Page404View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
