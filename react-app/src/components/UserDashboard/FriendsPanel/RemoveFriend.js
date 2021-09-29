import {  useDispatch } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { deleteFriend, getUserFriends } from '../../../store/friends';
const RemoveFriend = ({userId,friendId}) =>{

const dispatch = useDispatch()
const history = useHistory()


const handleDeleteRequest = async () =>{


    await dispatch(deleteFriend({userId,friendId}))
    await dispatch(getUserFriends(userId))
    history.push('/user_dashboard')
}
return(
    <button
    className="primary-button"
    onClick={handleDeleteRequest}>
    ❌
    </button>
)

}
export default RemoveFriend
