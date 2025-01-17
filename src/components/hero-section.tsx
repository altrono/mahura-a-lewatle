import { Button } from "@/components/ui/button"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 relative z-10 justify-center items-center flex">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold  text-center tracking-tight    text-[#bdd364]">
              <span className="text-2xl">Welcome to</span> <br/> <span className="text-teal-500">MAHURA A LEWATLE</span> <br />  <span className="text-2xl">TRADING  (PTY) LTD</span>
            </h1>
            <p className="mt-4 px-8 md:px-0 mx-auto  text-center mb-8 text-md md:text-3xl lg:text-3xl max-w-4xl  text-slate-400 ">
              Providing Reliable Water Solutions and Groundwater Management.
            </p>
            <div className="flex flex-col sm:flex-row  max-w-md mx-auto">
              <Button className="bg-gradient-to-tr from-teal-700 to-[#bdd364] text-white hover:to-teal-500 hover:from-[#bdd364] -ml-2 rounded-md mx-auto transition-colors duration-500">
                Request a Free Consultation
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
   
  )
}

