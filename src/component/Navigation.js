import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/planetLogo.png';
import './home.css';

const Links = [
  { path: '/', name: 'Rockets' },
  { path: '/mission', name: 'Missions' },
  { path: '/myProfile', name: 'MyProfile' },
];

const Navigation = () => {
  const rightBorder = {
    borderRight: '1px solid black',
    height: '22px',
    paddingRight: '15px',
  };
  return (
    <nav className="navBar">
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
      <h1>Space Travelers&apos; Hub</h1>
      <ul className="navLinks">
        {Links.map((link) => (
          <li key={link.name}>
            <NavLink
              exact
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
                ...(link.name === 'Missions' ? rightBorder : {}),
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
