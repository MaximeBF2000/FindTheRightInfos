import React from 'react'
import { CourseItem } from "../index"

function SearchResults() {
  return (
    <div className="coursesGrid">
      {Array(5).fill("").map((_, i) => (
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
  )
}

export default SearchResults
