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
      const headings = Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]"))

      const visibleHeadings = headings.filter((heading) => {
        const rect = heading.getBoundingClientRect()
        return rect.top >= 0 && rect.top <= 250
      })

      if (visibleHeadings.length > 0) {
        setActiveHeading(visibleHeadings[0].id)
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
                "inline-block no-underline transition-colors hover:text-foreground",
                item.id === activeHeading ? "font-medium text-foreground" : "text-muted-foreground",
              )}
              onClick={(e) => {
                e.preventDefault()
                
                // Get the target element
                const targetElement = document.querySelector(`#${item.id}`);
                
                if (targetElement) {
                  // Get the element's position relative to the document
                  const rect = targetElement.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const targetPosition = rect.top + scrollTop;
                  
                  // Scroll to the position
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
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
