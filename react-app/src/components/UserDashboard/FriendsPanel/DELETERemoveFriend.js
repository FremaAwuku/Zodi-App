import { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { deleteFriend, getUserFriends } from '../../../store/friends';
import { authenticate } from '../../../store/session';
const RemoveFriend = ({userId,friendId}) =>{

const dispatch = useDispatch()
const history = useHistory()
const user = useSelector(state=>state.session.user)
const friends = useSelector(state=>Object.values(state.friends))
const friend= friends.filter((friend)=>friend.friend_id === friendId)[0]

const [confirm, setConfirm] = useState(false)
console.log(friends,'<<<<<FRIEND')
console.log(friend,"FRIENDDDDD")

useEffect(()=>{


},[dispatch])
const handleDeleteRequest = async () =>{



    await dispatch(deleteFriend({userId,friendId}))
    await dispatch(getUserFriends(userId))
    await authenticate()
    history.push(`/user_dashboard/${userId}`)
}
const handleConfirm = () =>{
    setConfirm(true)
}
return(
    <>
    <button
    className="primary-button"
    onClick={handleConfirm}>
    Delete Friend?
    </button>
    <div
    hidden={!confirm}
    className="delete-friend-confirm">
    <h3>
    Are you Sure you want to Delete {friend?.friend_to_user?.username}?
    </h3>
    <span>
    <h6 onClick={handleDeleteRequest} >
        Yes
    </h6>
    <h6>
        No
    </h6>
    </span>
    </div>
    </>

)

}
export default RemoveFriend
