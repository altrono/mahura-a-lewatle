import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {  useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react"
import { Booking } from "./booking"

export function CustomDialog() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)


    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80)
    })
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
        className={`rounded-md transition-colors duration-300 ${
            isScrolled 
            ? 'bg-gradient-to-tr from-teal-700 to-[#bdd364] text-white hover:to-teal-500 hover:from-[#bdd364] -ml-2 rounded-md mx-auto transition-colors duration-500' 
            : 'bg-teal-400 text-[#bdd364] hover:bg-teal-500'
        }`}
        >
        <p className="text-white/90 hover:text-white">Request a Quote</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black">
        <DialogHeader>
          <DialogTitle className="text-white text-center">Request a quote</DialogTitle>
          <DialogDescription>
            Get a free 30 min consultation from our expert.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Booking />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
