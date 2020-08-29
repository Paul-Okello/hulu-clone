import React from 'react'
import './VideoCard.css'

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://miro.medium.com/max/1024/1*Wed2L5hgVHz97eBt-EpbPg.jpeg" alt=""/>
            <p>Coding film</p>
            <h2>Movie Title</h2>
            <p>Likes</p>

        </div>
    ) 
}

export default VideoCard
