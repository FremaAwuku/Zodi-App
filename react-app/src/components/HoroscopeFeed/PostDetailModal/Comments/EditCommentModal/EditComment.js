import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editComment,fetchComments } from '../../../../../store/comments';

const EditComment = ({commentId, setShowModal}) =>{

      const dispatch = useDispatch()

      const comments = useSelector(state=>state.horoscope_posts)
    const comment = comments[commentId]
      const [content,setContent]= useState(comment?.content)
      const [validationErrors,setValidationErrors] = useState([])
      useEffect(()=>{
        const errors = []
        if(content === ''){

          errors.push("Comment can not be empty")
        }

        setValidationErrors(errors)
      },[dispatch,content])
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
  const closeModal = () =>{
    setShowModal(false)
}

  return(
    <div className="univ-modal-wrapper">
      <h5
                    id="close-modal"
                    onClick={closeModal}>CLOSE</h5>
      <form
      className="univ-form-wrapper"
      onSubmit={handleSubmit}
      >
          <div style={{textAlign:'center'}} className="univ-form-errors">
        {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <label
        style={{textAlign:'center'}}
        className="univ-form-label"
        htmlFor='content'
        >
           Edit Comment
            <textarea
            className="univ-form-input"
            placeholder={content}
            name='content'
           maxLength="280"
            onChange ={(e)=>setContent(e.target.value)}
            />
        </label>
        <button
        disabled={validationErrors.length>0}
        className="primary-button"
        type="submit">
            Save Edit
        </button>

      </form>
      </div>
  )

}
export default EditComment
