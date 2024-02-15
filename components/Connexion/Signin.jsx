import React from 'react'

import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Styles/Connexion.module.css'


export default function Signin() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [signinEmail, setSignInEmail] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: signinEmail, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ token: data.token }));
					setSignInEmail('');
					setSignInPassword('');
				}
			});
	};


  return (

    <div className={styles.modalContainer}>

      <h4>It's good to see you!</h4>
      <p>Sign-in</p>

      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <label for="email">Email</label>
					<input type="email" placeholder="Enter your email adress" id="signInEmail" onChange={(e) => setSignInEmail(e.target.value)} value={signinEmail}/>
        </div>

        <div className={styles.inputContainer}>
          <label for="password">Password</label>
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
        </div>
			</div>

      <button className={styles.btn} id="connection" onClick={() => handleConnection()}>Connect</button>
      <p>Don't have an account?<Link href="/Signup"> Register</Link></p>

    </div>

  )
}