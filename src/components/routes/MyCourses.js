import React from 'react'
import { CourseItem } from "../index"

function MyCourses() {
  const fake_course = { 
    title: "Course 1", 
    author: "Author 1", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore neque quibusdam tenetur molestias et quae voluptate similique at, eos nesciunt voluptatem suscipit porro esse doloribus alias sunt dignissimos maxime voluptates asperiores perspiciatis voluptas. Voluptatum laboriosam esse enim expedita dolorum officiis minus at, porro nulla, repellat a labore, ullam quidem!" ,
    modules: Array(13).fill("")
  }

  return (
    <div className="mycourses sizeContainer">
      <h2 className="title">My courses</h2>
      <div className="courseLayout">
        {Array(6).fill(fake_course).map((course, i) => (
          <CourseItem 
            course={course}
            descriptionLength={300}
            progress={75}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default MyCourses
