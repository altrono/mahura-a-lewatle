"use client"

import { motion } from "framer-motion"
import Image from "next/image"


export function CoreValues() {
  return (  
            <section id="about-us" className="mb-10">
              <div className=" max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold md:text-center text-gray-600 mb-8">Our Core Values</h1>
                <div className="flex justify-center flex-col md:flex-row  max-w-7xl mx-auto">
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex-1"> 
                        <h2 className="text-3xl text-gray-600 font-bold">Mission</h2>
                        <p className="text-gray-500">At MALT we want to create an environment that aligns clearly with our Vision of a “Perfect world-class workforce for South African waters”.</p>
                        <h2 className="mt-4 text-3xl text-gray-600 font-bold">
Core Values</h2>
                        <p className="text-gray-500">“PEOPLE”.</p>
                       
                    </motion.div> 
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="fex-1  flex md:justify-end max-h-[450px]"> 
                        <Image src={'/core.png'}  className="rounded-r-lg" alt="core values" width={600} height={600}  />
                    </motion.div> 
                </div>    
              </div> 
            </section>
          
  )
}

