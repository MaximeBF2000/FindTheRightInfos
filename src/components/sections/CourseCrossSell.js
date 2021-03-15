import React from 'react'
import { CourseItem } from "../index"

function CourseCrossSell() {
  return (
    <div className="sizeContainer courseCrossSell">
      <h2 className="courseTitle">More courses like this one</h2>
      <div className="coursesGrid">
        {Array(4).fill().map((_, i) => (
          <CourseItem
            course={{
              title: "Course title",
              author: "Author name",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex explicabo rerum inventore quod id a esse vero illezezfezfezfezfezfezfez",
              modules: ["", "", "", "", "", "", "", "", "", "", "", "", ""]
            }}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseCrossSell
