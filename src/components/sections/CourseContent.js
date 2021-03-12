import React, { useState } from "react"
import { VideoPlayer } from "../index"
import goBackIcon from "../../assets/arrow_icon.svg"
import trophyIcon from "../../assets/trophy_icon.svg"
import { useHistory } from "react-router-dom"


const VideoModule = ({ title, videos, open = false }) => {
  const [_open, setOpen] = useState(open)

  return (
    <div className="module">
      <h5 className="module__title" onClick={_ => setOpen(ps => !ps)}>{title}</h5>
      <ul className={`module__videos ${_open && "open"}`}>
        {videos?.map((video, i) => (
          <li className="video" key={i}>
            <div className="video__title">{video?.title}</div>
            <div className="video__duration">{video?.duration}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CourseContent() {
  const history = useHistory()

  const goBack = () => history.goBack()


	return (
		<div className="sizeContainer courseContent">
			<div className="completedRow">
				<img
					className="goBackBtn"
					src={goBackIcon}
					alt="go back button (arrow left)"
					onClick={goBack}
				/>
				<div className="completed">
					<span className="completed__text">
						You have completed 21% of the course
					</span>
					<img
						className="completed__icon"
						src={trophyIcon}
						alt="trophy image"
					/>
				</div>
			</div>
			<div className="videoContainer">
				<VideoPlayer url="https://youtu.be/BVEQh4QRpxU" />
				<aside className="videoAside">
					<div className="header">
						<h2 className="course__title">Course Title</h2>
						<small className="courseAuthor">by Author name</small>
					</div>
					<div className="modules">
						<VideoModule
							open
							title="Module 1"
							videos={[
								{ title: "Video 1", duration: "2min 27" },
								{ title: "Video 2", duration: "2min 27" },
								{ title: "Video 3", duration: "2min 27" },
							]}
						/>
						<VideoModule
							title="Module 2"
							videos={[
								{ title: "Video 1", duration: "2min 27" },
								{ title: "Video 2", duration: "2min 27" },
								{ title: "Video 3", duration: "2min 27" },
							]}
						/>
						<VideoModule
							title="Module 3"
							videos={[
								{ title: "Video 1", duration: "2min 27" },
								{ title: "Video 2", duration: "2min 27" },
								{ title: "Video 3", duration: "2min 27" },
							]}
						/>
						<VideoModule
							title="Module 4"
							npm
							videos={[
								{ title: "Video 1", duration: "2min 27" },
								{ title: "Video 2", duration: "2min 27" },
								{ title: "Video 3", duration: "2min 27" },
							]}
						/>
					</div>
				</aside>
			</div>
		</div>
	)
}

export default CourseContent
