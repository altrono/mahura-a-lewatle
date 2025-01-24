"use client"

import { motion } from "framer-motion"
import { Carousel } from "./carousel"
import { Button } from "@/components/ui/button"
// import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"


export function HeroSection() {
  return (
    <div className="relative h-screen">
      <Carousel />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
          className="text-center text-white max-w-6xl mx-auto"
        >
          <motion.h1 
            className="px-4 md:px-0 text-4xl md:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transforming Communities with Drilling Farming and Comprehensive Training Solutions
          </motion.h1>
          
          <motion.p
            className="px-4 md:px-0 text-2xl md:text-4xl  text-white/80  mb-8 max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Delivering sustainable solutions for water, agriculture, and skill development.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row  max-w-md mx-auto mt-10">
                 <Button className="bg-gradient-to-tr from-teal-700 to-lightBlue text-white hover:to-teal-700 hover:from-lightBlue -ml-2 rounded-md mx-auto transition-colors duration-500">
                  Request a Free Consultation
                  <span className="ml-2">→</span>
                </Button>
          </motion.div>
          
          
        </motion.div>
      </div>
    </div>
   
  )
}

