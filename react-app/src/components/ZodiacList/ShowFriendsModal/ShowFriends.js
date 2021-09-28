import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUserFriends } from '../../../store/friends';
import { calculateSunSign } from '../../../store/sunSigns';


function ShowFriends ({setShowModal, userId}){

    const dispatch = useDispatch()
    const friends = useSelector(state=> Object.values(state.friends))
    const signObjs = useSelector(state=>state.sunSigns)

    useEffect(()=>{
        dispatch(getUserFriends(userId))

    },[])
    return (
                <>
                <ul>
                  {friends && friends?.map((friend)=>{
                      let friendSunSign = signObjs[friend.friend_to_user.sun_sign_id].sign
                      console.log(friendSunSign,"<<<<<<<<<FREIND SUN SIGN")
                      return(
                          <>
                          <span key={friend.id}>
                              <li>
                                {`${friend.friend_to_user.username}-${friendSunSign}`}
                              </li>
                          </span>
                          </>
                      )

                  })}
                  </ul>

                </>


    )
}
export default ShowFriends
