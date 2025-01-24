"use client"

import { motion } from "framer-motion"


export function AboutUsSection() {
  return (
   
            <section id="about-us" className="bg-white  bg-[url('/finger.png')] bg-cover bg-bottom] ">
              <div className="px-4 flex  flex-col md:flex-row w-full h-full py-20 md:px-20 bg-lightBlue/50  min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full px-4"
                >      
                  <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4">About <span className="text-lightGreen">Us</span></h2>
                  <p className="text-white text-lg font-medium">Empowering Growth Through Water, Agriculture, and Skill Development</p>      
                </motion.div> 
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className=" py-8 px-4">
                  <p className="text-white font-medium text-lg">At <span className="text-lightBlue font-bold">MAHURALEWATLE</span>, we are committed to driving sustainable development and empowering communities through our comprehensive solutions in drilling, farming, and maritime training. With a focus on innovation, quality, and expertise, we provide reliable services that meet the needs of both rural and urban areas</p>
                </motion.div>   
              </div> 
            </section>
          
  )
}

