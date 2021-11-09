import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';

import '../auth.css'
import LoginForm2 from './LoginForm2';

function LoginFormModal() {
  const [showLogin, setShowLogin] = useState(
    //   true
    false
    );

  return (
    <>
      <button className="primary-button mobile-login" onClick={() => setShowLogin(true)}>Login</button>
      {showLogin && (
        <>
      <div className="login-modal-wrapper">
      <Modal
      onClose={() => setShowLogin(false)}>
      <LoginForm2 setShowLogin={setShowLogin}/>
    </Modal>
</div>

        </>
      )}
    </>
  );
}

export default LoginFormModal;
