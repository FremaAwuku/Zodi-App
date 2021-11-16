import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { getUserFriendRequests } from '../../../store/requests';
import AddFriend from './AddFriend';
import DeleteRequest from './DeleteRequest';


const IncomingRequests = ({}) =>{
    const dispatch = useDispatch()

    const {userId} = useParams()
    const requests = useSelector(state => Object.values(state.requests))
    .filter((req)=> req.accepting_friend_id == userId)
    
    useEffect(()=>{

        dispatch(getUserFriendRequests(userId))


    }, [dispatch, userId])


    return(

        <div className='incoming-req-cont'>
            <h2
            id="friends-header"
            > Friend Requests </h2>
                <ul>
                    {requests&& requests?.map((request)=>(

                            <li
                            className='incoming-req'
                            key={request?.id}>
                                <img src={request?.requesting_user.profile_picture} alt="incoming requests" style={{maxWidth:100 , height:100}}></img>
                                <span>
                                <h3
                                id="emoji-symbol"
                                >{`@${request?.requesting_user.username}`}</h3>
                                <AddFriend userId={userId} friendId={request?.requesting_user_id} requestId={request.id}/>
                                <DeleteRequest id="delete-req"
                                requestId={request.id}/>
                                </span>
                            </li>

                    ))}
                </ul>

        </div>
    )

}
export default IncomingRequests
