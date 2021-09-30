import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect} from 'react';
import { fetchComments } from '../../../../store/comments';
import { getUserHoroscopePosts } from '../../../../store/horoscopePosts';
import HoroscopePost from '../../HoroscopePost';
import EditCommentModal from './EditCommentModal';
import DeleteComment from './DeleteComment';



const CommentDetail = ({postId}) =>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const comments = useSelector(state => Object.values(state.comments)).filter((comment)=>comment.post_id === postId)
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





        return(
            <>
                {comments&&comments?.map((comment)=>{
                    let userActions
                    if(user.id === comment.user_id){
                        userActions=(
                            <div
                            className='univ-user-comments'>
                            <EditCommentModal commentId={comment?.id}/>
                            <DeleteComment commentId={comment.id} postId={postId}/>
                            </div>
                        )
                    }else{
                        userActions=(
                            <></>
                        )
                    }

                    return(
                    <div
                    className="univ-individual-comment-wrapper"
                    key={comment?.id}>
                        <div
                        id="name-card-comments">
                                          <img
                        className="univ-individual-comment-pic"
                        src={comment?.user_details?.profile_picture} style={{maxWidth:80 , height:"fit-content"}}/>
                        <h3
                        className="univ-individual-comment-name"
                        >{comment?.user_details?.username}</h3>
                        </div>

                        <p
                        className="univ-individual-comment-content"
                        >{comment.content}</p>
                        {userActions}

                    </div>)
                })}
            </>

        )

}

export default CommentDetail
