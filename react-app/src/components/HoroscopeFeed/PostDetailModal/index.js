import React, {  useState } from 'react';

import { Modal } from '../../../context/Modal';


import PostDetail from './PostDetail'

function PostDetailModal({ postId, totalComments}) {
  const [showModal, setShowModal] = useState(false);


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
