import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect} from 'react';
import moment from "moment"
import { getAllUsers } from '../../store/users';
import { deleteFriendRequest, getUserPendingRequests,sendFriendRequest  } from '../../store/requests';
import { getUserFriends } from '../../store/friends';
import { deleteComment, fetchComments } from '../../store/comments';
import EditHoroscopeModal from '../UserDashboard/HoroscopePanel/EditHoroscopeModal';
import PostDetailModal from './PostDetailModal';
import AddCommentModal from './PostDetailModal/Comments/AddCommentModal';
import { getAllLikes,addPostLike,removePostLike } from '../../store/likes';
import { useHistory } from 'react-router';
import { getAllHoroscopePosts,deleteHoroscopePost } from '../../store/horoscopePosts';
import { getAllHoroscope } from 'aztro-js';

const HoroscopePost = ({post}) =>{

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const signs = useSelector(state =>state.sunSigns)
    const userId = user?.id
    let postUser = users[post?.user_id]
    const userFriends= useSelector(state => Object.values(state.friends)).map((friend)=> friend = friend.friend_id)
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

    console.log(likesForPost,"<<<<<<<ALLL LIKE")
    console.log(userLike?.id, "<<<<<<<USER LIKE")

    useEffect(()=>{
        dispatch(getAllUsers())
        dispatch(getUserFriends(userId))
        dispatch(getUserPendingRequests(userId))
        dispatch(fetchComments(post?.id))
        dispatch(getAllLikes())

    },[dispatch,userId,post])

    let signEmoji

    if(postUser?.sun_sign_id === 1){
        signEmoji=(
            <h3>♈</h3>
        )
    }else if(postUser?.sun_sign_id === 2){
        signEmoji=(
            <h3>♉</h3>
        )
    }else if(postUser?.sun_sign_id === 3){
        signEmoji=(
            <h3>♊</h3>
        )
    }else if(postUser?.sun_sign_id === 4){
        signEmoji=(
            <h3>♋</h3>
        )
    }else if(postUser?.sun_sign_id === 5){
        signEmoji=(
            <h3>♌</h3>
        )
    }else if(postUser?.sun_sign_id === 6){
        signEmoji=(
            <h3>♍</h3>
        )
    }else if(postUser?.sun_sign_id === 7){
        signEmoji=(
            <h3>♎</h3>
        )
    }else if(postUser?.sun_sign_id === 8){
        signEmoji=(
            <h3>♏</h3>
        )
    }else if(postUser?.sun_sign_id === 9){
        signEmoji=(
            <h3>♐</h3>
        )
    }else if(postUser?.sun_sign_id === 10){
        signEmoji=(
            <h3>♑</h3>
        )
    }else if(postUser?.sun_sign_id === 11){
        signEmoji=(
            <h3>♒</h3>
        )
    }else{
        signEmoji=(
            <h3>♓</h3>
        )

    }

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
        console.log(userLike,"<<<<<<<USER LIKE")
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
        // await dispatch(getAllHoroscopePosts())

    }
let deletePost
if(post.user_id === userId){

    deletePost=(
        <button
        className="primary-button"
        onClick={handleDeletePost}> ❌ </button>

    )
}else{
    deletePost=(
        <></>

    )

}
const dateCreated = post.created
const formattedDate = moment(dateCreated).format("MMMM Do YYYY")

    return(
        <>
        <div className="univ-post-user-cont">
        <span className="univ-post-user-pic">
            <img src={postUser?.profile_picture} style={{maxWidth:100 , height:"fit-content"}}/>
            {showRequest}
            {pendingReqs}
        </span>
        <h3>
        {postUser?.username}
        {signEmoji}
        </h3>
        <h5>
        {signs[postUser?.sun_sign_id]?.sign}
        </h5>
        </div>
        <div className="univ-post-detail-cont">
            <h2 className="univ-horoscope" >{`"${post?.horoscope}"`}</h2>
            <p
            className="univ-horoscope-content"
            >{post?.content}

            </p>
            <p>
            {formattedDate}
            </p>

            {editOnDashboard}
            {/* <PostDetailModal postId={post?.id} totalComments={commentsForPost?.length}/>
            <AddCommentModal postId={post?.id} /> */}
            {hasComments}
            {deletePost}
            <div
            className="univ-likes">
            {likeDisplay}


            </div>

        </div>
        </>
    )

}

export default HoroscopePost
