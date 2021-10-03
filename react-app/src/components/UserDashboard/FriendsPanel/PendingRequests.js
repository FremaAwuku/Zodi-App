import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { getUserPendingRequests } from '../../../store/requests';
import AddFriend from './AddFriend';
import DeleteRequest from './DeleteRequest';


const PendingRequests = ({}) =>{
    const dispatch = useDispatch()

    const {userId} = useParams()
    const requests = useSelector(state => Object.values(state.requests))
    .filter((req)=> req.requesting_user_id == userId)


    useEffect(()=>{

        dispatch(getUserPendingRequests(userId))


    }, [dispatch, userId])


    return(

        <div className='pending-req-cont'>
            <h2
            id="friends-header"
            > Pending Requests </h2>
                <ul>
                    {requests&& requests?.map((request)=>(

                            <li
                            className='pending-req'
                            key={request?.id}>
                                <img src={request?.accepting_user.profile_picture} alt="pending requests" style={{maxWidth:100 , height:100}}></img>
                                <span>
                                <h3
                                id="emoji-symbol"
                                >{`@${request?.accepting_user.username}`}</h3>
                                <DeleteRequest id="delete-req"
                                requestId={request.id}/>
                                </span>
                            </li>

                    ))}
                </ul>

        </div>
    )

}
export default PendingRequests
