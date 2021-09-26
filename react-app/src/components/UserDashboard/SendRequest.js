import { useEffect,useState} from "react"
import { useDispatch,useSelector } from "react-redux"
import { sendFriendRequests } from "../../store/requests"

const SendRequest = ({friendId}) =>{

const userId = useSelector(state => state.session?.user?.id)
const dispatch = useDispatch()
useEffect(()=>{

    dispatch(sendFriendRequests({userId,friendId}))


},[friendId, userId,dispatch])

}
export default SendRequest
