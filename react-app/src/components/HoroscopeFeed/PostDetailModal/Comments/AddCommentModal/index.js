import React, {  useState } from 'react';

import { Modal } from '../../../../../context/Modal';

import AddComment from './AddComment'

function AddCommentModal({ postId}) {
  const [showModal, setShowModal] = useState(false);
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getAllUsers())
  // },[dispatch])

  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Add Comment
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddComment postId={postId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddCommentModal;
