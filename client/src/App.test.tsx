import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('title', () => {
  // START OF COMPONENT SETUP
  const setup = () => {
    const { container } = render(<App />);

    return {
      h1: container.querySelector('h1'),
    };
  };
  // END OF COMPONENT SETUP
  it('render the title element', () => {
    const { h1 } = setup();
    expect(h1).toBeInTheDocument();
  });
});
