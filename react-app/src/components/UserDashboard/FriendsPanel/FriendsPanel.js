import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {  fetchUserFriendRequests, fetchUserPendingRequests } from '../../../store/requests';
import { getAllFriends } from '../../../store/friends';
import '../UserDashboard.css'
import IncomingRequests from './IncomingRequests';

import PendingRequests from './PendingRequests';
import RemoveFriendModal from './RemoveFriendModal';
import { authenticate } from '../../../store/session';
const FriendsPanel = ({user}) =>{
    const dispatch = useDispatch()
    const [showIncoming, setShowIncoming] = useState(false)
    const [showPending, setShowPending] =useState(false)
    const [showFriends, setShowFriends] =useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const {userId}=useParams()


    const [incTotal, setIncTotal] = useState(0)
    const [pendTotal, setPendTotal] = useState(0)
    const friends = useSelector(state => Object.values(state.friends))
    .filter((friend)=>friend?.user_id === Number(userId))



    useEffect(()=>{
        authenticate()
        dispatch(getAllFriends())
        getIncomingTotal()
        getPendingTotal()
    }, [dispatch,userId,incTotal,pendTotal, friends.length])

    const getIncomingTotal = async () =>{


        const requests = await dispatch(fetchUserFriendRequests(userId))
        requests.filter((req)=> req.accepting_user_id == userId)

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
    const showDelete = () =>{
        setShowDeleteModal(true)
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
                                <button
                                className="primary-button"
                                onClick={showDelete}
                            > Delete Friend?</button>

                                <RemoveFriendModal userId={userId} friendId={friend?.friend_id} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal}/>
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
