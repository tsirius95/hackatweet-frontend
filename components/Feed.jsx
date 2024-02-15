import React from 'react'

import { useEffect, useState } from 'react';

import Tweet from './Tweet';

export default function Feed() {


  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetsData(data.tweets);
      });
  }, []);

  
  const tweets = tweetsData.map((data, i) => {
      return <div>
          <Tweet key={i} firstname={data.user.firstname} lastname={data.user.lastname} date={data.date} content={data.content}/>
        </div>
  });


  return (
    <div>
      {tweets}
    </div>
  )
}