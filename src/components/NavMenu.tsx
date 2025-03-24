"use client"

import { useEffect, useState } from "react"
import { TableOfContents, type TOCItem } from "@/components/table-of-contents"
import { cn } from "@/lib/utils"

interface NavMenuProps {
  items: TOCItem[]
  className?: string
}

export function NavMenu({ items, className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  // We've removed the code that prevents scrolling to ensure the project is scrollable

  return (
    <>
      {/* Backdrop - only visible on mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 gsap-no-transform"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Burger Menu Button */}
      <div className={cn("fixed top-6 right-6 lg:right-8 z-50 gsap-no-transform", className)}>
        <button
          onClick={toggleMenu}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 p-2 shadow-lg transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 backdrop-blur-sm"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              // X icon when menu is open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Burger icon when menu is closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Table of Contents Menu */}
        <div
          className={cn(
            "absolute right-0 top-16 w-72 max-h-[80vh] overflow-y-auto transform rounded-lg border bg-slate-900 p-6 shadow-xl transition-all duration-300 ease-in-out gsap-no-transform",
            isOpen ? "translate-x-0 opacity-100 text-slate-200" : "translate-x-4 opacity-0 pointer-events-none"
          )}
          aria-hidden={!isOpen}
        >
          <TableOfContents 
            items={items} 
            className="" 
            onLinkClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </>
  )
}
