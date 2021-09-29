import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchComments, postComment } from '../../../../../store/comments';

const AddComment = ({postId , setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const [content,setContent]= useState('')
      const user= useSelector(state=>state.session.user)
  useEffect(()=>{

  },[dispatch])

  const handleSubmit = async (e) =>{
      e.preventDefault()

      const payload ={
          userId:user?.id,
          postId,
          content
      }
      console.log(payload,"<<<<<<<<<ADD COMMENT PAYLOAD")

     await dispatch(postComment(payload))

    await dispatch(fetchComments(postId))

    //    setShowModal(false)

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
           Comment on this post:
            <textarea
            name='content'
           maxLength="280"
            list="user_friends"
            onChange ={(e)=>setContent(e.target.value)}
            />
        </label>
        <button
        className="primary-button"
        type="submit">
            Post Comment
        </button>

      </form>
      </div>
  )

}
export default AddComment
