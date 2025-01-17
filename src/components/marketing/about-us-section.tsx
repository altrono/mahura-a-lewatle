"use client"

import { motion } from "framer-motion"


export function AboutUsSection() {
  return (
   
            <section id="about-us" className="md:pb-20  bg-black rounded-t-lg bg-[url('/group123.svg')] bg-cover bg-bottom] pt-20 px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center"
              >
                <div className="bg-black/30 border-none p-10  flex items-center  rounded-md  flex-col gap-4   max-w-4xl mx-auto h-full">
                    <h2 className="text-3xl text-teal-500  font-bold">About Us</h2>
                    <p className="text-white">At <span className="text-[#bdd364] font-bold text-center">MAHURA A LEWATLE</span>, we specialize in delivering sustainable water supply solutions and comprehensive groundwater management. Our core services are designed to support rural communities and industries that depend on reliable access to clean water. With advanced technology and years of expertise, we ensure that your water needs are met efficiently and effectively.</p>
                  </div>
             </motion.div>  
            </section>
          
  )
}

