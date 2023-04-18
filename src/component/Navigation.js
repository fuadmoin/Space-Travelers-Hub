import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/planetLogo.png';

const Links = [
  { path: '/', name: 'Home' },
  { path: '/myProfile', name: 'MyProfile' },
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
          <NavLink
            exact
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
