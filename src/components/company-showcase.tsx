"use client"

import { useState } from "react"
import Image from "next/image"

type Company = {
  id: number
  name: string
  logo: string
  description: string
  url: string
}

const companies: Company[] = [
  {
    id: 1,
    name: "Vercel",
    logo: "/vercel.png?height=40&width=40",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    url: "https://vercel.com",
  },
  {
    id: 2,
    name: "Netflix",
    logo: "/netflix.svg?height=40&width=40",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    url: "https://netflix.com",
  },
  {
    id: 3,
    name: "TikTok",
    logo: "/tiktok.png?height=40&width=40",
    description: "A short-form, video-sharing app that allows users to create and share 15-second videos on any topic.",
    url: "https://tiktok.com",
  },
  {
    id: 4,
    name: "Twitch",
    logo: "/twitch.png?height=40&width=40",
    description:
      "An interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.",
    url: "https://twitch.tv",
  },
  {
    id: 5,
    name: "Notion",
    logo: "/notion.png?height=40&width=40",
    description: "All-in-one workspace for your notes, tasks, wikis, and databases.",
    url: "https://notion.so",
  },
  {
    id: 6,
    name: "Airbnb",
    logo: "/airbnb.png?height=40&width=40",
    description:
      "An online marketplace that connects people who want to rent out their homes with people looking for accommodations.",
    url: "https://airbnb.com",
  },
  {
    id: 7,
    name: "Uber",
    logo: "/uber.png?height=40&width=40",
    description: "A technology platform that uses a massive network to connect riders to drivers.",
    url: "https://uber.com",
  },
  {
    id: 8,
    name: "Shopify",
    logo: "/shopify.webp?height=40&width=40",
    description: "A complete commerce platform that lets you start, grow, and manage a business.",
    url: "https://shopify.com",
  },
]

export default function CompanyShowcase() {
  const [activeCompany, setActiveCompany] = useState<number | null>(null)

  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="relative bg-neutral-800 border border-neutral-700 rounded-full px-8 py-4 max-w-3xl">
        <div className="flex items-center justify-center">
          <h3 className="text-lg font-medium mr-4 text-neutral-300">Trusted by</h3>
          <div className="relative h-12 w-[240px] flex items-center">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className={`absolute cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 p-1 transition-all duration-300 ${activeCompany === company.id ? "z-10" : "z-0"
                  }`}
                style={{
                  left: `${index * 30}px`,
                  transform: activeCompany === company.id ? "scale(1.2) translateY(-20px)" : "scale(1) translateY(0)",
                  zIndex: activeCompany === company.id ? 10 : 0,
                }}
                onMouseEnter={() => setActiveCompany(company.id)}
                onMouseLeave={() => setActiveCompany(null)}
                aria-label={company.name}
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                {activeCompany === company.id && (
                  <div
                    className="absolute top-full left-1/2 mt-2 w-48 p-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg"
                    style={{
                      transform: "translateX(-50%)",
                      opacity: 1,
                      animation: "fadeIn 0.2s ease-in-out",
                    }}
                  >
                    <div className="text-sm font-medium text-white">{company.name}</div>
                    <div className="text-xs text-neutral-400 mt-1">{company.description}</div>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-400 mt-1 block"
                    >
                      Visit website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </div>
  )
}

