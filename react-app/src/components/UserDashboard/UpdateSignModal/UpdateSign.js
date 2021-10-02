import React, { useState, useEffect } from 'react';
import { getAllUsers, updateSunSign } from '../../../store/users';

import { useDispatch , useSelector} from 'react-redux';
import { Redirect,useHistory } from 'react-router-dom';
import { authenticate } from '../../../store/session';

function UpdateSign({userId, setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [birthDay,setBirthDay] = useState("")
    const [validationErrors,setValidationErrors] = useState([])
    const user = useSelector(state=>state.session.user)
    useEffect(()=>{

        const errors = []


        if(birthDay === "")errors.push(" You had one job... Please Enter Birth Date")
        setValidationErrors(errors)
    },[ birthDay])

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const birthData = birthDay.split("-")
        const birthMonth = Number(birthData[1])
        const birthDate = Number(birthData[2])
        // console.log(birthDay,"<<<<<<<<<<<<<<<<<<<<birthDay")
        // console.log(birthData,"<<<<<<<<<<<<<<<<<<<<birthData")
        // console.log(birthDate,"<<<<<<<<<<<<<<<<<<<<birthDate")
        // console.log(birthMonth,"<<<<<<<<<<<<<<<<<<<<birthMonth")
        await dispatch(updateSunSign({


            userId,
            birthMonth,
            birthDate
        }));
        await dispatch(authenticate())
        await dispatch(getAllUsers())
        setShowModal(false)
        history.push(`/user_dashboard/${user.id}`);

        <Redirect to={`/user_dashboard/${user.id}`}/>

    }


  return (
    <>
    <div className="univ-modal-wrapper">
    <form
    onSubmit={handleSubmit}
    className="univ-form-cont" >
    <div className="univ-form-errors">
                {validationErrors.map((error, int) => (<div key={int}>{error}</div>))}
        </div>
        <label>
            <input

            type="date"
            onChange={((e)=>setBirthDay(e.target.value))}
            ></input>
        </label>

<button className="primary-button form-submit"
 type='submit'

 >Save</button>
    </form>

    </div>

 </>
  );
}

export default UpdateSign;
