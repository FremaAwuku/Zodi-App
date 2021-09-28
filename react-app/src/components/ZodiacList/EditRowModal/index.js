import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditRow from './EditRow'

function EditRowModal({row, firstName, firstNameSign}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="primary-button login-button" onClick={() => setShowModal(true)}>Add Match</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditRow
          setShowModal={setShowModal}
          row={row}
          firstName={firstName}
          firstNameSign={firstNameSign}
           />
        </Modal>
      )}
    </>
  );
}
export default EditRowModal;
