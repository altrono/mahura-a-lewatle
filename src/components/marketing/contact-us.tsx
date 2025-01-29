import React from 'react'
import CustomForm from '../custom-form'


export function ContactUs() {
  return (
    <section id="contact"   className="py-10 md:px-10 z-30 ">
        
      <div className=" mx-auto px-4 md:px-8 lg:px-10 py-8"> 
            <h2 className="text-lightBlue text-4xl md:text-6xl font-bold ml-8 md:text-center">Contact <span className="text-lightGreen">Us</span></h2>
      </div>
        <div className="flex md:flex-row flex-col gap-10 px-10 max-w-6xl mx-auto">
          <div className="flex-1 text-white order-10 md:order-2 md:pt-10">
            <CustomForm />
          </div>
          <div className="flex-1 order-2 md:order-1 md:py-10">  
            <div className="h-94 w-full ">
                <h2 className="text-3xl text-noire font-semibold mb-4">Contact <span className="">Information</span></h2>
                <p className="text-lg text-noire">
                  We&apos;re always ready to help you. Here&apos;s how you can get in touch with us:
                </p>
                <ul className="list-none  ">
                  <li className="text-slate-800">Email: <a href="mailto:info@mahuralewatle.co.za" className="text-slate-800  hover:underline hover:text-gold font-bold">info@mahuralewatle.co.za</a></li>
                  <li className="text-slate-800 "><a href="+27721896531">Tel: <span className="text-slate-800  hover:underline hover:text-gold font-bold">+27 72 189 6531</span></a></li>
                  <li className="text-slate-800">Address:  <span className="text-slate-800 font-bold">Western Cape | North-West | Northern Cape | Gauteng</span></li>
                </ul>
            </div>
          </div>
        </div>
      </section>
  )
}


