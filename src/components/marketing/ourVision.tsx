"use client"

import { motion } from "framer-motion"


export function OurVision() {
  return (  
            <section id="about-us" className="relative bg-white  bg-[url('/values.png')] bg-  bg-center] min-h-[500px]">
              <div className="absolute min-h-full top-2/4 md:top-2.5/4  right-10 left-10 md:right-20 md:left-20">
                <h1 className="text-4xl font-bold text-center text-gray-200">Our Vision</h1>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="px-8  bg-blue-950/60 py-12 max-w-[700px] mx-auto"> 
                    <p className="text-gray-200 font-medium text-sm md:text-xl">“Perfect world-class workforce for South African waters”.</p>
                </motion.div>   
              </div> 
            </section>
          
  )
}

