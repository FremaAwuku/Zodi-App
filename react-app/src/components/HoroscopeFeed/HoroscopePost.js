import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect} from 'react';

import { getAllUsers } from '../../store/users';
import { deleteFriendRequest, getUserPendingRequests,sendFriendRequest  } from '../../store/requests';
import { getUserFriends } from '../../store/friends';
import EditHoroscopeModal from '../UserDashboard/HoroscopePanel/EditHoroscopeModal';
import PostDetailModal from './PostDetailModal';

const HoroscopePost = ({post}) =>{

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const signs = useSelector(state =>state.sunSigns)
    const userId = user?.id
    let postUser = users[post?.user_id]
    const userFriends= useSelector(state => Object.values(state.friends)).map((friend)=> friend = friend.friend_id)
    const pendingRequestIds = useSelector(state => Object.values(state.requests)).map((request)=> request = request.accepting_friend_id)
    const requestId = useSelector(state => Object.values(state.requests))
    .filter((request)=> request.accepting_friend_id === postUser.id)
    .map((request)=> request= request.id)[0]


    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getUserFriends(userId))
        dispatch(getUserPendingRequests(userId))
    },[dispatch,userId])

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

        await   dispatch(sendFriendRequest({userId,friendId}))
    }

    const handleDeleteRequest = async (e) =>{
        e.preventDefault();
        if(postUser.id){
        await dispatch(deleteFriendRequest(requestId))
        }
        await dispatch(getUserPendingRequests(userId))
    }
    let pendingReqs
    if(pendingRequestIds.includes(postUser?.id)  ){
        pendingReqs=(

            <>
            <h2>Pending Friend Request</h2>
            <button
            className="primary-button"
            onClick={handleDeleteRequest}>Delete Request?
            ❌
            </button>
            </>
        )
        }else{
            <>
            </>
        }

    let showRequest

    if(
        !userFriends.includes(postUser?.id)
    && postUser?.id !== userId && !pendingRequestIds.includes(postUser?.id)){

        showRequest=(
            <>
            <button className="primary-button" onClick={SendRequest}>
                ✨Add Friend
            </button>
            </>
        )


    }else{
            <>

            </>

        }

     

    return(
        <>
        <div className="univ-post-user-cont">
        <span className="univ-post-user-pic">
            <img src={postUser?.profile_picture} style={{maxWidth:100 , height:"fit-content"}}/>
            {showRequest}
            {pendingReqs}
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
            <EditHoroscopeModal postId={post?.id}/>
            <PostDetailModal postId={post?.id}/>


        </div>
        </>
    )

}

export default HoroscopePost
