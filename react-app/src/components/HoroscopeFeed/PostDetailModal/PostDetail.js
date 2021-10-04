
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


    const posts = useSelector(state => state.horoscope_posts)




    useEffect(()=>{

        dispatch(getUserHoroscopePosts(user?.id))
        dispatch(fetchComments(postId))


    },[dispatch,user?.id,postId])

    const closeModal = (e) =>{

        setShowModal(false)
    }

        return(
            <div
            className="comment-detail-main-cont">
             <div
             style={{color:'white'}}
             onClick={closeModal}>
                ❌ Close
            </div>

            <div
            className="univ-post-detail-comments">
            <CommentDetail postId={postId}/>
            <AddComment postId={postId}/>

            </div>








            </div>

        )


}

export default PostDetail
