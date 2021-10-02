import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CalculateSign from './CalculateSign';
import '../SplashPanel.css'
function CalculateSignModal({setShowLogin}) {
  const [showModal, setShowModal] = useState(false);

const preventProp = (e) =>{
  e.stopPropagation()
  // setShowLogin(false)
  setShowModal(true)
}
  return (
    <>
      <h2
      
      id='click-calculate' onClick={preventProp}>Calculate Your Sign</h2>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CalculateSign setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CalculateSignModal;
