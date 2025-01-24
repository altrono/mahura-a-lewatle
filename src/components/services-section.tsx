"use client"

import { motion } from "framer-motion"
import { DrillIcon as Drill,  TractorIcon as Ship, ShipIcon as Training } from 'lucide-react'
import Link from "next/link"

const services = [
  {
    icon: Drill,
    title: "Drilling",
    description: "Providing reliable and sustainable water sources through advanced drilling techniques.",

  },
  
  {
    icon: Ship,
    title: "Farming",
    description: "Optimizing agricultural productivity with innovative farming practices and solutions.",

  },
  {
    icon: Training,
    title: "Training",
    description: "We train candidates for careers in the maritime sector as deck and engine room ratings",
  },
 
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-teal-50 rounded-t-lg">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-6xl"
        >
          <h2 className="text-4xl font-bold mb-4   text-lightBlue"><span className="text-darkTeal">Our</span> Services</h2>
          <p className="text-gray-500">What can you do for you ?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`hover:bg-lightTeal p-6 rounded-lg text-center group bg-lightBlue/80 transition-colors duration-300 hover:shadow-sm`}
            >
              <div className="mb-4 flex justify-center">
                <service.icon className={`h-12 w-12 group-hover:text-darkGreen text-white transition-colors`} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-darkGreen text-white">{service.title}</h3>
              <p className="group-hover:text-gray-800 mb-4 text-white">{service.description}</p>
              
              <Link href={`/services/${service.title.toLowerCase()}`} className="bg-gradient-to-tr from-teal-700 to-[#bdd364] text-white hover:to-teal-500 hover:from-[#bdd364] -ml-2 rounded-md mx-auto transition-colors duration-500  px-4 py-2 my-10">
                See more..
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

