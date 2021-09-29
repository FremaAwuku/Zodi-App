import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { addFriend, getUserFriends } from '../../../store/friends';
import { deleteFriendRequest } from '../../../store/requests';

const AddFriend = ({userId,friendId,requestId}) =>{

const dispatch = useDispatch()
// const history = useHistory()
// console.log(userId,"<<<<<<<ADD FRIEND USER ID")
// console.log(friendId,"+++++<<<<<<<ADD FRIEND FRIEND ID")
const handleAddFriend = async () =>{

    await dispatch(addFriend({userId,friendId}))
    await dispatch(deleteFriendRequest(requestId))
    await dispatch(getUserFriends(userId))
}
return(
    <button
    className="primary-button"
    onClick={handleAddFriend}
    >
    ✨ Add Friend
    </button>
)

}
export default AddFriend
