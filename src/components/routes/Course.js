import React from 'react'
import { CourseContent, CourseRessources, CourseProfessor } from "../index"

function Course() {
  return (
    <div className="course">
      <CourseContent />
      <CourseRessources />
      <CourseProfessor />
    </div>
  )
}

export default Course
