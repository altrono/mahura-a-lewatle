'use client'
import { Button } from "@/components/ui/button"

import {  useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react"


export function CustomDialog() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)


    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80)
    })

    const handleDownload = () => {
      window.location.href = '/api/download-pdf';
    }
  return (
      <Button
        className={`rounded-md transition-colors duration-300 ${
            isScrolled 
            ? 'bg-gradient-to-tr from-teal-700 to-[#bdd364] text-white hover:to-teal-500 hover:from-[#bdd364] -ml-2 rounded-md mx-auto transition-colors duration-500' 
            : 'bg-teal-400 text-[#bdd364] hover:bg-teal-500'
        }`}
        onClick={handleDownload}
        >
        <p className="text-white/90 hover:text-white">Download pdf</p>
        
      </Button>
  

  )
}
