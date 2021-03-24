import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({ url }) {
  return (
    <div className="videoPlayer__container">
      <ReactPlayer
        className="videoPlayer"
        url={url}
        controls={true}
      />
    </div>
  )
}

export default VideoPlayer
