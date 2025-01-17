import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "MAHURA A LEWATLE PTY (LTD)| Reliable Water Supply & Groundwater Services | Borehole Drilling, Geophysical Surveys, and More",
  description: "We specialize in sustainable water solutions, including rural area water supply, groundwater assessment, and geophysical surveys. Serving communities with expert borehole drilling and management across South Africa, including Western Cape, North West, Northern Cape, and Gauteng.",
  keywords: "water supply, rural water solutions, borehole drilling, groundwater assessment, geophysical surveys, geological mapping, water management, sustainable water solutions, rural water supply services, aquifer development, groundwater management, South Africa, Western Cape, North West, Northern Cape, Gauteng",
  icons: {
    icon: '/logo.png'
  },
  openGraph: {
    title: "Reliable Water Supply & Groundwater Services | Borehole Drilling, Geophysical Surveys, and More",
    description: "Providing sustainable water solutions including borehole drilling, groundwater assessment, and geophysical surveys. Helping rural areas access clean water with expert services in South Africa, including Western Cape, North West, Northern Cape, and Gauteng.",
    url: "https://mahura-a-lewatle.vercel.app/", // Replace with your actual website URL
    // Replace with an actual image URL for social media sharing // Add a relevant image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Water Supply & Groundwater Services | Borehole Drilling, Geophysical Surveys, and More",
    description: "Expert borehole drilling, groundwater assessment, and sustainable water management solutions for rural communities across South Africa, including Western Cape, North West, Northern Cape, and Gauteng.",
    
    // Replace with actual image URL for Twitter sharing // Add a relevant image URL
  },
  robots: {
    index: true,
    follow: true,
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

