import { HeroSection } from "@/components/hero-section"
import { AboutUsSection } from "@/components/marketing/about-us-section"
import { TeamCarousel } from "@/components/marketing/TeamCarousel"
import { Services } from "@/components/services-section"



// import { FeaturesSection } from "@/components/features-section"
// import { TeamSection } from "@/components/team-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { CTASection } from "@/components/cta-section"

// import { ServicesSection } from "@/components/services-section"
// import { MissionSection } from "@/components/mission-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      <HeroSection /> 
      <AboutUsSection />
      <Services />
      <TeamCarousel />
      {/* <TeamSection /> */}
      {/* <MissionSection />
      <TeamSection />
      <FeaturesSection />
      <TestimonialsSection />      
      <CTASection />    */}
    </main>
  )
}

