import Hero from "@/components/landing/Hero"
import Problem from "@/components/landing/Problem"
import Features from "@/components/landing/Features"
import Pricing from "@/components/landing/Pricing"
import ForBusiness from "@/components/landing/ForBusiness"
import HowItWorks from "@/components/landing/HowItWorks"
import About from "@/components/landing/About"
import Contact from "@/components/landing/Contact"
import WhatsAppButton from "@/components/landing/WhatsAppButton"
import Wivi from "@/components/landing/Wivi"
import FAQ from "@/components/landing/FAQ"
import FinalCta from "@/components/landing/FinalCta"
import Waitlist from "@/components/landing/Waitlist"
import config from "@/config"

export const metadata = {
  openGraph: {
    title: config.social.title,
    description: config.social.description,
    url: "/",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      {config.features.pricing && <Pricing />}
      <ForBusiness />
      <HowItWorks />
      <About />
      <Contact />
      <FAQ />
      <FinalCta />
     {config.features.waitlist && <Waitlist />}
     <Wivi />
     <WhatsAppButton />
    </>
  )
}
