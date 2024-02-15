import React from 'react'

import styles from '../styles/DesignSystem.module.css'

export default function Tweet(props) {



  return (

    <div className={styles.tweetCard}>
      <div className={styles.userInfos}>
        <div className={styles.pseudo}>{props.firstname}</div>
        <div className={styles.info}>@{props.lastname}</div>
        <div className={styles.info}>{props.date}</div>
      </div>
      <div className={styles.post}>{props.content}</div>
		</div>

  )
}
