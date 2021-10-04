import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Modal } from '../../../../context/Modal';
import { getAllHoroscopePosts } from '../../../../store/horoscopePosts';

import EditHoroscope from './EditHoroscope'

function EditHoroscopeModal({ post}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()
const user = useSelector(state => state.session.user)
  const userOfPost = post?.user_id
  console.log(userOfPost, "<<<<<<<USER OF POST MODAL")
  // useEffect(()=>{
  //   dispatch(getAllHoroscopePosts())
  // },[dispatch])
if(userOfPost === user?.id ){
  return (
    <>
      <button className="primary-button"
      onClick={() => setShowModal(true)}>
        Edit Horoscope
</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditHoroscope postId={post?.id} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}else{
  return(
    <>
    </>
  )
}
}

export default EditHoroscopeModal;
