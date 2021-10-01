
import { useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';
import FriendsPanel from './FriendsPanel/FriendsPanel';
import UserHoroscopes from './HoroscopePanel/UserHoroscopes';
import UserDetail from './UserDetail';
import './UserDashboard.css'
const UserDashboard = () =>{


    const history = useHistory()
    const user = useSelector(state => state?.session.user);





    if(user){
        return(
            <>
            <div className="user-deet-cont">
            <UserDetail user={user}/>
            </div>
            <div className="univ-daily-horoscope-cont">

            <UserHoroscopes user={user}/>
            </div>
            <div className="univ-user-friend-panel">
            <FriendsPanel user={user} className="univ-friend-panel-component"/>
            </div>


            </>
            )

    }else{
        history.push('/')
    }



}

export default UserDashboard
