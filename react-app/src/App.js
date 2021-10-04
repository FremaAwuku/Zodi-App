import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import ProtectedRoute from './components/auth/ProtectedRoute';


import SplashPanel from './components/SplashPanel/SplashPanel';
import { authenticate } from './store/session';
import { getAllSunSigns} from './store/sunSigns'
import { getAllCompatibilities} from './store/compatibilities'
import UserDashboard from './components/UserDashboard/UserDashboard';
import HoroscopeFeed from './components/HoroscopeFeed/HoroscopeFeed';


import NavBar from './components/NavBar';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(state=>state.session.user)

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

  let showNav
  if(user){
    showNav=(
      <NavBar/>
    )
  }else{
    showNav=(
      <></>
    )
  }

  return (
    <BrowserRouter>
      {showNav}
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
