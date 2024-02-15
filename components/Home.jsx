import React from 'react'

// IMPORT COMPONENT //
import Navbar from '../components/Navbar';
import NewTweet from '../components/NewTweet';
import Feed from '../components/Feed';
import SidebarRight from '../components/SidebarRight';

// IMPORT CSS
import styles from '../styles/Layout.module.css'


export default function Home() {
  return (

    <div className={styles.layout}>
      <Navbar className={styles.navbar}/>
      <div className={styles.middle}>
        <NewTweet className={styles.newTweet}/>
        <Feed className={styles.feed}/>
      </div>
      <SidebarRight className={styles.sidebarRight}/>
    </div>
  )
}