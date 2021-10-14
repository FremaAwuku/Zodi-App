import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect} from 'react';
import moment from "moment"
import { getAllUsers } from '../../../store/users';
import { deleteFriendRequest, getUserPendingRequests,sendFriendRequest  } from '../../../store/requests';
import { getAllFriends } from '../../../store/friends';
import {  fetchComments } from '../../../store/comments';
import EditHoroscopeModal from '../HoroscopePanel/EditHoroscopeModal';
import PostDetailModal from '../../HoroscopeFeed/PostDetailModal';
import AddCommentModal from '../../HoroscopeFeed/PostDetailModal/Comments/AddCommentModal/AddComment';
import { getAllLikes,addPostLike,removePostLike } from '../../../store/likes';
import { useHistory, useParams } from 'react-router';
import { getAllHoroscopePosts,deleteHoroscopePost } from '../../../store/horoscopePosts';


const UserHoroscopePost = ({post}) =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const signs = useSelector(state =>state.sunSigns)
    const {userId} = useParams()
    let postUser = users[post?.user_id]
    const userFriends= useSelector(state => Object.values(state.friends))
    .filter((friend)=>friend?.user_id === Number(userId))
    .map((friend)=> friend = friend.friend_id)
    const pendingRequestIds = useSelector(state => Object.values(state.requests)).map((request)=> request = request.accepting_friend_id)
    const requestId = useSelector(state => Object.values(state.requests))
    .filter((request)=> request.accepting_friend_id === postUser.id)
    .map((request)=> request= request.id)[0]

    const comments = useSelector(state=> Object.values(state.comments))
    const commentsForPost = comments?.filter((comment)=>comment?.post_id === post?.id)

    const likes = useSelector(state=>Object.values(state.likes))
    const likesForPost = likes?.filter((like)=>like?.post_id === post?.id)
    const totalLikes = likesForPost.length
    const userLike =likesForPost.filter((like)=> like.user_id === user?.id)[0]



    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getAllFriends())
        dispatch(getUserPendingRequests(userId))
        dispatch(fetchComments(post?.id))
        dispatch(getAllLikes())

    },[dispatch,userId,post])

  

    const SendRequest = async (e) =>{
        e.preventDefault();
        let friendId = postUser?.id

        await   dispatch(sendFriendRequest({userId,friendId}))
    }

    const handleDeleteRequest = async (e) =>{
        e.preventDefault();
        if(postUser.id){
        await dispatch(deleteFriendRequest(requestId))
        }
        await dispatch(getUserPendingRequests(userId))
    }
    let pendingReqs
    if(pendingRequestIds.includes(postUser?.id)  ){
        pendingReqs=(

            <>
            <h2>Pending Friend Request</h2>
            <button
            className="primary-button"
            onClick={handleDeleteRequest}>Delete Request?
            ❌
            </button>
            </>
        )
        }else{
            <>
            </>
        }
        // if(history.location === "/user_dashoard")

    let showRequest
//request login needs to be refactored
    if(
        !userFriends.includes(postUser?.id)
    && postUser?.id !== userId && !pendingRequestIds.includes(postUser?.id)){

        showRequest=(
            <>
            <button className="primary-button" onClick={SendRequest}>
                ✨Add Friend
            </button>
            </>
        )


    }else{
            <>

            </>

        }


        // COMMENTS
    let hasComments

    if(commentsForPost.length>0){
        hasComments=(

            <PostDetailModal postId={post?.id} totalComments={commentsForPost?.length}/>


        )
    }else{
        hasComments=(
        <AddCommentModal postId={post?.id} />)
    }

    // LIKES
    const handleLikeClick = async () => {
        await dispatch(addPostLike({ "user_id": user.id, "post_id": post.id }))

        await dispatch(getAllLikes())

        return
    }

    const handleUnlikeClick = async () => {

        await dispatch(removePostLike(post?.id,userLike?.id))

        await dispatch(getAllLikes())
        return
    }

    let likeDisplay
    if(post){
    if (!userLike) {
        likeDisplay = (
            <>
                <i onClick={handleLikeClick} className="far fa-heart"></i>
                <p className="post-detail-like-count">{totalLikes} Likes</p>
            </>
        )
    } else {
        likeDisplay = (
            <>
                <i onClick={handleUnlikeClick} className="fas fa-heart"></i>
                <p className="post-detail-like-count">{totalLikes} Likes</p>
            </>
        )
    }
    }

    let editOnDashboard
    if(history.location='/user_dashboard'){
        editOnDashboard=(
            <EditHoroscopeModal post={post} />
        )
    }else{
        editOnDashboard=(
            <></>
        )
    }
    const handleDeletePost =async()=>{
        await dispatch(deleteHoroscopePost(post?.id))
        await dispatch(getAllHoroscopePosts())

    }

const dateCreated = post.created
const formattedDate = moment(dateCreated).format("MMMM Do YYYY")

    return(
        <div
        className="main-post-cont"
        >
        <div className="univ-post-user-cont">
        <div
        className="user-post-detail"
        >
            <img src={postUser?.profile_picture} style={{maxWidth:100 , height:"fit-content"}}/>
            <h6> Posted: {formattedDate}</h6>
            </div>
            <div
            className="user-content">
            <h2 className="univ-horoscope" >{`"${post?.horoscope}"`}</h2>
            <p
            className="univ-horoscope-content"
            >{post?.content}
            </p>

        </div>
        </div>
        <div
        className="user-controls-horo"

        >
              {editOnDashboard}
        <button
        className="secondary-button"
        onClick={handleDeletePost}>  Delete Post 🗑️ </button>

        </div>

        </div>

    )

}

export default UserHoroscopePost
