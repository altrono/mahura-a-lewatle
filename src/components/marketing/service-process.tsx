import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ServiceProcess() {
  const data = [
    {
      title: "01.",
      content: (
        <div>
          <p className="text-slate-800 font-bold text-xl mb-4">
            Consultation
          </p>
          
            <Image
              src="/timeline.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
        </div>
      ),
    },
    {
      title: "02.",
      content: (
        <div>
          <p className="text-slate-800 font-bold text-xl mb-4">
            Ideation
          </p>
          
          
            <Image
              src="/idea.webp"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
        
        </div>
      ),
    },
    {
      title: "03.",
      content: (
        <div>
          <p className="text-slate-800 font-bold text-xl mb-4">
            Strategy Formulation
          </p>
          
          <Image
              src="/ideation.webp"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32  lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
            
       
        </div>
      ),
    },
    {
        title: "04.",
        content: (
          <div>
            <p className="text-slate-800 font-bold text-xl mb-4">
            Strategy Implementation

            </p>
           
      
            <Image
                src="/bg-2.jpg"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-32 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
       
          </div>
        ),
    },
    {
        title: "05.",
        content: (
          <div>
            <p className="text-slate-800 font-bold text-xl mb-4">
              Project Review
            </p>       
            <Image
                src="/timeline.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover  h-32 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
    
          </div>
        ),
      },
  ];
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <Timeline data={data} />
    </div>
  );
}
