import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

function SimplePopup({ open, transition = "fade", transitionDuration = .3, children }) {
  const fadeVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const growVariant = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }
  const fadeGrowVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }
  const NoneVariant = { hidden: {}, show: {} }
  
  const chooseVariant = choice => {
    switch(choice) {
      case "fade":
        return fadeVariant
      case "grow":
        return growVariant
      case "growfade":
        return fadeGrowVariant
      case "none":
        return NoneVariant
      default:
        return NoneVariant
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={chooseVariant(transition)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: transitionDuration }}
        >
          { children }
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SimplePopup
