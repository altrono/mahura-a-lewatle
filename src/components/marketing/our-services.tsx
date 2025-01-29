"use client"
import { motion } from "framer-motion"
import Image from "next/image"


export function OurServices() {
  return (
    <section className="gap-4 text-center mb-20 px-4">
        <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8"> 
            <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">Our <span className="text-lightGreen">Services</span></h2>   
            <p className="text-noire font-medium">What can we offer?</p>
        </div>
        <div className="grid gri-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div id="induction of people" className=" bg-[url('/bg-4.png')] bg-cover bg-left rounded-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" max-w-[300px]  h-[200px] rounded-md  text-center flex justify-center flex-col items-center bg-blue-900/80 max"
                >
                    <p className="text-gray-200 text-xl font-bold">Description</p>
                    <p className="text-gray-200 text-xl">We facilitate the induction of fresh blood or newcomers in the industry.</p>
                </motion.div>
                <h2 className="text-3xl font-bold text-white">Induction of people</h2>
            </div>  
            <div id="inductiof pple" className=" bg-[url('/swim.png')] bg-cover bg-left rounded-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="ml-auto md:mx-auto max-w-[300px]  h-[200px] rounded-md  text-center flex justify-center flex-col items-center bg-blue-900/80 max"
                >
                    <p className="text-gray-200 text-xl font-bold">Description</p>
                    <p className="text-gray-200 text-xl">We train candidates for careers in the maritime sector as deck and engine room ratings.</p>
                </motion.div>
                <h2 className="text-3xl font-bold text-white">Service Training</h2>
            </div>
            <div id="induction of people" className=" bg-[url('/pic-5.png')] bg-cover bg-left rounded-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:ml-auto max-w-[250px]  h-[300px] rounded-md  text-center flex justify-center flex-col items-center bg-blue-900/80 max"
                >
                    <p className="text-gray-200 text-xl font-bold">Description</p>
                    <p className="text-gray-200 text-xl">We train candidates for careers in the maritime sector as deck and engineer officers.</p>
                </motion.div>
                <h2 className="text-3xl font-bold text-white my-2">Specialized Training</h2>
            </div>       
        </div>

        <div className="flex flex-col items-center mt-8">
            <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8"> 
                <h2 className="text-lightBlue text-4xl md:text-6xl font-bold mb-4 mt-8 text-center">Benefits Of <span className="text-lightGreen"> Our Services</span></h2>   
            </div>
            <Image src='/bg-1.png' alt="benefit" width={800} height={300} className="max-h-[200px] max-w-[700px] "/>
            <div className="grid grid-cols-3 gap-2 max-w-[700px] text-noire font-medium text-sm">
                <p>To deliver quality maritime training in line with STCW convention and STCW code as applicable.</p>
                <p>Our training is in line with statutory requirements.</p>
                <p>Our training answers to the syllabus of South African Maritime Safety Authority</p>
            </div>
        </div>
    </section>
  )
}

