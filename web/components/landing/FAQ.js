"use client"


import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import config from "@/config"

export default function FAQ() {
const sectionRef = useRef(null)
  const { eyebrow, title, items } = config.landing.faq
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const section = sectionRef.current
  if (!section) return

  const header = section.querySelector(".faq-header")
const questions = section.querySelectorAll(".faq-item")


  const ctx = gsap.context(() => {
    if (header) {
if (questions.length) {
  gsap.fromTo(
    questions,
    { y: 18, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: questions[0],
        start: "top 92%",
        end: "top 62%",
        scrub: 1.3,
      },
    }
  )
}
      gsap.fromTo(
        header,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 62%",
            scrub: 1.4,
          },
        }
      )
    }
  }, section)

  return () => ctx.revert()
}, [])

  return (
    <section
  ref={sectionRef}
  id="faq"
  className="border-t border-base-200 bg-base-200/40 py-20 md:py-28"
>
      <div className="mx-auto max-w-3xl px-4">
        <div className="faq-header text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="faq-item group rounded-xl border border-base-300 bg-base-100 p-5 transition open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="text-base-content/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-base-content/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
