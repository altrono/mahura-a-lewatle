import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 z-40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src={'/logo.png'} alt="logo" width={45} height={45} className="rounded-full" />
              <span className="text-md font-bold text-white"> <span className="text-teal-500">MAHURA A LEWATLE</span> <br />  <span>TRADING  (PTY) LTD</span></span>
            </Link>
            <p className="text-sm">
              Empowering businesses with professional remote team solutions for sustainable growth and success.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Supports & Contacts</h3>
            <ul className="space-y-2">
              <li key={"email"}>
                Email: <Link href="mailto:info@mahuralewatle.co.za?subject=Hello&body=I would like to get in touch." className="text-sm hover:text-teal-500 transition-all duration-300">
                    info@mahuralewatle.co.za
                    </Link>
                </li>
                <li key={"phone"}>
                Phone: <Link href="tel:+27721896531" className="text-sm hover:text-teal-500 transition-all duration-300">
                     +27 72 189 6531
                  </Link>
              </li>
              {["Locations : Western Cape | North-West | Northern Cape | Gauteng",].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link key={index} href="#" className="hover:text-teal-500 transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p className="text-md font-bold">&copy; 2025 Altro<span className="text-teal-500 text-md font-bold">Tech</span> . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

