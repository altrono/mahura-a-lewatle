"use client"

import { useState } from "react"
import Link from "next/link"
import {  Menu } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu"
import Image from "next/image"
import { CustomDialog } from "../custom-dialog"


export function SiteHeader() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80)
  })


  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      initial={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      animate={{ 
        backgroundColor: isScrolled 
          ?  "rgba(255, 255, 255, 1)" : "rgba(94, 169, 171, 0.0)",
        // backdropFilter: isScrolled ? "blur(90px)" : "none"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-30 items-center justify-between">
          <Link href="/" className="flex items-center py-2">
            <Image className="rounded-full " src={'/logo.png'} alt="logo" width={80} height={80} />
        
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
           <NavigationMenuDemo />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4">
            <CustomDialog />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  variant="ghost"
                  className={`transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-foreground' 
                      : 'text-white'
                  }`}
                >
                  <Menu className="h-12 w-12 text-teal-500"  />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4">
                 
                    <Link
                      key={"home"}
                      href="/"
                      className="text-teal-500 font-bold hover:text-teal-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {"Home"}
                    </Link>
                    <Link
                      key={"service"}
                      href="#services"
                      className="text-teal-500 font-bold hover:text-teal-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {"Services"}
                    </Link>
                    <Link
                      key={"about"}
                      href="#about"
                      className="text-teal-500 font-bold hover:text-teal-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {"About Us"}
                    </Link>
                 
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

