/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageSquare, Share2, Star, Check } from "lucide-react"
import Image from "next/image"

export function TailwindComponentsDemo() {
  const [activeTab, setActiveTab] = useState("components")

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="components" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="components"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Component Examples
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Implementation Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="components" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Premium Headphones</CardTitle>
                    <CardDescription>Wireless Noise Cancelling</CardDescription>
                  </div>
                  <Badge className="bg-purple-600 hover:bg-purple-700">New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                  <Image
                    width={300}
                    height={500}
                    src="/headphones.webp?height=300&width=500"
                    alt="Headphones"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-neutral-400 ml-1">(128)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">$299</span>
                    <span className="text-sm text-neutral-400 line-through ml-2">$399</span>
                  </div>
                  <div className="text-sm text-green-500 flex items-center">
                    <Check className="w-4 h-4 mr-1" /> In Stock
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" /> Wishlist
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
              </CardFooter>
            </Card>

            {/* Social Post Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Jane Doe</div>
                    <div className="text-xs text-neutral-400">Posted 2 hours ago</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Just finished building my first Next.js application with Tailwind CSS. The developer experience is
                  amazing! 🚀
                </p>
                <div className="relative aspect-video rounded-md overflow-hidden">
                  <Image
                    width={300}
                    height={500}
                    src="/webapp.png"
                    alt="Next.js App Screenshot"
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4 mr-2" /> 24
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" /> 8
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {
                '// Component-driven development with Tailwind CSS\nimport { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"\nimport { Badge } from "@/components/ui/badge"\nimport { Button } from "@/components/ui/button"\n\n// Example product data\nconst exampleProduct = {\n  name: "Awesome Product",\n  category: "Electronics",\n  image: "/placeholder.svg",\n  price: 199,\n  originalPrice: 249,\n  isNew: true,\n};\n\nexport function ProductCard() {\n  return (\n    <Card className="overflow-hidden">\n      <CardHeader className="pb-2">\n        <div className="flex justify-between items-start">\n          <div>\n            <CardTitle>{exampleProduct.name}</CardTitle>\n            <p className="text-sm text-neutral-500">{exampleProduct.category}</p>\n          </div>\n          {exampleProduct.isNew && (\n            <Badge className="bg-purple-600 hover:bg-purple-700">New</Badge>\n          )}\n        </div>\n      </CardHeader>\n      <CardContent>\n        <div className="relative aspect-video rounded-md overflow-hidden mb-4">\n          <img \n            src={exampleProduct.image || "/placeholder.svg"} \n            alt={exampleProduct.name} \n            className="object-cover w-full h-full"\n          />\n        </div>\n        <div className="flex justify-between items-center">\n          <div>\n            <span className="text-2xl font-bold">${exampleProduct.price}</span>\n            {exampleProduct.originalPrice && (\n              <span className="text-sm text-neutral-400 line-through ml-2">\n                ${exampleProduct.originalPrice}\n              </span>\n            )}\n          </div>\n          <Button className="bg-purple-600 hover:bg-purple-700">\n            Add to Cart\n          </Button>\n        </div>\n      </CardContent>\n    </Card>\n  )\n}\n\n// Benefits:\n// - Rapid UI development with utility classes\n// - Consistent design system\n// - Responsive by default\n// - Easy to customize and extend'
              }
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

