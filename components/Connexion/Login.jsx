import React from 'react'

import styles from './Styles/Connexion.module.css'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Signup from './Signup'
import Signin from './Signin'

export default function Login() {

  const [isSignUp, setIsSignUp] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);



  let modalContent;
	if (!isSignUp) {
		modalContent = (
      <Signup/>
		);
	} else {
    modalContent = (
      <Signin/>
    )
  }

  return (
    <div className={styles.loginContainer}>

      <div className={styles.imagesContainer}>
        <img src='./main.gif' alt='gif' className={styles.mainImage}/>
      </div>

      <div className={styles.formContainer}>
        <h1>Express yourself!</h1>
        {modalContent}
      </div>

    </div>
  )
}
