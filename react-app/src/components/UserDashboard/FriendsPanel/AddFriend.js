import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { addFriend, getAllFriends } from '../../../store/friends';
import { deleteFriendRequest, getUserFriendRequests } from '../../../store/requests';

const AddFriend = ({userId,friendId,requestId}) =>{

const dispatch = useDispatch()

const handleAddFriend = async () =>{

    await dispatch(addFriend({userId,friendId}))
    await dispatch(deleteFriendRequest(requestId))
    await dispatch(getAllFriends())
    await dispatch(getUserFriendRequests(userId))
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
