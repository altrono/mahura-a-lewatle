"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FlipWordsCore } from "./flip-words-core"


export function CoreValues() {
  return (  
            <section id="about-us" className="mb-10 px-6">
              <div className=" max-w-7xl mx-auto">
                <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8"> 
                  <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">Our Core <span className="text-lightGreen">Values</span></h2>   
                </div>
                <div className="flex justify-center flex-col md:flex-row  max-w-5xl mx-auto">
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex justify-center items-start flex-col"> 
                        <h2 className="text-3xl text-darkGreen font-bold">Mission</h2>
                        <p className="text-gray-500">At MALT we want to create an environment that aligns clearly with our Vision of a “Perfect world-class workforce for South African waters”.</p>
                        <h2 className="my-4 text-3xl text-darkGreen font-bold">
Core Values</h2>
                        <p className="text-noire text-xl ">“PEOPLE”.</p>
                        <FlipWordsCore />
                    </motion.div> 
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="fex-1  flex md:justify-end max-h-[450px] mt-8"> 
                        <Image src={'/core.png'}  className="rounded-r-lg" alt="core values" width={600} height={400}  />
                    </motion.div> 
                </div>    
              </div> 
            </section>
          
  )
}

