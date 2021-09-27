import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserHoroscopePosts } from '../../store/horoscopePosts';
import { updateProfilePic } from '../../store/users';

import UserDetail from './UserDetail';
const UserDashboard = () =>{
    const { userId } = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state?.session.user);
    const userPost =  useSelector(state => Object.values(state.horoscope_posts))

    useEffect(()=>{
        dispatch(getUserHoroscopePosts(user?.id))



    }, [dispatch])

    return(
    <>
    <div className="univ-user-deet-cont">
    <UserDetail user={user}/>
    </div>

    </>
    )

}

export default UserDashboard
