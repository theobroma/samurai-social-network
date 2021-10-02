import { act, render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '.';

describe('Layout/Footer', () => {
  it('should have github link', () => {
    act(() => {
      render(<Footer />);
    });

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeDefined();
    const regex = /(?=.*?\bgithub\b)^.*$/;
    expect(githubLink.getAttribute('href')).toMatch(regex);
  });

  it('should have linkedin link', () => {
    act(() => {
      render(<Footer />);
    });

    const githubLink = screen.getByRole('link', { name: /linkedin/i });
    expect(githubLink).toBeDefined();
    const regex = /(?=.*?\blinkedin\b)^.*$/;
    expect(githubLink.getAttribute('href')).toMatch(regex);
  });
});
