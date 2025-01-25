import { CustomHero } from "@/components/marketing/custom-hero"
// import { AboutContent } from "@/components/marketing/about-content"
import { AboutStats } from "@/components/marketing/about-stats"
// import { AboutTeam } from "@/components/marketing/about-team"
import { AboutValues } from "@/components/marketing/about-values"

export default function AboutPage() {
  return (
    <>
      <CustomHero title="About Us"  />
      {/* <AboutContent /> */}
      <AboutStats />
      <AboutValues />
      {/* <AboutTeam /> */}
    </>
  )
}

