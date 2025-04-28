"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type TOCItem = {
  id: string
  title: string
  level: number
  items?: TOCItem[]
}

interface TableOfContentsProps {
  items: TOCItem[]
  activeId?: string
  className?: string
  onLinkClick?: () => void
}

export function TableOfContents({ items, activeId, className, onLinkClick }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState<string>(activeId || "")

  useEffect(() => {
    if (activeId) {
      setActiveHeading(activeId)
      return
    }

    const handleScroll = () => {
      // Get all panels
      const panels = Array.from(document.querySelectorAll(".panel"))
      
      // Calculate which panel should be active based on scroll position
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Find the panel index based on scroll position
      // Each panel is 100vh tall
      const panelIndex = Math.round(scrollPosition / windowHeight)
      
      // Make sure we have a valid panel index
      if (panelIndex >= 0 && panelIndex < panels.length) {
        // Get the panel id and set it as active
        const panelId = panels[panelIndex].id
        if (panelId) {
          setActiveHeading(panelId)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeId])

  return (
    <div className={cn("w-full", className)}>
      <h4 className="mb-4 text-sm font-semibold">Table of Contents</h4>
      <Tree items={items} activeHeading={activeHeading} onLinkClick={onLinkClick} />
    </div>
  )
}

interface TreeProps {
  items: TOCItem[]
  level?: number
  activeHeading?: string
  onLinkClick?: () => void
}

function Tree({ items, level = 1, activeHeading, onLinkClick }: TreeProps) {
  return items?.length ? (
    <ul className={cn("m-0 list-none", level !== 1 && "ml-4")}>
      {items.map((item, index) => {
        return (
          <li key={index} className="mt-2">
            <Link
              href={`#${item.id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-slate-400",
                item.id === activeHeading ? "font-medium text-amber-300" : " text-slate-200",
              )}
              onClick={(e) => {
                e.preventDefault()
                
                // Get the target panel index from the id (e.g., "panel-2" -> 2)
                const panelIndex = parseInt(item.id.split('-')[1]) - 1;
                
                if (!isNaN(panelIndex)) {
                  // Calculate the exact scroll position for this panel
                  // Each panel is 100vh, so we multiply by the panel index
                  const targetPosition = panelIndex * window.innerHeight - (35 * panelIndex);
                  
                  // Scroll to the exact position of the panel
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                  });
                }
                
                if (onLinkClick) {
                  onLinkClick()
                }
              }}
            >
              {item.title}
            </Link>
            {item.items?.length ? <Tree items={item.items} level={level + 1} activeHeading={activeHeading} onLinkClick={onLinkClick} /> : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
