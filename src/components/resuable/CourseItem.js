import React, { forwardRef } from "react"
import imageFrame from "../../assets/image.svg"
import playIcon from "../../assets/playbutton.svg"
import { Link } from "react-router-dom"
import { truncate } from "../../utils/functions"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const CourseItem = forwardRef(
	({ course, descriptionLength = 115, progress }, ref) => {
		return (
			<Link to={`/course/${"courseId"}`} ref={ref}>
				<div className="courseItem">
					<div className="course__img">
						<img src={imageFrame} alt="" />
					</div>
					<div className="course__text">
						<h3 className="course__title">{course?.title}</h3>
						<small className="course__author">by {course?.author}</small>
						<p className="course__description">
							{truncate(course?.description, descriptionLength)}
						</p>
					</div>
					{progress && (
            <CircularProgressbar 
              className="progress"
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                pathColor: "#ff5733",
                textColor: "#474747",
                textSize: 14
              })}
            />
          )}
					<div className="playModules">
						<span>{course?.modules?.length} modules</span>
						<img src={playIcon} alt="play icon" />
					</div>
				</div>
			</Link>
		)
	}
)

export default CourseItem
