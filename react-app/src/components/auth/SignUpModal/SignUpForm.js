import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import { getAllUsers } from '../../../store/users';
import '../auth.css'
import emailRegex from 'email-regex'
const SignUpForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
const users = useSelector(state=>Object.values(state.users));
const userUsernames = users?.map((user)=>user= user.username)
const userEmails=  users?.map((user)=>user= user.email)
useEffect(()=>{
  dispatch(getAllUsers())
  const errorArr = []

  if(username.length < 3){

    errorArr.push("Username must be greater than 3 characters")

  }
  if(!emailRegex({exact:true}).test(email)){
    errorArr.push("Please Enter Valid Email")
  }


  if(password < 5 || repeatPassword < 5){
    errorArr.push("Password must be greater than 5 characters")

  }
  if ( password&&password !== repeatPassword) {
    errorArr.push("Password must match")
  }
  setErrors(errorArr)
},[username,email,dispatch,password, repeatPassword])
  const onSignUp = async (e) => {
    e.preventDefault();

    if(email){
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
    if(userEmails.includes(email)){
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }

    }

    if(userUsernames.includes(username)){
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }

    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (

    <>
    <div className="signup-form-wrapper">

    <form id="sign-up-form" onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div
          className="univ-form-errors sign-up"
          key={ind}>{error}</div>
        ))}
      </div>
      <div
      className='sign-up-row'
      >
        <label
        id="sign-up-label"
        className="univ-form-label"
        >User Name</label>

        <input
        className='univ-form-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div
      className='sign-up-row'
      >
        <label
        id="sign-up-label"
        className="univ-form-label"
        >Email</label>
        <input
        className='univ-form-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div
      className='sign-up-row'
      >
        <label
        id="sign-up-label"
        className="univ-form-label"
        >Password</label>
        <input
        className='univ-form-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div
      className='sign-up-row'
      >
        <label
        className="univ-form-label"
        id="sign-up-label"
        >Repeat Password</label>
        <input
        className='univ-form-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
<div
 className="sign-up-action"
>
      <button
      className="secondary-button"

      type='submit'
      disabled={errors.length>0}
      >Sign Up</button>
      <button
      className="secondary-button"
      onClick={() => setShowModal(false)}>
    Cancel
    </button>
</div>
      </form>

      </div>
    </>

  );
};

export default SignUpForm;
