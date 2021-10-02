import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Redirect , useHistory} from 'react-router-dom';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';

import SplashPanel from './components/SplashPanel/SplashPanel';
import { authenticate } from './store/session';
import { getAllSunSigns} from './store/sunSigns'
import { getAllCompatibilities} from './store/compatibilities'
import UserDashboard from './components/UserDashboard/UserDashboard';
import HoroscopeFeed from './components/HoroscopeFeed/HoroscopeFeed';
import LogoutButton from './components/auth/LogoutButton';
import ZodiacList from './components/ZodiacList/ZodiacList';
import NavBar from './components/NavBar';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    (async() => {

      await dispatch(getAllSunSigns())
      await dispatch(getAllCompatibilities())
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  const toSplash =()=>{
    <Redirect to='/'/>
        history.push('/')

  }

  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path='/' exact={true} >
          <SplashPanel/>
        </Route>
        <ProtectedRoute path='/user_dashboard/:userId'>
          <UserDashboard/>
        </ProtectedRoute>
        <ProtectedRoute path='/horoscope_feed' >
          <HoroscopeFeed/>
        </ProtectedRoute>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
