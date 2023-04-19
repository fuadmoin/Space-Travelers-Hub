import React from 'react';
import './home.css';
import PropTypes from 'prop-types';

const RocketBooking = ({ bookRocket, id, status }) => {
  const buttonStatus = {};
  if (status) {
    buttonStatus.backgroundColor = 'white';
    buttonStatus.color = 'grey';
    buttonStatus.width = '150px';
    buttonStatus.borderBottom = '1px solid black';
    buttonStatus.borderRight = '1px solid black';
    buttonStatus.borderLeft = '1px solid grey';
    buttonStatus.borderTop = '1px solid grey';
  }
  return (
    <button
      style={buttonStatus}
      className="btnReserve"
      type="button"
      onClick={
          () => bookRocket(id)
      }
    >
      {status ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  );
};

RocketBooking.propTypes = {
  bookRocket: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default RocketBooking;
