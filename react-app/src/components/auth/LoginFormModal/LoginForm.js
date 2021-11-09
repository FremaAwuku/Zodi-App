import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import SignUpFormModal from '../SignUpModal';
import SignUpForm from '../SignUpModal/SignUpForm';
import '../auth.css'
import '../../SplashPanel/SplashPanel.css'
  const LoginForm = ({showLogin, setShowLogin}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
      e.stopPropagation()
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const demoLogin = (e) => {
    e.stopPropagation()
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="login-splash">
    <div
    className="login-form-cont">
      <h2>Welcome To Zodi-App✨ </h2>
    <form
    className="login-form-wrap"
    onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div
          className="univ-form-errors"
          key={ind}>{error}</div>
        ))}
      </div>

        <label
        htmlFor='email'
        className="univ-form-label"
        >Email</label>
        <input
        className='univ-form-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />


        <label
        htmlFor='password'
        className="univ-form-label"
        >Password</label>
        <input
        className='univ-form-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button
        className="primary-button"
        type='submit'>Login</button>
 </form>
<div
className="login-other-options">
    <button className="secondary-button" onClick={demoLogin}>
          Try Demo
        </button>
    <p>Not a user?</p>

    <SignUpFormModal setShowLogin={setShowLogin} />

      </div>
      </div>
    </div>
  );
};

export default LoginForm;
