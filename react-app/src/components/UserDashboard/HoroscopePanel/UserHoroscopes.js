
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DailyHoroscope from './DailyHoroscope/DailyHoroscope';
import HoroscopePost from '../../HoroscopeFeed/HoroscopePost';
import { getUserHoroscopePosts } from '../../../store/horoscopePosts';
import '../UserDashboard.css'
const UserHoroscopes =({user}) =>{
    const dispatch = useDispatch()
    const userPost =  useSelector(state => Object.values(state.horoscope_posts))
    useEffect(()=>{
        dispatch(getUserHoroscopePosts(user?.id))



    }, [dispatch])

    return(
        <div>
            <h1>User Horoscope Panel</h1>
            <DailyHoroscope
            className="univ-daily-horoscope-component"
             user={user} />
            <h2>Past Horoscope Posts</h2>
            {userPost&& userPost.map((post)=>
            <div className='univ-horoscope-post-wrapper'>
            <HoroscopePost post={post}/>
            </div>)}
        </div>
    )

}
export default UserHoroscopes
