
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
          <img
          style={{maxHeight:100}}
    src="https://zodiappbucket.s3.us-east-2.amazonaws.com/supplemental/9240b7e0e53543c3b10f049bdb382597+(1).png"/>
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
