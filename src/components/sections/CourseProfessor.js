import React from 'react'
import { Button } from "../index"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"


function CourseProfessor() {
  const { courseId } = useParams()
  const course = useSelector(state => state.courses).find(course => course?.id === courseId)
  const teacher = useSelector(state => state.teachers).find(teacher => teacher?.id === course?.teacherId)

  return (
    <div className="sizeContainer courseProfessor">
      <div className="courseTitle">YOUR PROFESSOR</div>
      <div className="row">
        <img className="photo" src={teacher?.image || "https://via.placeholder.com/1000"} alt={`Photo of ${teacher?.name}`} />
        <div className="content">
          <h3 className="name">{teacher?.name}</h3>
          <p className="description">{teacher?.description}</p>
          <Button className="cta" rounded>Ask me a question</Button>
        </div>
      </div>
    </div>
  )
}

export default CourseProfessor
