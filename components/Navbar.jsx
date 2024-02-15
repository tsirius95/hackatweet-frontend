import React from 'react'

import Link from 'next/link';

import styles from '../styles/Navbar/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.buttonNav}>
          <div className={styles.icon}> x </div>
          <Link href="/"><span className={styles.link}>Home</span></Link>
        </div>
        <div className={styles.buttonNav}>
          <div className={styles.icon}> x </div>
          <Link href="/bookmarks"><span className={styles.link}>Bookmarks</span></Link>
        </div>
        <div className={styles.buttonNav}>
          <div className={styles.icon}> x </div>
          <Link href="/profile"><span className={styles.link}>Profile</span></Link>
        </div>
      </div>
    </div>
  )
}