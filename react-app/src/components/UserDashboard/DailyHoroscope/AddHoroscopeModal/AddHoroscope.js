import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createHoroscopePost } from '../../../../store/horoscopePosts';
const AddHoroscope = ({horoscope, userId , setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const [content,setContent]= useState('')
//   useEffect(()=>{

//   },[dispatch])
  const handleSubmit = async (e) =>{
      e.preventDefault()

      const payload ={
          userId,
          horoscope,
          content
      }

       const newPost = await createHoroscopePost(payload)
       if(newPost){
       history.push('horoscope_feed')

       setShowModal(false)
       }



  }

  return(
      <form
      className="univ-form-wrapper"
      onSubmit={handleSubmit}
      >
    {/* <div className="univ-form-errors">
        {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div> */}
        <h4>{`Daily Horoscope:${horoscope}`}</h4>
        <label
        className="univ-form-label"
        for='content'
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
        type="submit">
            Post To Horoscope Feed
        </button>

      </form>
  )

}
export default AddHoroscope
