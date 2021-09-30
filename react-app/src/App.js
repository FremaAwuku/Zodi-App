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
    <Redirect to=''/>
        history.push('')

  }

  return (
    <BrowserRouter>
    <img
    src="https://zodiappbucket.s3.us-east-2.amazonaws.com/supplemental/9240b7e0e53543c3b10f049bdb382597+(1).png"/>
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
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/zodiac_list' exact={true} >
          <ZodiacList/>
        </ProtectedRoute>
        <Route path='/horoscope_feed' >
          <HoroscopeFeed/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
