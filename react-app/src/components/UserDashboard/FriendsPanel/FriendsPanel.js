import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {  fetchUserFriendRequests, fetchUserPendingRequests } from '../../../store/requests';
import { getUserFriends } from '../../../store/friends';
import '../UserDashboard.css'
import IncomingRequests from './IncomingRequests';
import RemoveFriend from './RemoveFriend';
import PendingRequests from './PendingRequests';
const FriendsPanel = ({user}) =>{
    const dispatch = useDispatch()
    const [showIncoming, setShowIncoming] = useState(false)
    const [showPending, setShowPending] =useState(false)
    const [showFriends, setShowFriends] =useState(true)
    const {userId}=useParams()
    //dispatch session user friends
    //and turn friends into and array to be used later
    const [incTotal, setIncTotal] = useState(0)
    const [pendTotal, setPendTotal] = useState(0)
    const friends = useSelector(state => Object.values(state.friends))
    // .filter((friend)=>friend?.user_id!== userId)

    // const pending =
    console.log(friends,"<<<<<<<FRIENDS")
    // console.log(user,"<<<<<<<USER")

    useEffect(()=>{
        dispatch(getUserFriends(userId))
        getIncomingTotal()
        getPendingTotal()
    }, [dispatch,userId])

    const getIncomingTotal = async () =>{


        const requests = await dispatch(fetchUserFriendRequests(userId))
        requests.filter((req)=> req.accepting_user_id == userId)
        // console.log(requests,"<<<<<<<<REQUESTS")
        setIncTotal(requests.length)


    }
    const getPendingTotal = async () =>{


        const requests = await dispatch(fetchUserPendingRequests(userId))
        requests.filter((req)=> req.requesting_user_id == userId)

        setPendTotal(requests.length)


    }

    const unHideFriends = () =>{
        if(!showFriends){
            setShowFriends(true)

        setShowIncoming(false)
        setShowPending(false)

        }else{
        setShowFriends(false)
        }
    }

    const unHidePending = () =>{

        if(showPending){

            setShowPending(false)
        }else{
            setShowFriends(false)
            setShowIncoming(false)
            setShowPending(true)

        }
    }
     const unhideInc = () =>{
        if(showIncoming){
            setShowIncoming(false)

        }else{
            setShowFriends(false)
            setShowPending(false)
            setShowIncoming(true)

        }
    }

    return(
        <div className='friend-panel-cont'>
         <div
         className="user-actions">
             <button
            onClick={unHideFriends}
            className="secondary-button"
             >
                {`Friends (${friends.length})`}
             </button>
             <button
             onClick={unhideInc}
              className="secondary-button">
                {` Friend Requests(${incTotal})`}
             </button>
             <button
             onClick={unHidePending}
              className="secondary-button">
                 {`Pending Requests (${pendTotal})`}
             </button>
         </div>
            <section className='request-section'>
            {showIncoming && <IncomingRequests user={user}/>}

            </section>
           {showFriends && <section className='friend-section'>
                <div
                className="friend-cont"
                >
                <h2
                id="friends-header"
                > Friends</h2>
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
                            <li
                            className="friend-panel"
                            key={friend?.id}>

                                <img
                                className="friend-panel-img"
                                src={friend?.friend_to_user.profile_picture} alt="zodi-app user" style={{maxWidth:100 , height:100}}></img>
                                <span>
                                <h6
                                id="emoji-symbol"
                                >{`@${friend?.friend_to_user.username}`}{signEmoji}</h6>
                                <RemoveFriend userId={userId} friendId={friend?.friend_id}/>
                                </span>

                            </li>
                            )

                    })}
                </ul>
                </div>

            </section>}
            {showPending&&<section
            >
                <PendingRequests/>
            </section>}

        </div>


    )
}
export default FriendsPanel
