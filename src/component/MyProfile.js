import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const filterdRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>{filterdRockets.length}</div>
  );
};

export default MyProfile;
