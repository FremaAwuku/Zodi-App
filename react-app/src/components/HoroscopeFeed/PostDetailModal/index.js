import React, {  useState } from 'react';

import { Modal } from '../../../context/Modal';

import PostDetail from './PostDetail'

function PostDetailModal({ postId}) {
  const [showModal, setShowModal] = useState(false);
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getAllUsers())
  // },[dispatch])

  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Read Comments
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
