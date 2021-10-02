import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal({setShowLogin}) {
  const [showModal, setShowModal] = useState(false);

const preventProp = (e) =>{
  e.stopPropagation()
  // setShowLogin(false)
  setShowModal(true)
}
  return (
    <>
      <button
      id="sign-up"
      className="secondary-button sign-up" onClick={preventProp}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
