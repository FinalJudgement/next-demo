"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Code, Database, Layers, Palette, Server, Home } from "lucide-react"

type NavItem = {
  href: string
  label: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    href: "/intro",
    label: "Introduction",
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "/presentation/developer-experience",
    label: "Development Experience",
    icon: <Code className="h-4 w-4" />,
  },
  {
    href: "/presentation/rendering",
    label: "Rendering",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    href: "/presentation/data-fetching",
    label: "Data Fetching",
    icon: <Database className="h-4 w-4" />,
  },
  {
    href: "/presentation/ui-experience",
    label: "UI Experience",
    icon: <Palette className="h-4 w-4" />,
  },
  {
    href: "/presentation/deployment",
    label: "Deployment",
    icon: <Server className="h-4 w-4" />,
  },
]

export function HorizontalNavPill() {
  const pathname = usePathname()

  // Find the active index based on the current pathname
  const activeIndex = navItems.findIndex(
    (item) => pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/intro"),
  )

  return (
    <TooltipProvider delayDuration={300}>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full py-2 px-3 shadow-lg">
          <div className="relative">
            {/* Animated background for the active tick */}
            {activeIndex >= 0 && (
              <div
                className="absolute w-8 h-8 bg-purple-600 rounded-full -z-10"
              />
            )}

            {/* Navigation items */}
            <div className="flex gap-2">
              {navItems.map((item, index) => (
                <Tooltip key={item.href}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${index === activeIndex ? "text-white" : "text-neutral-400 hover:text-white"
                        }`}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-neutral-800 text-white border-neutral-700">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

