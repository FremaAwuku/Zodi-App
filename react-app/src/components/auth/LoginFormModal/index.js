import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showLogin, setShowLogin] = useState(
    //   true
    false
    );

  return (
    <>
      <button className="primary-button splash-login splash-bttns" onClick={() => setShowLogin(true)}>Log In</button>
      {showLogin && (
        <>

        <Modal onClose={() => setShowLogin(false)}>

          <LoginForm setShowLogin={setShowLogin}/>
        </Modal>
        </>
      )}
    </>
  );
}

export default LoginFormModal;
