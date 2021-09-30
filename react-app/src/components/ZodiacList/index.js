import React, {  useState } from 'react';

import { Modal } from '../../context/Modal';


import ZodiacList from './ZodiacList'

function ZodiacListModal({
    // showZodiacList,setShowZodiacList
}) {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Zodiac List
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ZodiacList setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );

}

export default ZodiacListModal;
