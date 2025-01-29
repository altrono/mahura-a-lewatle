import { AboutTraining } from "@/components/marketing/about-training";
import { CoreValues } from "@/components/marketing/coreValues";
import { CustomHero } from "@/components/marketing/customHero";
import { OurServices } from "@/components/marketing/our-services";
import { OurStaff } from "@/components/marketing/our-staff";
import { OurStats } from "@/components/marketing/our-stats";
import { OurVision } from "@/components/marketing/ourVision";
import { ServiceProcess } from "@/components/marketing/service-process";

const TrainingPage = () => {
    return (
      <>
        <CustomHero title="Malt Trading" subTitle="Training and Solutions Profile" />
        <div className="h-20 bg-white"></div>
        <AboutTraining />
        <div className="h-20 bg-white"></div>
        <OurVision />
        <CoreValues />
        <div className="h-20 bg-white"></div>
        <OurServices />
        <OurStaff />
        <OurStats />
        <ServiceProcess />
  
      </>
    )
  };
  
  export default TrainingPage;
  