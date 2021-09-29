import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends } from '../../../store/friends';

import './FriendsPanel.css'
import IncomingRequests from './IncomingRequests';
import RemoveFriend from './RemoveFriend';
const FriendsPanel = ({user}) =>{
    const dispatch = useDispatch()
    // const [showIncoming, setShowIncoming] = useState(false)
    // const [showPending, setPending] =useState(false)
    //dispatch session user friends
    //and turn friends into and array to be used later

    const friends = useSelector(state => Object.values(state.friends))

    // const pending =
    // console.log(friends,"<<<<<<<FRIENDS")
    // console.log(user,"<<<<<<<USER")

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
                    {friends && friends?.map((friend)=>{

                            const friendSign = friend?.friend_to_user.sun_sign_id
                            let signEmoji
                            if(friendSign === 1){
                                signEmoji=(
                                    <h3>♈</h3>
                                )
                            }else if(friendSign === 2){
                                signEmoji=(
                                    <h3>♉</h3>
                                )
                            }else if(friendSign === 3){
                                signEmoji=(
                                    <h3>♊</h3>
                                )
                            }else if(friendSign === 4){
                                signEmoji=(
                                    <h3>♋</h3>
                                )
                            }else if(friendSign === 5){
                                signEmoji=(
                                    <h3>♌</h3>
                                )
                            }else if(friendSign === 6){
                                signEmoji=(
                                    <h3>♍</h3>
                                )
                            }else if(friendSign === 7){
                                signEmoji=(
                                    <h3>♎</h3>
                                )
                            }else if(friendSign === 8){
                                signEmoji=(
                                    <h3>♏</h3>
                                )
                            }else if(friendSign === 9){
                                signEmoji=(
                                    <h3>♐</h3>
                                )
                            }else if(friendSign === 10){
                                signEmoji=(
                                    <h3>♑</h3>
                                )
                            }else if(friendSign === 11){
                                signEmoji=(
                                    <h3>♒</h3>
                                )
                            }else{
                                signEmoji=(
                                    <h3>♓</h3>
                                )

                            }

                            return(
                            <li key={friend?.id}>
                                <img src={friend?.friend_to_user.profile_picture} alt="zodi-app user" style={{maxWidth:100 , height:100}}></img>
                                <h6>{friend?.friend_to_user.username}{signEmoji}</h6>
                                <RemoveFriend userId={user?.id} friendId={friend?.friend_id}/>
                            </li>
                            )

                    })}
                </ul>

            </section>

        </div>


    )
}
export default FriendsPanel
