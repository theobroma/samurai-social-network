import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getUserId } from '../../@store/auth/selectors';

const MainApp: React.FC = () => {
  const userId = useSelector(getUserId);
  return (
    <Jumbotron fluid>
      <Container>
        <h1>SamuraiJS social network</h1>
        <p>React+typescript application.</p>
        {!userId ? (
          <p>
            <Button as={Link} to="/login" variant="primary">
              Login
            </Button>
          </p>
        ) : null}
      </Container>
    </Jumbotron>
  );
};

export default MainApp;
