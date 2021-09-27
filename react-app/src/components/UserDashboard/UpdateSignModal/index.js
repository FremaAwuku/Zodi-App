import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { getAllUsers } from '../../../store/users';
import UpdateSign from './UpdateSign.js'

function UpdateSignModal({userId}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])

  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Update Sun Sign
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSign userId={userId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default UpdateSignModal;
