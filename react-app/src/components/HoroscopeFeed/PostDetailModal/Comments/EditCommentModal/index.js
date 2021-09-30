import React, {  useState } from 'react';

import { Modal } from '../../../../../context/Modal';

import EditComment from './EditComment'

function EditCommentModal({ commentId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Edit Comment
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditComment commentId={commentId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditCommentModal;
