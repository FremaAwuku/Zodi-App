import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CalculateSign from './CalculateSign';
import '../SplashPanel.css'
import { useLocation } from 'react-router-dom';
function CalculateSignModal({setShowLogin}) {
  const [showModal, setShowModal] = useState(false);
const location= useLocation()
const preventProp = (e) =>{
  e.stopPropagation()
  // setShowLogin(false)
  setShowModal(true)
}
if(location.pathname === '/'){
  return (
    <>
      <h2

      id='click-calculate' onClick={preventProp}>OR Calculate Your Sign</h2>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CalculateSign setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
      }else{
        return (
          <div

          >
            <h4
            id='calc'
           onClick={preventProp}>Need to Calculate Sun Sign?</h4>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <CalculateSign setShowModal={setShowModal}/>
              </Modal>
            )}
          </div>
        );

      }
}

export default CalculateSignModal;
