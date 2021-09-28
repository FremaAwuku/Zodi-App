import {  useDispatch } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import {deleteFriendRequest} from '../../../store/requests';
const DeleteRequest = ({requestId}) =>{

const dispatch = useDispatch()
const history = useHistory()

console.log(requestId,"<<<<<<<<<REQUEST ID")
const handleDeleteRequest = async () =>{


    await dispatch(deleteFriendRequest(requestId))
    // await dispatch(getUserFriendRequests(user?.id))
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
export default DeleteRequest
