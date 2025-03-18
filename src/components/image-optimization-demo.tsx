"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ImageOptimizationDemo() {
  const [quality, setQuality] = useState(75)
  const [useNextImage, setUseNextImage] = useState(true)

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="demo" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="demo"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Interactive Demo
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
                <h3 className="text-lg font-medium text-white">Image Optimization Controls</h3>
                <div className="flex items-center space-x-2">
                  <Switch id="use-next-image" checked={useNextImage} onCheckedChange={setUseNextImage} />
                  <Label htmlFor="use-next-image" className="text-white">
                    Use Next.js Image
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="quality-slider" className="text-neutral-300">
                    Quality: {quality}%
                  </Label>
                </div>
                <Slider
                  id="quality-slider"
                  min={10}
                  max={100}
                  step={5}
                  value={[quality]}
                  onValueChange={(value) => setQuality(value[0])}
                  className="py-4"
                />
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Benefits of Next.js Image:</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Automatic WebP/AVIF conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Lazy loading by default</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Prevents Cumulative Layout Shift (CLS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Responsive sizing based on viewport</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 bg-neutral-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-4">Image Preview</h3>

              <div className="relative bg-neutral-900 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  {useNextImage ? (
                    <Image
                      src="/borealis.jpg"
                      alt="Aurora Borealis over mountains"
                      width={1920}
                      height={1200}
                      quality={quality}
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <img
                      src="/borealis.jpg"
                      alt="Aurora Borealis over mountains"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {useNextImage ? "Next.js Image" : "Standard HTML Image"}
                </div>
              </div>

              <div className="mt-4 p-3 bg-neutral-900 rounded-lg text-sm text-neutral-300">
                <div className="flex justify-between items-center">
                  <span>Optimization:</span>
                  <span className={useNextImage ? "text-green-400" : "text-red-400"}>
                    {useNextImage ? "Enabled" : "Disabled"}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Quality:</span>
                  <span>{quality}%</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span>Lazy Loading:</span>
                  <span className={useNextImage ? "text-green-400" : "text-red-400"}>
                    {useNextImage ? "Automatic" : "None"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {`// Using the Next.js Image component
import Image from 'next/image'

export function OptimizedImage() {
return (
  <Image
    src="/borealis.jpg"
    alt="Aurora Borealis"
    width={1920}
    height={1200}
    quality={75}
    priority={true}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
  />
)
}

// The Image component automatically:
// - Optimizes images on-demand
// - Converts to modern formats (WebP, AVIF)
// - Resizes for different devices
// - Prevents layout shift
// - Lazy loads images by default
`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

