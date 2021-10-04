import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllHoroscopePosts } from '../../store/horoscopePosts';
import HoroscopePost from './HoroscopePost';
import { useHistory } from 'react-router-dom';
import './HoroscopeFeed.css'
const HoroscopeFeed = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
   const posts =  useSelector(state => Object.values(state.horoscope_posts))
   const user = useSelector(state=>state.session.user)
    useEffect(()=>{
        dispatch(getAllHoroscopePosts())
    },[dispatch])

    const toUserDashBoard = () =>{
        history.push(`/user_dashboard/${user.id}`)

    }

    return(
        <>
       <h1>Zodi-Feed</h1>
       <button onClick={toUserDashBoard}className="primary-button">
       ✨ User Dashboard
       </button>
        <div className='horoscope-feed-container'>
        {posts && posts?.map((post)=>(
            <div className='horoscope-feed-wrapper' key={post.id}>
            <HoroscopePost post={post}/>
            </div>
        ))}
        </div>
        </>
    )

}

export default HoroscopeFeed
