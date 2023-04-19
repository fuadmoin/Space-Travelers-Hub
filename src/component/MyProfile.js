import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import './home.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const filterdRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="myProfile">
      <div>
        <h1>My Missions</h1>
        <div className="reservedContainer">
          <span className="item">Telstar</span>
          <span className="item">Telstar</span>
          <span className="item">Telstar</span>
          <span className="item">Telstar</span>
        </div>
      </div>
      <div className="myRocket">
        <h1>My Rockets</h1>
        <div className="reservedContainer">
          {filterdRockets.map((rocket) => (
            <span className="item" key={rocket.id}>{rocket.name}</span>
          ))}
        </div>

      </div>

    </div>
  );
};

export default MyProfile;
