import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddRow from '../AddRowModal/AddRow'

function AddRowModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button login-button" onClick={() => setShowModal(true)}>Add Row</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddRow setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddRowModal;
