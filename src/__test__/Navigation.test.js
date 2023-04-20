import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../component/Navigation';

describe('Navigation', () => {
  it('should render the Navigation component', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('MyProfile')).toBeInTheDocument();
  });
});
