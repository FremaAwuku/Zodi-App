import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends, addFriend } from '../../../store/friends';
import { getUserFriendRequests ,deleteFriendRequest} from '../../../store/requests';


const IncomingRequests = ({user}) =>{
    const dispatch = useDispatch()
    const requests = useSelector(state => Object.values(state.requests))


    console.log(requests,"<<<<<<<<REQUESTS")
    useEffect(()=>{

        dispatch(getUserFriendRequests(user?.id))


    }, [dispatch])

    const handleDeleteRequest = async (requestId) =>{


        // await dispatch(deleteFriendRequest(requestId))
        await dispatch(getUserFriendRequests(user?.id))


    }
    return(

        <div className='incoming-req-cont'>

                <ul>
                    {requests&& requests?.map((request)=>(

                            <li key={request?.id}>
                                <img src={request?.requesting_user.profile_picture} alt="pending requests" style={{maxWidth:100 , height:100}}></img>
                                <h6>{request?.requesting_user.username}</h6>
                                <button>
                                ✨ Add Friend
                                </button>
                                <button
                                className="primary-button"
                                onClick={handleDeleteRequest(request.id)}>Delete Request?
                                ❌
                                </button>
                            </li>

                    ))}
                </ul>

        </div>
    )

}
export default IncomingRequests
