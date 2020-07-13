import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

const MainApp: React.FC = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MainApp;
