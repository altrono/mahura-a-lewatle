import { SiteHeader } from "@/components/marketing/site-header"
import { Footer } from "@/components/marketing/footer"
import { ScrollToTop } from "@/components/marketing/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"



export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
        <SiteHeader />  
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
      <ScrollToTop />
    </div>
  )
}

