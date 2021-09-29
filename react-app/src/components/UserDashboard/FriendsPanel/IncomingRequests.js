import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserFriendRequests } from '../../../store/requests';
import AddFriend from './AddFriend';
import DeleteRequest from './DeleteRequest';


const IncomingRequests = ({user}) =>{
    const dispatch = useDispatch()
    const requests = useSelector(state => Object.values(state.requests))


    // console.log(requests,"<<<<<<<<REQUESTS")
    useEffect(()=>{

        dispatch(getUserFriendRequests(user?.id))


    }, [dispatch])


    return(

        <div className='incoming-req-cont'>

                <ul>
                    {requests&& requests?.map((request)=>(

                            <li key={request?.id}>
                                <img src={request?.requesting_user.profile_picture} alt="pending requests" style={{maxWidth:100 , height:100}}></img>
                                <h3>{request?.requesting_user.username}</h3>
                                <AddFriend userId={user?.id} friendId={request?.requesting_user_id} requestId={request.id}/>
                                <DeleteRequest requestId={request.id}/>
                            </li>

                    ))}
                </ul>

        </div>
    )

}
export default IncomingRequests
