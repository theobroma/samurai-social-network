import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { isAuthSelector } from '../../@store/auth/selectors';
import { useAppSelector } from '../../@store/configureStore';

const MainView = () => {
  const isAuth = useAppSelector(isAuthSelector);
  return (
    <Jumbotron fluid>
      <Container>
        <h1>SamuraiJS social network</h1>
        <p>React+typescript application.</p>
        {!isAuth ? (
          <p>
            <Button as={Link} to="/login" variant="primary">
              Login
            </Button>
          </p>
        ) : (
          'Welcome!'
        )}
      </Container>
    </Jumbotron>
  );
};

export default MainView;
