import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllHoroscopePosts } from '../../store/horoscopePosts';
import { getAllUsers } from '../../store/users';
import { getUserFriends } from '../../store/friends';
import { sendFriendRequests } from "../../store/requests"
const HoroscopePost = ({post}) =>{

    const dispatch = useDispatch()
    const userFriends = useSelector(state => Object.values(state.friends))
    const users = useSelector(state => state.users)
    const signs = useSelector(state =>state.sunSigns)
    const user = useSelector(state => state.session.user);

    const userId = user?.id
    let postUser = users[post?.user_id]
    // console.log(user, "<<<<<<<<<<<USER")
    // console.log(postUser,'<<<<<<<<<POST_USER')
    // console.log(userId, "<<<<<<<<<<<USER ID")
    // console.log(userFriends, "<<<<<<<<<<<USER FRIEND LIS")
    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getUserFriends(userId))
    },[dispatch])

    let signEmoji

    if(postUser?.sun_sign_id === 1){
        signEmoji=(
            <h3>♈</h3>
        )
    }else if(postUser?.sun_sign_id === 2){
        signEmoji=(
            <h3>♉</h3>
        )
    }else if(postUser?.sun_sign_id === 3){
        signEmoji=(
            <h3>♊</h3>
        )
    }else if(postUser?.sun_sign_id === 4){
        signEmoji=(
            <h3>♋</h3>
        )
    }else if(postUser?.sun_sign_id === 5){
        signEmoji=(
            <h3>♌</h3>
        )
    }else if(postUser?.sun_sign_id === 6){
        signEmoji=(
            <h3>♍</h3>
        )
    }else if(postUser?.sun_sign_id === 7){
        signEmoji=(
            <h3>♎</h3>
        )
    }else if(postUser?.sun_sign_id === 8){
        signEmoji=(
            <h3>♏</h3>
        )
    }else if(postUser?.sun_sign_id === 9){
        signEmoji=(
            <h3>♐</h3>
        )
    }else if(postUser?.sun_sign_id === 10){
        signEmoji=(
            <h3>♑</h3>
        )
    }else if(postUser?.sun_sign_id === 11){
        signEmoji=(
            <h3>♒</h3>
        )
    }else{
        signEmoji=(
            <h3>♓</h3>
        )

    }

    const SendRequest = async (e) =>{
        e.preventDefault();
        let friendId = postUser?.id

        await   dispatch(sendFriendRequests({userId,friendId}))
    }



    let showRequest
    if(!userFriends.includes(postUser?.id)){
        showRequest=(
            <>
           <h2>request</h2>
            <button onClick={SendRequest}>✨ 
            </button>
            </>
        )
    }else{
        showRequest=(
            <>

            </>
        )
    }

    return(
        <>
        <div className="univ-post-user-cont">
        <span className="univ-post-user-pic">
            <img src={postUser?.profile_picture} style={{maxWidth:100 , height:"fit-content"}}/>
            {showRequest}
        </span>
        <h3>
        {postUser?.username}
        {signEmoji}
        </h3>
        <h5>
        {signs[postUser?.sun_sign_id]?.sign}
        </h5>
        </div>
        <div className="univ-post-detail-cont">
            <h2 className="univ-horoscope" >{`"${post?.horoscope}"`}</h2>
            <p
            className="univ-horoscope-content"
            >{post?.content}</p>

        </div>
        </>
    )

}

export default HoroscopePost
