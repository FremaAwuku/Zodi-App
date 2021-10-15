import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../../../../context/Modal';

import AddHoroscope from './AddHoroscope';

function AddHoroscopeModal({horoscope, userId}) {
  const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch()
// //   useEffect(()=>{
// //     dispatch(getAllUsers())
// //   },[dispatch])

  return (
    <>
      <button style={{marginTop:10}}className="primary-button"
      onClick={() => setShowModal(true)}>
       Post To Horoscope Feed
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddHoroscope userId={userId} setShowModal={setShowModal} horoscope={horoscope}/>
        </Modal>
      )}
    </>
  );
}

export default AddHoroscopeModal;
