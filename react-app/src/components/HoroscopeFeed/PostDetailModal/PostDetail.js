
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect} from 'react';
import { fetchComments } from '../../../store/comments';
import { getUserHoroscopePosts } from '../../../store/horoscopePosts';
import HoroscopePost from '../HoroscopePost';
import CommentDetail from './Comments/CommentDetail';
import AddComment from './Comments/AddCommentModal/AddComment';



const PostDetail = ({postId, setShowModal}) =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const comments = useSelector(state => Object.values(state.comments))
    const posts = useSelector(state => state.horoscope_posts)
    const post = posts[postId]
    const userPosts =
    // let postUser = users[post?.user_id]
    // const userFriends= useSelector(state => Object.values(state.friends)).map((friend)=> friend = friend.friend_id)


    useEffect(()=>{
        // dispatch(getAllUsers())
        dispatch(getUserHoroscopePosts(user?.id))
        dispatch(fetchComments(postId))


    },[dispatch,user?.id,postId])

    const closeModal = (e) =>{
        setShowModal(false)
    }
    if(comments){
        return(
            <>

            <div
            className="univ-post-detail-comments">
            <CommentDetail postId={postId}/>
            <AddComment postId={postId}/>
            </div>








            </>

        )
    }else{

    }
    return(
        <div
        className="univ-post-detail-wrap">

            <div
            className="univ-post-detail-comments">

            </div>




            </div>

    )

}

export default PostDetail
