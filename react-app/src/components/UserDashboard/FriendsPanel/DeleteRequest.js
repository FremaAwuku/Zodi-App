import {  useDispatch, useSelector } from 'react-redux';
import {  Redirect, useHistory, useParams } from 'react-router-dom';
import {deleteFriendRequest, getUserFriendRequests} from '../../../store/requests';
import { authenticate } from '../../../store/session';
const DeleteRequest = ({requestId}) =>{

const dispatch = useDispatch()
const history = useHistory()


const {userId }= useParams()
const handleDeleteRequest = async () =>{


    await dispatch(deleteFriendRequest(requestId))
    await dispatch(getUserFriendRequests(userId))
    await authenticate()
    history.push(`/user_dashboard/${userId}`);

//     <Redirect to='/user_dashboard/:userId'>
}
return(
    <p
    style={{fontSize:10}}
    onClick={handleDeleteRequest}>
     Delete Request ?
    </p>
)

}
export default DeleteRequest
