import React, { useCallback, useEffect } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { IRoute } from '../../../@types';
import NotFoundPage from '../NotFoundPage';
import { getUserId } from '../../../@store/auth/selectors';
import { startAuthenticationProcess } from '../../../@store/auth/sagas';
import Sidebar from '../../../@components/Sidebar/Sidebar';
import Header from '../../../@components/Header/Header';

interface INestedRoute {
  location?: any;
}

interface ILayout {
  // All other props
  [x: string]: any;
}
export const Layout: React.FC<ILayout> = ({ children, ...rest }) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>
          <Col xs={12} md={8}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const NestedRoute = ({
  component: RouteComponent,
  exact,
  path,
  redirect,
  routes,
  location,
  ...rest
}: IRoute & INestedRoute) => {
  const dispatch = useDispatch();

  const userId = useSelector(getUserId);

  useEffect(() => {
    dispatch(startAuthenticationProcess());
  }, [dispatch, userId]);

  const renderRoute = useCallback(
    (props: RouteComponentProps<any>) => {
      if (!RouteComponent) {
        return <NotFoundPage />;
      }

      return (
        <RouteComponent exact={exact} path={path} routes={routes} {...props} />
      );
    },
    [RouteComponent, exact, path, routes],
  );

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout>
      <Route
        exact={exact}
        path={path}
        render={renderRoute}
        location={location}
      />
    </Layout>
  );
};
