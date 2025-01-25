import { AboutTraining } from "@/components/marketing/about-training";
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
       
        
  
      </>
    )
  };
  
  export default TrainingPage;
  