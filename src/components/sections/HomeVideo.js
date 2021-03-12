import React from 'react'
import {VideoPlayer} from "../index"

function HomeVideo() {
  return (
    <section className="videoSection">
      <h2 className="title">What is FindTheRightInfos ?</h2>
      <VideoPlayer
        url="https://www.youtube.com/watch?v=BVEQh4QRpxU&ab_channel=ActiveGrowth"
      />
    </section>
  )
}

export default HomeVideo
