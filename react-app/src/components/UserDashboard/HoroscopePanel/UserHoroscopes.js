
import React, { useEffect, useState } from 'react';
import {Redirect, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DailyHoroscope from './DailyHoroscope/DailyHoroscope';
import UserHoroscopePost from '../HoroscopePanel/UserHoroscopePost';
import { getAllHoroscopePosts } from '../../../store/horoscopePosts';
import '../UserDashboard.css'
const UserHoroscopes =({user}) =>{
    const {userId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const userPost =  useSelector(state => Object.values(state.horoscope_posts))
    .filter((post)=>post.user_id == userId)

    const [showDaily, setShowDaily] = useState(true)
    const [showPosts, setShowPosts] = useState(false)


    useEffect(()=>{
        dispatch(getAllHoroscopePosts())



    }, [dispatch])
    const toHoroscopeFeed = ()=>{
        <Redirect to='/horoscope_feed'/>
        history.push('/horoscope_feed')
    }
    const hideDaily = () =>{
        if(!showDaily){
            setShowDaily(true)
            setShowPosts(false)

        }else{

            setShowPosts(true)
            setShowDaily(false)
        }
    }
    const hidePosts = () =>{
        if(showPosts){
            setShowDaily(true)
            setShowPosts(false)

        }else{
            setShowDaily(false)
            setShowPosts(true)
        }
    }
let activeButton
    if(!showPosts){
        activeButton=(
            <button
                onClick={hidePosts}
                className="primary-button"
                >
                    Past Horoscopes
                </button>
        )
    }else{
        activeButton=(
            <button
                style={{textTransform:"none"}}
                onClick={hidePosts}
                className="secondary-button"
                >
                    Past Horoscopes
                </button>
        )
    }
    return(
        <div
        className="main-horoscope-cont"
        >

            <div
            className="main-horoscope-wrapper">
                <h1
                id="horoscope-header"
                >Horoscopes</h1>
                <div
                className="user-controls">
                <button className="primary-button splash-feed"onClick={toHoroscopeFeed}>← Horoscope Feed</button>
                <button
                onClick={hideDaily}
                className="primary-button"
                >
                    Daily Horoscope
                </button>
                {activeButton}

                </div>

                {showDaily&&<div
                className="daily-horoscope-cont">
                <DailyHoroscope
                className="univ-daily-horoscope-component"
                user={user} />
                </div>}

                {showPosts&&<div
                className="past-horoscope-cont">
                <h2
                className="past-horo-head"
                >Past Horoscope Posts</h2>
                {userPost&& userPost.map((post)=>
                <div className='univ-horoscope-post-wrapper'>
                <UserHoroscopePost post={post}/>
                </div>)}
                </div>}


            </div>
        </div>
    )

}
export default UserHoroscopes
