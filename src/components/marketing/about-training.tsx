"use client"

import { motion } from "framer-motion"


export function AboutTraining() {
  return (
   
            <section id="about-us" className="bg-white  bg-[url('/about.png')] bg-cover  bg-center] ">
              <div className="px-4 flex  flex-col md:flex-row w-full h-full py-20 md:px-20 bg-white/40  min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full px-4 bg-white/20"
                >      
                  <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8">About <span className="text-lightGreen">Us</span></h2>
                  <p className="text-noir text-lg font-medium">Empowering Growth Through Water, Agriculture, and Skill Development</p>      
                </motion.div> 
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className=" py-8 px-4 bg-white/20">
                  <p className="text-noire font-medium text-lg">MALT is an institution that trains and prepares competent and skilled seafarers for the oil and gas, offshore, merchant navy and port operations in the maritime sectors.</p>
                  <p className="text-noire font-medium text-lg">We impart knowledge and skills of sea-going personnel/workforce within the
different divisions of the marine sectors,
Malt PTY (Ltd) was established to create a turnkey solution to bridge the lack
of skill set in the oil and gas, offshore sector and port operations around the
South African coastline waters.</p>
                </motion.div>   
              </div> 
            </section>
          
  )
}

