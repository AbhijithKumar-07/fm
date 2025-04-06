import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
      <div>
      <motion.div 
      animate={{
        x:1000,
        y:500,
        // rotate:360,
      }}
      className="box"
      > 
      </motion.div>

      <motion.div 

      className="circle"
      >

      </motion.div>
    </div>
  )
}

export default App
