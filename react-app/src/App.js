import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SignUpForm from './components/auth/SignUpModal/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import SplashPanel from './components/SplashPanel/SplashPanel';
import { authenticate } from './store/session';
import { getAllSunSigns} from './store/sunSigns'
import { getAllCompatibilities} from './store/compatibilities'
import UserDashboard from './components/UserDashboard/UserDashboard';
import HoroscopeFeed from './components/HoroscopeFeed/HoroscopeFeed';
import LogoutButton from './components/auth/LogoutButton';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <BrowserRouter>
      <LogoutButton/>
      <Switch>
      <Route path='/' exact={true} >
        <SplashPanel/>
        </Route>
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/user_dashboard'>
          <UserDashboard/>
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/horoscope_feed' >
          <HoroscopeFeed/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
