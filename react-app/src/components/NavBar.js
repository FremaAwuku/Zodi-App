
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation ,useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';


const NavBar = () => {
  const location = useLocation()
  const history = useHistory()
  const user = useSelector(state => state?.session?.user)
    const toUserDashBoard = () =>{
      history.push(`/user_dashboard/${user.id}`)

  }
  

    if(location.pathname === '/horoscope_feed'){
      return (
        <nav
        className="univ-nav-bar">
          <ul
          className="univ-nav-bar"
          >

             <li>
            <button onClick={toUserDashBoard}className="primary-button">
       ✨ User Dashboard →
       </button>
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
    }else{
      return (
        <nav
        className="univ-nav-bar">
          <ul
          className="univ-nav-bar"
          >
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

}

export default NavBar;
