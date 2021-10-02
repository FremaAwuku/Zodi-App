import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editHoroscopePost } from '../../../../store/horoscopePosts';
import { getOneHoroscopePost, getUserHoroscopePosts } from '../../../../store/horoscopePosts';
const EditHoroscope = ({postId, setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const posts = useSelector(state=>state.horoscope_posts)
      const post =posts[postId]
      console.log(post.content ,"<<<<<<POST ??????")
      const [content,setContent]= useState(post?.content)
      const user = useSelector(state=>state.session.user)
  useEffect(()=>{

    // dispatch(getOneHoroscopePost(postId))
  },[dispatch])
  const handleSubmit = async (e) =>{
      e.preventDefault()

      const payload ={

          content,
          post_id:postId
      }


     await dispatch(editHoroscopePost(payload))

     history.push(`/user_dashboard/${user.id}`)

       setShowModal(false)





  }

  return(
    <div className="univ-modal-wrapper">
      <form
      className="univ-form-wrapper"
      onSubmit={handleSubmit}
      >
    {/* <div className="univ-form-errors">
        {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div> */}
        <h4>{`Daily Horoscope:${post.horoscope}`}</h4>
        <label
        className="univ-form-label"
        htmlFor='content'
        >
           Share a few words about your Horoscope!
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
            Save Edit
        </button>

      </form>
      </div>
  )

}
export default EditHoroscope
