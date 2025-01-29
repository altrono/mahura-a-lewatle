"use client"
import { motion } from "framer-motion"


export function OurStats() {
  return (
    <section>
        <div className="relative min-h-[40vh] flex items-center justify-center max-w-4xl mx-auto">
            <div className="rounded-md absolute inset-0 z-0 bg-[url('/ship.png')] bg-contain bg-no-repeat bg-center">
                <div className="rounded-md absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                We are in <br /> Numbers
                </h1>
           
            </motion.div>
        </div>
        <div className="flex items-center justify-between max-w-3xl gap-1 my-10 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="rounded-full p-4 w-[120] text-noire h-[120] md:w-[200] md:h-[200] bg-lightTeal flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-3xl font-bold">8</h2>
                <p className="text-center text-sm md:text-xl">years in the business</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} className="rounded-full p-4 w-[120] h-[120] md:w-[200] md:h-[200] bg-lightBlue flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold md:text-3xl">95%</h2>
                <p className="text-sm md:text-xl text-center ">years in the business</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} className="rounded-full p-4 w-[120] h-[120] md:w-[200] md:h-[200]  bg-lightGreen flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold md:text-3xl">10k+</h2>
                <p className="text-sm md:text-xl text-center">years in the business</p>
            </motion.div>
        </div>
    </section>
  )
}

