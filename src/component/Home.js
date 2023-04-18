import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchRockets, bookRocket } from '../redux/rocket/rocketSlice';
import RocketBooking from './RocketBooking';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  const status = useSelector((state) => state.rocket);
  const handleRocketBooking = (id) => {
    dispatch(bookRocket(id));
  };
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div>
      {

      !status.loading && rockets.length ? (

        rockets.map((rocket) => (
          <div key={rocket.id} className="rocketContainer">
            <img className="rocketImage" src={rocket.flickr_images} alt="rocket" />
            <div className="detailContainer" key={rocket.rocket_name}>
              <h1>{rocket.rocket_name}</h1>
              <p>{rocket.description}</p>
              <RocketBooking
                bookRocket={handleRocketBooking}
                id={rocket.id}
                status={rocket.reserved}
              />
            </div>
          </div>
        ))) : null

    }

    </div>
  );
};

export default Home;
