import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from '../../../context/Modal';
import { fetchComments } from '../../../store/comments';
import AddCommentModal from './Comments/AddCommentModal';

import PostDetail from './PostDetail'

function PostDetailModal({ postId, totalComments}) {
  const [showModal, setShowModal] = useState(false);
  // const comments = useSelector(state=> Object.values(state.comments))
  // const commentsForPost = comments?.filter((comment)=>comment?.post_id === postId)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchComments(postId))
  // },[dispatch])

  // console.log(commentsForPost,"<<<<<<<<THIS WAS WORKs SOMETIMESSS????")
  //basically its geting ALL posts comments and getting confused at which post to
  //apply ifconditional too


  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        {`Read Comments(${totalComments})`}
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PostDetail postId={postId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );

}

export default PostDetailModal;
