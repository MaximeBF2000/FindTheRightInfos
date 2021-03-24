import React from 'react'
import { CourseItem } from "../index"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"

function SearchResults({ searchQuery }) {
  const MotionCourseItem = motion(CourseItem)
  const courses = useSelector(state => state.courses)
  const teachers = useSelector(state => state.teachers)

  const motion_containerVariant = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5
      }
    }
  }
  const motion_itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }


  const findCourses = (course, query) => {
    const teacher = teachers?.find(teacher => teacher?.id === course?.teacherId)
    return (
      course?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
      || teacher?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
  }
  const filteredCourses = courses.filter(course => findCourses(course, searchQuery))


  return (
    <motion.div 
      className="coursesGrid"
      variants={motion_containerVariant}
      initial="hidden"
      animate="show"
    >
      {filteredCourses?.length > 0 ? filteredCourses.map((course, i) => (
        <MotionCourseItem
          variants={motion_itemVariant}
          initial="hidden"
          animate="show"
          course={course}
          key={i}
        />
      )) : <p className="noResults">We haven't found any courses</p> }
    </motion.div>
  )
}

export default SearchResults
