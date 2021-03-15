import React from 'react'
import { CourseContent, CourseRessources, CourseProfessor, CourseCrossSell } from "../index"

function Course() {
  return (
    <div className="course">
      <CourseContent />
      <CourseRessources />
      <CourseProfessor />
      <CourseCrossSell />
    </div>
  )
}

export default Course
