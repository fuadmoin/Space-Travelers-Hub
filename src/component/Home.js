import React from 'react';
import place from '../img/planetLogo.png';

const Home = () => {
  const arr = [
    {
      name: 'Falcon1',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: place,
    },
    {
      name: 'Falcon2',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: place,
    },
    {
      name: 'Falcon3',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009 Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: place,
    },
    {
      name: 'Falcon',
      description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      img: place,
    },
  ];
  return (
    <div>
      {arr.map((rocket) => (
        <div key={rocket.name} className="rocketContainer">
          <img className="rocketImage" src={rocket.img} alt="rocket" />
          <div className="detailContainer" key={rocket.name}>
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Home;
