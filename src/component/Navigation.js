import React from 'react';
// import { NavLink } from 'react-router-dom';
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
          {/* <NavLink key={link.name} to={link.path}>{link.name}</NavLink> */}
          <a href={link.path} key={link.name}>{link.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
