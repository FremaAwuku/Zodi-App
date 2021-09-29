import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllHoroscopePosts } from '../../store/horoscopePosts';

import HoroscopePost from './HoroscopePost';
import { useHistory } from 'react-router-dom';
const HoroscopeFeed = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
   const posts =  useSelector(state => Object.values(state.horoscope_posts))
    useEffect(()=>{
        dispatch(getAllHoroscopePosts())
    },[dispatch])

    const toUserDashBoard = () =>{
        history.push('/user_dashboard')

    }

    return(
        <>
       <h1>Zodi-Feed</h1>
       <button onClick={toUserDashBoard}className="primary-button">
       ✨ Add Post
       </button>
        <div className='univ-horoscope-post-container'>
        {posts && posts?.map((post)=>(
            <div className='univ-horoscope-post-wrapper' key={post.id}>
            <HoroscopePost post={post}/>
            </div>
        ))}
        </div>
        </>
    )

}

export default HoroscopeFeed
