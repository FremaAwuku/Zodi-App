import React, { useEffect, useState } from 'react';

import { Modal } from '../../../../context/Modal';

import EditHoroscope from './EditHoroscope'

function EditHoroscopeModal({ postId, userId}) {
  const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch()
// //   useEffect(()=>{
// //     dispatch(getAllUsers())
// //   },[dispatch])

  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Edit
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditHoroscope postId={postId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditHoroscopeModal;
