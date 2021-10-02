
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav
    className="univ-nav-bar">
      <ul
      className="univ-nav-bar"
      >
        <li
        className="univ-nav-bar"
        >
          <NavLink
          className="univ-nav-bar"
          to='/' exact={true} activeClassName='active'>
  
          </NavLink>
        </li>


        <li
        className="univ-nav-bar"
        id="logout-button"
        >
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
