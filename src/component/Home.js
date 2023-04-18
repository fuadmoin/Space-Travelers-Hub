import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchRockets } from '../redux/rocket/rocketSlice';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);
  const status = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(fetchRockets());
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
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        ))) : null

    }

    </div>
  );
};

export default Home;
