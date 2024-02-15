import React from 'react';
import Tweet from "./Tweet";
import styles from "../styles/global.css"

export default function Hashtag() {

    const [hashtagData, setHashtagData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/trends/cheum')
        .then(response => response.json())
        .then(data => {
            setHashtagData(data.tweets);
        });
    }, []);

    const hashtags = hashtagData.map((data, i) => {
        return <div>
            <Tweet key={i} firstname={data.user.firstname} lastname={data.user.lastname} date={data.date} content={data.content}/>
          </div>
    });

    return (
        <>
            {hashtags}
        </>
    )
}