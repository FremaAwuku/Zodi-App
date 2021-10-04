import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createHoroscopePost } from '../../../../../store/horoscopePosts';
const AddHoroscope = ({horoscope, userId , setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const [content,setContent]= useState('')
      const [validationErrors,setValidationErrors] = useState([])
  useEffect(()=>{
    const errors = []
    if(content === ''){

      errors.push("Post can not be empty")
    }

    setValidationErrors(errors)

  },[dispatch,content])
  const handleSubmit = async (e) =>{
      e.preventDefault()

      const payload ={
          userId,
          horoscope,
          content
      }


     await dispatch(createHoroscopePost(payload))

      //  history.push('/horoscope_feed')

       setShowModal(false)




  }

  return(
    <div className="univ-modal-wrapper">
      <form
      className="univ-form-wrapper"
      onSubmit={handleSubmit}
      >
        <h4>{`"${horoscope}""`}</h4>
        <div className="univ-form-errors add-row">
                {validationErrors.map((error, int) => (<div
                style={{textAlign:"center"}}
                key={int}>{error}</div>))}
        </div>
        <label
        style={{textAlign:"center"}}
        className="univ-form-label"
        htmlFor='content'
        >
           Share a few words about your Horoscope!
            <textarea
            className="univ-form-input"
            name='content'
           maxLength="280"
            list="user_friends"
            onChange ={(e)=>setContent(e.target.value)}
            />
        </label>
        <button
        disabled={validationErrors?.length >0}
        className="primary-button"
        type="submit">
            Post To Horoscope Feed
        </button>

      </form>
      </div>
  )

}
export default AddHoroscope
