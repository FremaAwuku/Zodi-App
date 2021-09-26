import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllHoroscopePosts } from '../../store/horoscopePosts';

import HoroscopePost from './HoroscopePost';
const HoroscopeFeed = () =>{

    const dispatch = useDispatch()
   const posts =  useSelector(state => Object.values(state.horoscope_posts))
    useEffect(()=>{
        dispatch(getAllHoroscopePosts())
    },[dispatch])

    return(
        <>
       <h1>Zodi-Feed</h1>
        <div className='univ-horoscope-post-container'>
        {posts && posts?.map((post)=>(
            <div className='univ-horoscope-post-wrapper'>
            <HoroscopePost post={post}/>
            </div>
        ))}
        </div>
        </>
    )

}

export default HoroscopeFeed
