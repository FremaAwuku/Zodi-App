import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editHoroscopePost } from '../../../../store/horoscopePosts';

const EditHoroscope = ({postId, setShowModal}) =>{

      const dispatch = useDispatch()
      const history = useHistory()
      const posts = useSelector(state=>state.horoscope_posts)
      const post =posts[postId]
      const [validationErrors,setValidationErrors] = useState([])
      const [content,setContent]= useState(post?.content)
      const user = useSelector(state=>state.session.user)
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
    <div className="univ-form-errors">
        {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <h4>{`"${post.horoscope}"`}</h4>


            <textarea
            style={{margin:15}}
            name='content'
           maxLength="280"
            list="user_friends"
            placeholders={post?.content}
            onChange ={(e)=>setContent(e.target.value)}
            />

        <button
            disabled={validationErrors?.length >0}
        className="primary-button"
        type="submit">
            Save Edit
        </button>

      </form>
      </div>
  )

}
export default EditHoroscope
