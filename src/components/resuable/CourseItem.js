import React from "react"
import imageFrame from "../../assets/image.svg"
import playIcon from "../../assets/playbutton.svg"
import { Link } from "react-router-dom"
import { truncate } from "../../utils/functions"

function CourseItem({ course }) {
	return (
		<Link to={`/course/${"courseId"}`}>
			<div className="courseItem">
				<div className="course__img">
					<img src={imageFrame} alt="" />
				</div>
				<div className="course__text">
					<h3 className="course__title">{course?.title}</h3>
					<small className="course__author">by {course?.author}</small>
					<p className="course__description">{truncate(course?.description, 115)}</p>
				</div>
				<div className="playModules">
					<span>{course?.modules?.length} modules</span>
					<img src={playIcon} alt="play icon" />
				</div>
			</div>
		</Link>
	)
}

export default CourseItem
