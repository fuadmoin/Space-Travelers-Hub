import React from 'react';
import logo from '../img/planetLogo.png';

const Links = [
  { path: '/', name: 'Home' },
  { path: '/categories', name: 'Categories' },
];

const Navigation = () => (
  <div>
    <img
      src={logo}
      alt="logo"
      style={{
        width: '100px', height: '100px',
      }}
    />
    <ul>
      {Links.map((link) => (
        <li key={link.name}>
          <a href={link.path} key={link.name}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
