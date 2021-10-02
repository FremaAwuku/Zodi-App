
import { useDispatch, useSelector} from 'react-redux';
import {useHistory,useParams } from 'react-router-dom';
import FriendsPanel from './FriendsPanel/FriendsPanel';
import UserHoroscopes from './HoroscopePanel/UserHoroscopes';
import UserDetail from './UserDetail';
import './UserDashboard.css'
import { useEffect } from 'react';
import { authenticate } from '../../store/session';
const UserDashboard = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state?.session.user);
    const {userId }= useParams()
useEffect(()=>{
    dispatch(authenticate())
},[])



    if (Number(userId) === Number(user.id)) {
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
