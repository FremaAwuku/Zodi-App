import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchComments, postComment } from '../../../../../store/comments';

const AddComment = ({postId , setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const [content,setContent]= useState('')
      const [validationErrors,setValidationErrors] = useState([])
      const user= useSelector(state=>state.session.user)
      useEffect(()=>{
        const errors = []
        if(content === ''){

          errors.push("Comment can not be empty")
        }

        setValidationErrors(errors)
      },[dispatch,content])

  const handleSubmit = async (e) =>{
      e.preventDefault()

      const payload ={
          userId:user?.id,
          postId,
          content
      }

     
     await dispatch(postComment(payload))

    await dispatch(fetchComments(postId))

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
      <div
      style={{textAlign:'center'}}
      className="univ-form-errors">
        {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <label
        style={{textAlign:'center'}}
        className="univ-form-label"
        htmlFor='content'
        >
           Comment on this post:
            <textarea
            className="univ-form-input"
            placeholder={content}
            name='content'
           maxLength="280"
            list="user_friends"
            onChange ={(e)=>setContent(e.target.value)}
            />
        </label>
        <button
        disabled={validationErrors.length>0}
        className="primary-button"
        type="submit">
            Post Comment
        </button>

      </form>
      </div>
  )

}
export default AddComment
