import React from 'react'
import {VideoPlayer} from "../../components"

function VideoSection() {
  return (
    <section className="videoSection">
      <VideoPlayer
        url="https://www.youtube.com/watch?v=BVEQh4QRpxU&ab_channel=ActiveGrowth"
      />
    </section>
  )
}

export default VideoSection
