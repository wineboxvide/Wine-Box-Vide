import Hero from "@/components/landing/Hero"
import Problem from "@/components/landing/Problem"
import Features from "@/components/landing/Features"
import Pricing from "@/components/landing/Pricing"
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
      <FAQ />
      <FinalCta />
      {config.features.waitlist && <Waitlist />}
    </>
  )
}
