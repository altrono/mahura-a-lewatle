import { HeroSection } from "@/components/hero-section"
// import { FeaturesSection } from "@/components/features-section"
// import { TeamSection } from "@/components/team-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { CTASection } from "@/components/cta-section"

// import { ServicesSection } from "@/components/services-section"
// import { MissionSection } from "@/components/mission-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <section id="about-us" className="md:pb-20  bg-[#c8e2da] rounded-t-lg bg-[url('/group123.svg')] bg-cover bg-bottom] pt-20 px-4">
        <div className="bg-black/30 border-none p-10  flex items-center  rounded-md  flex-col gap-4   max-w-4xl mx-auto h-full">
          <h2 className="text-3xl text-white  font-bold">About Us</h2>
          <p className="text-white">At <span className="text-[#bdd364] font-bold text-center">MAHURA A LEWATLE</span>, we specialize in delivering sustainable water supply solutions and comprehensive groundwater management. Our core services are designed to support rural communities and industries that depend on reliable access to clean water. With advanced technology and years of expertise, we ensure that your water needs are met efficiently and effectively.</p>
        </div>
      </section>
      {/* <MissionSection />
      <TeamSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />      
      <CTASection />    */}
    </main>
  )
}

