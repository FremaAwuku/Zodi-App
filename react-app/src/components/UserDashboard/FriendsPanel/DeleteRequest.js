import {  useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import {deleteFriendRequest} from '../../../store/requests';
const DeleteRequest = ({requestId}) =>{

const dispatch = useDispatch()
const history = useHistory()
const user = useSelector(state=>state.session.user)
console.log(requestId,"<<<<<<<<<REQUEST ID")
const handleDeleteRequest = async () =>{


    await dispatch(deleteFriendRequest(requestId))
    // await dispatch(getUserFriendRequests(user?.id))
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
export default DeleteRequest
