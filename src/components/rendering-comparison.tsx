"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Zap, Globe, ExternalLink } from "lucide-react"

export default function RenderingComparison() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  // Simulated performance metrics
  const metrics = {
    csr: {
      ttfb: 120, // milliseconds
      lcp: 2800, // milliseconds
      tti: 3200, // milliseconds
      description:
        "Client-side rendering loads a minimal HTML shell and renders content in the browser with JavaScript.",
    },
    ssr: {
      ttfb: 280, // milliseconds
      lcp: 1200, // milliseconds
      tti: 1800, // milliseconds
      description: "Server-side rendering generates HTML on each request, delivering a complete page to the browser.",
    },
    ssg: {
      ttfb: 80, // milliseconds
      lcp: 800, // milliseconds
      tti: 1400, // milliseconds
      description: "Static site generation pre-renders pages at build time, delivering cached HTML instantly.",
    },
    isr: {
      ttfb: 90, // milliseconds
      lcp: 850, // milliseconds
      tti: 1450, // milliseconds
      description: "Incremental static regeneration combines static generation with periodic updates after deployment.",
    },
  }

  const runDemo = (type: string) => {
    setIsLoading(true)
    setActiveDemo(null)

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
      setActiveDemo(type)
    }, 1500)
  }

  const getProgressColor = (value: number, metric: string) => {
    if (metric === "ttfb") {
      if (value < 100) return "bg-green-500"
      if (value < 200) return "bg-yellow-500"
      return "bg-red-500"
    }

    if (metric === "lcp") {
      if (value < 1000) return "bg-green-500"
      if (value < 2000) return "bg-yellow-500"
      return "bg-red-500"
    }

    if (metric === "tti") {
      if (value < 1500) return "bg-green-500"
      if (value < 2500) return "bg-yellow-500"
      return "bg-red-500"
    }

    return "bg-blue-500"
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button
          onClick={() => runDemo("csr")}
          className={`${activeDemo === "csr" ? "bg-blue-600 hover:bg-blue-700" : "bg-neutral-800 hover:bg-neutral-700"}`}
          disabled={isLoading}
        >
          Client-Side Rendering
        </Button>
        <Button
          onClick={() => runDemo("ssr")}
          className={`${activeDemo === "ssr" ? "bg-green-600 hover:bg-green-700" : "bg-neutral-800 hover:bg-neutral-700"}`}
          disabled={isLoading}
        >
          Server-Side Rendering
        </Button>
        <Button
          onClick={() => runDemo("ssg")}
          className={`${activeDemo === "ssg" ? "bg-purple-600 hover:bg-purple-700" : "bg-neutral-800 hover:bg-neutral-700"}`}
          disabled={isLoading}
        >
          Static Site Generation
        </Button>
        <Button
          onClick={() => runDemo("isr")}
          className={`${activeDemo === "isr" ? "bg-cyan-600 hover:bg-cyan-700" : "bg-neutral-800 hover:bg-neutral-700"}`}
          disabled={isLoading}
        >
          Incremental Static Regeneration
        </Button>
      </div>

      {isLoading && (
        <Card className="border-neutral-800 bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white">Loading Demo...</CardTitle>
            <CardDescription>Simulating page load with selected rendering strategy</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-10">
            <div className="w-16 h-16 border-4 border-neutral-700 border-t-purple-500 rounded-full animate-spin"></div>
          </CardContent>
        </Card>
      )}

      {activeDemo && !isLoading && (
        <Card className="border-neutral-800 bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white">
              {activeDemo === "csr" && "Client-Side Rendering Results"}
              {activeDemo === "ssr" && "Server-Side Rendering Results"}
              {activeDemo === "ssg" && "Static Site Generation Results"}
              {activeDemo === "isr" && "Incremental Static Regeneration Results"}
            </CardTitle>
            <CardDescription>{metrics[activeDemo as keyof typeof metrics].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Time to First Byte (TTFB)</span>
                </div>
                <span className="text-sm font-medium text-white">
                  {metrics[activeDemo as keyof typeof metrics].ttfb}ms
                </span>
              </div>
              <Progress
                value={100 - metrics[activeDemo as keyof typeof metrics].ttfb / 5}
                className={`h-2 ${getProgressColor(metrics[activeDemo as keyof typeof metrics].ttfb, "ttfb")}`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-white">Largest Contentful Paint (LCP)</span>
                </div>
                <span className="text-sm font-medium text-white">
                  {metrics[activeDemo as keyof typeof metrics].lcp}ms
                </span>
              </div>
              <Progress
                value={100 - metrics[activeDemo as keyof typeof metrics].lcp / 40}
                className={`h-2 ${getProgressColor(metrics[activeDemo as keyof typeof metrics].lcp, "lcp")}`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Time to Interactive (TTI)</span>
                </div>
                <span className="text-sm font-medium text-white">
                  {metrics[activeDemo as keyof typeof metrics].tti}ms
                </span>
              </div>
              <Progress
                value={100 - metrics[activeDemo as keyof typeof metrics].tti / 40}
                className={`h-2 ${getProgressColor(metrics[activeDemo as keyof typeof metrics].tti, "tti")}`}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <p className="text-sm text-neutral-400 mb-2">
              Note: These metrics are simulated for demonstration purposes. Actual performance will vary based on
              network conditions, server location, and application complexity.
            </p>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <span>Source: Web Vitals metrics from Google</span>
              <a
                href="https://web.dev/articles/vitals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                <span>web.dev/vitals</span>
              </a>
            </div>
          </CardFooter>
        </Card>
      )}

      {!activeDemo && !isLoading && (
        <Card className="border-neutral-800 bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white">Interactive Demo</CardTitle>
            <CardDescription>Select a rendering strategy above to see performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-16 text-neutral-500">
            Click any button above to start the demo
          </CardContent>
        </Card>
      )}
    </div>
  )
}

