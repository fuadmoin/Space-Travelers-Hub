import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RocketBooking from '../component/RocketBooking';

describe('RocketBooking', () => {
  const mockBookRocket = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a "Reserve Rocket" button by default', () => {
    render(<RocketBooking bookRocket={mockBookRocket} id="rocket-id" status={false} />);
    const reserveButton = screen.getByRole('button');
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton).toHaveTextContent('Reserve Rocket');
  });

  it('renders a "Cancel Reservation" button when status is true', () => {
    render(<RocketBooking bookRocket={mockBookRocket} id="rocket-id" status />);
    const cancelReservationButton = screen.getByRole('button');
    expect(cancelReservationButton).toBeInTheDocument();
    expect(cancelReservationButton).toHaveTextContent('Cancel Reservation');
  });

  it('calls the bookRocket function with the correct ID when clicked', () => {
    render(<RocketBooking bookRocket={mockBookRocket} id="rocket-id" status={false} />);
    const reserveButton = screen.getByRole('button');
    fireEvent.click(reserveButton);
    expect(mockBookRocket).toHaveBeenCalledTimes(1);
    expect(mockBookRocket).toHaveBeenCalledWith('rocket-id');
  });
});
