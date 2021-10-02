import {  useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { deleteFriend, getUserFriends } from '../../../store/friends';
const RemoveFriend = ({userId,friendId}) =>{

const dispatch = useDispatch()
const history = useHistory()
const user = useSelector(state=>state.session.user)

const handleDeleteRequest = async () =>{


    await dispatch(deleteFriend({userId,friendId}))
    await dispatch(getUserFriends(userId))
    history.push(`/user_dashboard/${user.id}`)
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
