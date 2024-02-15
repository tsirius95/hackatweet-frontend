import React from 'react';
import styles from './Styles/Connexion.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import Signup from './Signup'
import Signin from './Signin'

export default function Login() {

  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const showModalUp = () => {
    setIsSignUp(true);
  };
  const showModalIn = () => {
    setIsSignIn(true);
  };

  const handleOkUp = () => {
    setIsSignUp(false);
  };
  const handleCancelUp = () => {
    setIsSignUp(false);
  };
  const handleOkIn = () => {
    setIsSignIn(false);
  };
  const handleCancelIn = () => {
    setIsSignIn(false);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.imagesContainer}>
        <img src='./main.gif' alt='gif' className={styles.mainImage}/>
      </div>
      <div className={styles.formContainer}>
        <h1>Express yourself!</h1>
        <Button type="primary" onClick={showModalUp}>Sign In</Button>
        <Modal title="Basic Modal" open={isSignUp} onOk={handleOkUp} onCancel={handleCancelUp} footer={null}>
          <Signup />
        </Modal>
        <Button type="primary" onClick={showModalIn}>Sign Up</Button>
        <Modal title="Basic Modal" open={isSignIn} onOk={handleOkIn} onCancel={handleCancelIn} footer={null}>
          <Signin />
        </Modal>
      </div>
    </div>
  )
};
