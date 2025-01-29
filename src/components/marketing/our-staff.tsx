"use client"
import { motion } from "framer-motion"
import Image from "next/image"


export function OurStaff() {
  return (
    <section className="gap-4 text-center mb-20 mt-20 px-4 max-w-4xl mx-auto">
        <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8"> 
          <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">Meet <span className="text-lightGreen">Our Staff</span></h2>   
        </div>
        <div className=" grid grid-cols-2 gap-0 mt-4">
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="relative">
                <Image className="rounded-md h-[340] " src={'/boss.png'} alt="boss" width={800} height={800} />  
                <p className="absolute bottom-12 text-center font-medium right-0 px-4 bg-white/40 h-32">Capt. <br />
                    Kabelo <br />
                    Assegai</p>
            </motion.div> 
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }} className="">
                <h2 className="text-slate-950 font-bold text-lg mb-2">Management and <br /> competent staff</h2>   
                <p className="bg-blue-900 text-gray-200 text-sm px-8 py-4 ">is a Master Mariner, a Dynamic Position Operator (NI) and a trained Naval Officer from the SA Navy, with 23 years of seagoing experience.</p>
      
            </motion.div>
        
                
        </div>
        
    </section>
  )
}

