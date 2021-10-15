import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllHoroscopePosts } from '../../store/horoscopePosts';
import HoroscopePost from './HoroscopePost';
import { useHistory } from 'react-router-dom';
import './HoroscopeFeed.css'
const HoroscopeFeed = () =>{

    const dispatch = useDispatch()
    const history = useHistory()
   const posts =  useSelector(state => Object.values(state.horoscope_posts)).reverse()
   const user = useSelector(state=>state.session.user)
    useEffect(()=>{
        dispatch(getAllHoroscopePosts())
    },[dispatch])


    return(
        <>
        <div className="feed-actions">
       <h1
       id="zodi-feed-header"
       >Zodi-Feed</h1>

       </div>
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
