import { AboutTraining } from "@/components/marketing/about-training";
import { CoreValues } from "@/components/marketing/coreValues";
import { CustomHero } from "@/components/marketing/customHero";
import { OurVision } from "@/components/marketing/ourVision";

const TrainingPage = () => {
    return (
      <>
        <CustomHero title="Malt Trading" subTitle="Training and Solutions Profile" />
        <div className="h-20 bg-white"></div>
        <AboutTraining />
        <div className="h-20 bg-white"></div>
        <OurVision />
        <CoreValues />
       
        
  
      </>
    )
  };
  
  export default TrainingPage;
  