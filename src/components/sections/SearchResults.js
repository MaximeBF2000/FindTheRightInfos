import React from 'react'
import { CourseItem } from "../index"
import { motion } from "framer-motion"

function SearchResults() {
  const MotionCourseItem = motion(CourseItem)

  const motion_containerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const motion_itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }


  return (
    <motion.div 
      className="coursesGrid"
      variants={motion_containerVariant}
      initial="hidden"
      animate="show"
    >
      {Array(5).fill("").map((_, i) => (
        <MotionCourseItem
          variants={motion_itemVariant}
          initial="hidden"
          animate="show"
          course={{
            title: "Course title",
            author: "Author name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex explicabo rerum inventore quod id a esse vero illezezfezfezfezfezfezfez",
            modules: ["", "", "", "", "", "", "", "", "", "", "", "", ""]
          }}
          key={i}
        />
      ))}
    </motion.div>
  )
}

export default SearchResults
