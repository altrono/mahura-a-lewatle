"use client"

import { motion } from "framer-motion"


export function AboutTraining() {
  return (
   
            <section id="about-us" className="rounded-md max-w-7xl mx-auto bg-white  bg-[url('/about.png')] bg-cover  bg-center] ">
              <div className="rounded-md px-4 flex  flex-col md:flex-row w-full h-full py-20 md:px-20 bg-blue-950/40  min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-l-md w-full px-4 bg-blue-950/80"
                >      
                  <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8">
                    <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">About <span className="text-lightGreen">Us</span></h2>
                    <p className="text-gray-200 text-center text-sm md:text-base ">
                      Empowering Growth Through Water, Agriculture, and Skill Development.
                    </p>
                  </div>   
                </motion.div> 
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className=" py-8 px-4 bg-blue-950/80 rounded-r-md">
                  <p className="text-gray-200 font-medium text-xl">MALT is an institution that trains and prepares competent and skilled seafarers for the oil and gas, offshore, merchant navy and port operations in the maritime sectors.</p>
                  <p className="text-gray-200 font-medium text-xl">We impart knowledge and skills of sea-going personnel/workforce within the
different divisions of the marine sectors,
Malt PTY (Ltd) was established to create a turnkey solution to bridge the lack
of skill set in the oil and gas, offshore sector and port operations around the
South African coastline waters.</p>
                </motion.div>   
              </div> 
            </section>
          
  )
}

