import React from 'react'
import downloadIcon from "../../assets/download_icon.svg"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function CourseRessources() {
  const { courseId } = useParams()
  const course = useSelector(state => state.courses).find(course => course?.id === courseId)

  if(course?.ressources?.length === 0) return null

  return (
    <div className="sizeContainer courseRessources">
      <h2 className="courseTitle">RESSOURCES</h2>
      <p className="courseSubtitle">Find all the ressources of the course here, exercice files, demo files, assets...</p>

      <ul className="ressources">
        {course?.ressources?.map((ressource, i) => (
          <li className="ressource" key={i}>
            <div className="ressource__filename">{ressource?.filename}</div>
            <div className="ressource__row">
              <div className="ressource__fileweight">{ressource?.filesize}</div>
              <img className="ressource__download" src={downloadIcon} alt="Download button" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseRessources
