import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import ShowFriends from './ShowFriends'

function ShowFriendsModal({userId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button login-button" onClick={() => setShowModal(true)}>Show Friend's Signs</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ShowFriends setShowModal={setShowModal} userId={userId} />
        </Modal>
      )}
    </>
  );
}

export default ShowFriendsModal;
