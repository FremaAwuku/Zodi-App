import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editComment,fetchComments } from '../../../../../store/comments';

const EditComment = ({commentId, setShowModal}) =>{

      const dispatch = useDispatch()

      const comments = useSelector(state=>state.horoscope_posts)
    const comment = comments[commentId]
      const [content,setContent]= useState(comment?.content)
  useEffect(()=>{


  },[dispatch])
  const handleSubmit = async (e) =>{
      e.preventDefault()
        e.stopPropagation()
      const payload ={

          content,
          commentId
      }
     

     await dispatch(editComment(payload))
    await dispatch(fetchComments(commentId))


       setShowModal(false)
  }

  return(
    <div className="univ-modal-wrapper">
      <form
      className="univ-form-wrapper"
      onSubmit={handleSubmit}
      >
        <label
        className="univ-form-label"
        htmlFor='content'
        >
           Edit Comment
            <textarea
            name='content'
           maxLength="280"
            onChange ={(e)=>setContent(e.target.value)}
            />
        </label>
        <button
        className="primary-button"
        type="submit">
            Save Edit
        </button>

      </form>
      </div>
  )

}
export default EditComment
