import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({ url }) {
  return (
    <div className="videoPlayer__container">
      <ReactPlayer
        className="videoPlayer"
        url={url}
      />
    </div>
  )
}

export default VideoPlayer
