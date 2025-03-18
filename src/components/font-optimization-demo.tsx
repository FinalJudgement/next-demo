"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function FontOptimizationDemo() {
  const [optimized, setOptimized] = useState(true)
  const [showLayoutShift, setShowLayoutShift] = useState(false)

  // Simulate font loading delay and layout shift
  useEffect(() => {
    if (!optimized) {
      const timer = setTimeout(() => {
        setShowLayoutShift(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowLayoutShift(false)
    }
  }, [optimized])

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="demo" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="demo"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Font Loading Demo
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Implementation Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Font Loading Simulation</h3>
                <div className="flex items-center space-x-2">
                  <Switch id="optimized-fonts" checked={optimized} onCheckedChange={setOptimized} />
                  <Label htmlFor="optimized-fonts" className="text-white">
                    Next.js Font Optimization
                  </Label>
                </div>
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Benefits of Next.js Font Module:</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Zero layout shift when loading fonts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Automatic self-hosting of font files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Improved privacy (no requests to Google)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Reduced network requests</span>
                  </li>
                </ul>
              </div>

              <Button onClick={() => setOptimized(!optimized)} variant="outline" className="w-full">
                Toggle Font Optimization
              </Button>
            </div>

            <div className="md:w-1/2 bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-4">Font Loading Preview</h3>

              <div className="bg-white rounded-lg p-4 h-64 overflow-hidden">
                {optimized ? (
                  <div className="transition-all duration-300">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Optimized Font Loading</h2>
                    <p className="text-gray-600 font-serif">
                      This text uses Next.js font optimization to prevent layout shift and ensure text is visible
                      immediately with the correct font, even while the font is loading.
                    </p>
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                      <p className="text-gray-700 font-serif">
                        Notice how the text remains stable and doesn't jump around when fonts load.
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="h-6 bg-gray-200 w-full rounded"></div>
                    </div>
                  </div>
                ) : (
                  <div className="transition-all duration-300">
                    <h2
                      className={`text-2xl font-bold text-gray-800 mb-2 ${showLayoutShift ? "font-serif" : "font-sans"}`}
                      style={{
                        transform: showLayoutShift ? "translateX(8px)" : "translateX(0)",
                        width: showLayoutShift ? "95%" : "100%",
                      }}
                    >
                      Unoptimized Font Loading
                    </h2>
                    <p
                      className={`text-gray-600 ${showLayoutShift ? "font-serif" : "font-sans"}`}
                      style={{
                        transform: showLayoutShift ? "translateX(5px)" : "translateX(0)",
                        width: showLayoutShift ? "97%" : "100%",
                      }}
                    >
                      Without Next.js font optimization, text shifts as custom fonts load, causing layout instability
                      and a poor user experience.
                    </p>
                    <div
                      className="mt-4 p-3 bg-gray-100 rounded-lg"
                      style={{
                        transform: showLayoutShift ? "translateY(4px)" : "translateY(0)",
                      }}
                    >
                      <p
                        className={`text-gray-700 ${showLayoutShift ? "font-serif" : "font-sans"}`}
                        style={{
                          letterSpacing: showLayoutShift ? "0.5px" : "normal",
                        }}
                      >
                        Notice how the text shifts position when fonts load, causing layout instability.
                      </p>
                    </div>
                    <div
                      className="mt-4"
                      style={{
                        transform: showLayoutShift ? "translateY(8px)" : "translateY(0)",
                      }}
                    >
                      <div className="h-6 bg-gray-200 w-full rounded"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 p-3 bg-neutral-900 rounded-lg text-sm text-neutral-300">
                <div className="flex justify-between items-center">
                  <span>Font Optimization:</span>
                  <span className={optimized ? "text-green-400" : "text-red-400"}>
                    {optimized ? "Enabled" : "Disabled"}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Layout Shift:</span>
                  <span className={optimized ? "text-green-400" : "text-red-400"}>
                    {optimized ? "Prevented" : "Visible"}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Font Display:</span>
                  <span className={optimized ? "text-green-400" : "text-yellow-400"}>
                    {optimized ? "Immediate" : showLayoutShift ? "Swapped" : "Fallback"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {`// Using the Next.js Font module
import { Inter, Roboto_Mono } from 'next/font/google'

// Initialize the fonts with options
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={${"`${inter.variable} ${roboto_mono.variable}`"}}>
      <body>
        {children}
      </body>
    </html>
  )
}

// In your CSS or Tailwind config:
// font-sans: var(--font-inter);
// font-mono: var(--font-roboto-mono);

// Benefits:
// - Zero layout shift
// - Self-hosted fonts (no external requests)
// - Improved performance and privacy
// - Automatic font optimization
`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

