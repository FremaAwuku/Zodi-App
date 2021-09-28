import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getUserFriends, addFriend } from '../../../store/friends';
import { getUserFriendRequests, getUserPendingRequests } from '../../../store/requests';
import './FriendsPanel.css'
import IncomingRequests from './IncomingRequests';
const FriendsPanel = ({user}) =>{
    const dispatch = useDispatch()
    const [showIncoming, setShowIncoming] = useState(false)
    const [showPending, setPending] =useState(false)
    //dispatch session user friends
    //and turn friends into and array to be used later

    const friends = useSelector(state => Object.values(state.friends))

    // const pending =
    console.log(friends,"<<<<<<<FRIENDS")
    console.log(user,"<<<<<<<USER")

    useEffect(()=>{
        dispatch(getUserFriends(user?.id))
        // dispatch(getUserFriendRequests(user?.id))
        // dispatch(getUserPendingRequests(user?.id))

    }, [dispatch])
    return(
        <div className='friend-panel-cont'>
            <h1>Friend's Panel</h1>
            <section className='request-section'>
            <IncomingRequests user={user}/>

            </section>
            <section className='friend-section'>
                <h2> Friends</h2>
                <ul>
                    {friends && friends?.map((friend)=>(

                            <li key={friend?.id}>
                                <img src={friend?.friend_to_user.profile_picture} alt="zodi-app user" style={{maxWidth:100 , height:100}}></img>
                                <h6>{friend?.friend_to_user.username}</h6>
                            </li>

                    ))}
                </ul>

            </section>

        </div>


    )
}
export default FriendsPanel
