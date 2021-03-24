import React, { useState } from "react"
import { VideoPlayer } from "../index"
import goBackIcon from "../../assets/arrow_icon.svg"
import trophyIcon from "../../assets/trophy_icon.svg"
import { useHistory, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { secondsToFormattedTime } from "../../utils/functions"


const VideoModule = ({ title, videos, open = false }) => {
  const [_open, setOpen] = useState(open)

  return (
    <div className="module">
      <h5 className="module__title" onClick={_ => setOpen(ps => !ps)}>{title}</h5>
      <ul className={`module__videos ${_open && "open"}`}>
        {videos?.map((video, i) => (
          <li className="video" key={i}>
            <div className="video__title">{video?.title}</div>
            <div className="video__duration">{secondsToFormattedTime(video?.duration)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CourseContent() {
  const history = useHistory()
  const { courseId } = useParams()
  const course = useSelector(state => state.courses).find(course => course?.id === courseId)
  const modules = useSelector(state => state.modules).filter(_module => _module?.courseId === course?.id)
  const videos = useSelector(state => state.videos).filter(video => video?.courseId === course?.id)
  const teacher = useSelector(state => state.teachers).find(teacher => teacher?.id === course?.teacherId)

  console.log({teacher, course})

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
				<VideoPlayer className="videoPlayer" url={videos[0] ? videos[0]?.url : "https://www.youtube.com/watch?v=BVEQh4QRpxU&ab_channel=ActiveGrowth"} />
				<aside className="videoAside">
					<div className="header">
						<h2 className="course__title">{course?.title}</h2>
						<small className="courseAuthor">by {teacher?.name}</small>
					</div>
					<div className="modules">
            {modules?.map((_module, i) => {
              const _videos = videos.filter(video => _module?.videos.includes(video?.id))
              return (
                <VideoModule
                  key={i}
                  open={i === 0}
                  title={_module?.title}
                  videos={_videos}
                />
              )
            })}
					</div>
				</aside>
			</div>
		</div>
	)
}

export default CourseContent
