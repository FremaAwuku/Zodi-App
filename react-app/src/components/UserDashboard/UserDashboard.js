import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getUserHoroscopePosts } from '../../store/horoscopePosts';


import UserDetail from './UserDetail';
const UserDashboard = () =>{
    const { userId } = useParams();
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

    if(user){
        return(
            <>
            <div className="univ-user-deet-cont">
            <UserDetail user={user}/>
            </div>
            <button
            onClick={toZodiacList}
            className="primary-button">
                Zodiac List

            </button>
            </>
            )

    }else{
        history.push('/')
    }



}

export default UserDashboard
