import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getUserHoroscopePosts } from '../../store/horoscopePosts';
import FriendsPanel from './FriendsPanel/FriendsPanel';


import UserDetail from './UserDetail';
const UserDashboard = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state?.session.user);
    const userPost =  useSelector(state => Object.values(state.horoscope_posts))

    useEffect(()=>{
        dispatch(getUserHoroscopePosts(user?.id))



    }, [dispatch])
    const toZodiacList = ()=>{
        <Redirect to='/zodiac_list'/>
        history.push('/zodiac_list')
    }
    const toHoroscopeFeed = ()=>{
        <Redirect to='/horoscope_feed'/>
        history.push('/horoscope_feed')
    }
    if(user){
        return(
            <>
            <div className="univ-user-deet-cont">
            <UserDetail user={user}/>
            </div>
            <div className="univ-user-friend-panel">
            <FriendsPanel user={user} className="univ-friend-panel-component"/>
            </div>
            <button
            onClick={toZodiacList}
            className="primary-button">
                Zodiac List

            </button>
            <button className="primary-button splash-feed"onClick={toHoroscopeFeed}>Horoscope Feed</button>

            </>
            )

    }else{
        history.push('/')
    }



}

export default UserDashboard
