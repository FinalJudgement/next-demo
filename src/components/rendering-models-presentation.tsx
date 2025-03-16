import Image from "next/image"
import { Code, Server, Zap, RefreshCw, Globe, ExternalLink, FileText, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RenderingComparison from "@/components/rendering-comparison"
import ChatInterfaceWireframe from "@/components/chat-interface-wireframe"
import StaticContentWireframe from "@/components/static-content-wireframe"

export default function RenderingModelsPresentation() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-neutral-200">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Company Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-semibold">Next.js Rendering Models</span>
          </div>

          {/* Search placeholder */}
          <div className="hidden md:flex relative w-full max-w-xs mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white"
                placeholder="Search documentation..."
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white">
              Resources
            </Button>
            <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white">
              GitHub
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile search - shown only on mobile */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white"
              placeholder="Search documentation..."
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
                  Visual Guide
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  <span className="text-purple-400">Next.js Rendering</span> Visualized
                </h1>
                <p className="text-xl text-neutral-400">
                  Explore how Next.js combines CSR, SSR, SSG, and ISR for optimal performance
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="inline-block rounded-lg bg-neutral-800/50 px-3 py-1 text-sm text-neutral-400">
                    Scroll down to explore rendering strategies
                  </div>
                </div>
                <div className="text-sm text-neutral-500">
                  Choose the right Next.js rendering strategy for your use case
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-purple-900/20 rounded-lg"></div>
                <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-sm text-neutral-400 font-mono">rendering-models.js</div>
                  </div>
                  <div className="bg-neutral-950 rounded-md p-4 font-mono text-sm text-neutral-300">
                    <p className="text-blue-400">// Next.js supports multiple rendering strategies</p>
                    <p className="text-green-400">export default function Page() {"{"}</p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-purple-400">// Choose the right strategy for your needs</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-yellow-400">// 1. Client-Side Rendering (CSR)</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-yellow-400">// 2. Server-Side Rendering (SSR)</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-yellow-400">// 3. Static Site Generation (SSG)</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-yellow-400">// 4. Incremental Static Regeneration (ISR)</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-purple-400">return (</span>
                    </p>
                    <p className="text-neutral-300 pl-8">
                      <span className="text-blue-400">{"<div>Optimal Performance</div>"}</span>
                    </p>
                    <p className="text-neutral-300 pl-4">
                      <span className="text-purple-400">)</span>
                    </p>
                    <p className="text-green-400">{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rendering Models Definitions */}
        <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Understanding Rendering Models
              </h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                Next.js offers four primary rendering strategies, each with unique benefits and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Client-Side Rendering (CSR)</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Renders pages directly in the browser using JavaScript. The server sends a minimal HTML shell and
                    the JavaScript needed to render the page.
                  </p>
                  <div className="bg-neutral-800/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-2">How it works:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-neutral-400 pl-2">
                      <li>Server sends minimal HTML and JavaScript</li>
                      <li>Browser downloads and executes JavaScript</li>
                      <li>JavaScript renders the page content</li>
                      <li>Page becomes interactive</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Server className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Server-Side Rendering (SSR)</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Generates HTML on the server for each request. The server sends fully rendered HTML to the browser,
                    which is then hydrated with JavaScript.
                  </p>
                  <div className="bg-neutral-800/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-2">How it works:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-neutral-400 pl-2">
                      <li>User requests a page</li>
                      <li>Server renders HTML for that specific request</li>
                      <li>Browser displays HTML immediately</li>
                      <li>JavaScript hydrates the page to make it interactive</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Static Site Generation (SSG)</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Generates HTML at build time, not on each request. The pre-rendered HTML is reused for every
                    request, making it extremely fast.
                  </p>
                  <div className="bg-neutral-800/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-2">How it works:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-neutral-400 pl-2">
                      <li>HTML is generated during build time</li>
                      <li>HTML is stored and reused for all requests</li>
                      <li>Content is served from CDN for maximum speed</li>
                      <li>JavaScript hydrates the page to make it interactive</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/10 to-cyan-800/5 rounded-xl overflow-hidden border border-cyan-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Incremental Static Regeneration (ISR)</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Creates static pages at build time, but can update specific pages in the background after deployment
                    at a specified interval.
                  </p>
                  <div className="bg-neutral-800/50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-2">How it works:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-neutral-400 pl-2">
                      <li>Initial HTML is generated at build time like SSG</li>
                      <li>Pages are served from cache for speed</li>
                      <li>Pages are regenerated in the background at specified intervals</li>
                      <li>Updated content is available without rebuilding the entire site</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Chat Interface Example */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Next.js Rendering in Action
              </h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                See how different rendering strategies work together in a real-world Next.js application
              </p>
            </div>

            <div className="mb-16">
              <ChatInterfaceWireframe />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Why Use Multiple Rendering Strategies?</h3>
                <div className="space-y-4 text-neutral-300">
                  <p>
                    Next.js applications benefit from a hybrid approach that leverages the strengths of each rendering
                    strategy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>
                      <span className="text-purple-400 font-semibold">Static parts</span> (SSG) - Navigation, headers,
                      footers, and UI elements that rarely change
                    </li>
                    <li>
                      <span className="text-green-400 font-semibold">Dynamic, shared content</span> (ISR) - Product
                      listings, blog posts, or user directories that update periodically
                    </li>
                    <li>
                      <span className="text-green-400 font-semibold">User-specific content</span> (SSR) - Personalized
                      data that needs SEO or initial fast loading
                    </li>
                    <li>
                      <span className="text-blue-400 font-semibold">Interactive elements</span> (CSR) - Forms, chat
                      interfaces, and real-time features
                    </li>
                  </ul>
                  <p className="italic text-neutral-400 text-sm mt-4">
                    "The best Next.js applications use a mix of rendering strategies to optimize for both performance
                    and user experience."
                    <a
                      href="https://nextjs.org/docs/app/building-your-application/rendering"
                      className="text-purple-400 ml-1 inline-flex items-center gap-1"
                    >
                      <span>Next.js Documentation</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Benefits of the Next.js Hybrid Approach</h3>
                <div className="space-y-4">
                  <div className="bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <h4 className="text-lg font-medium text-white">Optimized Performance</h4>
                    </div>
                    <p className="text-neutral-300 text-sm">
                      Fast initial page loads with SSG/ISR while maintaining interactivity with CSR where needed.
                    </p>
                  </div>
                  <div className="bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-green-400" />
                      <h4 className="text-lg font-medium text-white">Better SEO</h4>
                    </div>
                    <p className="text-neutral-300 text-sm">
                      Search engines see fully rendered content for important pages while dynamic parts can be
                      client-rendered.
                    </p>
                  </div>
                  <div className="bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="h-5 w-5 text-blue-400" />
                      <h4 className="text-lg font-medium text-white">Reduced Server Load</h4>
                    </div>
                    <p className="text-neutral-300 text-sm">
                      Static parts are served from CDN, reducing the computational burden on your servers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-16 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Interactive Comparison</h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                Compare performance metrics across different Next.js rendering strategies
              </p>
            </div>

            <div className="mb-16">
              <Tabs defaultValue="demo" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8 bg-neutral-800">
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
                <TabsContent value="demo" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
                  <RenderingComparison />
                </TabsContent>
                <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
                  <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
                    <pre className="text-neutral-300">
                      {`// Example implementation of different rendering strategies in Next.js

// 1. Client-Side Rendering (CSR)
'use client'
import { useEffect, useState } from 'react'

export function ClientSideRendered() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/product')
      const data = await res.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [])
  
  if (loading) return <div>Loading...</div>
  return <div>{data?.name} - {data?.price}</div>
}

// 2. Server-Side Rendering (SSR)
// In app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`, 
    { cache: 'no-store' }) // SSR - fetch on each request
  const product = await res.json()
  
  return <div>{product.name} - {product.price}</div>
}

// 3. Static Site Generation (SSG)
// In app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`)
  const product = await res.json()
  
  return <div>{product.name} - {product.price}</div>
}

export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products').then(res => res.json())
  
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

// 4. Incremental Static Regeneration (ISR)
// In app/products/[id]/page.tsx
export default async function ProductPage({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`, 
    { next: { revalidate: 60 } }) // Revalidate every 60 seconds
  const product = await res.json()
  
  return <div>{product.name} - {product.price}</div>
}`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-8 mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                    <div className="relative">
                      <div className="h-[300px] w-full rounded-md overflow-hidden">
                        <img
                          src="https://www.quantamagazine.org/wp-content/uploads/2021/12/Lightning_2880x1620_Lede_Still.jpg"
                          alt="Lightning performance visualization"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                          <div className="text-xs text-white font-medium">Performance Comparison</div>
                          <div className="flex items-end justify-center h-16 mt-2 px-4">
                            <div className="flex flex-col items-center mx-1 w-10">
                              <div className="h-12 w-full bg-blue-600/80 rounded-t-sm"></div>
                              <span className="text-xs mt-1 text-white">CSR</span>
                            </div>
                            <div className="flex flex-col items-center mx-1 w-10">
                              <div className="h-8 w-full bg-green-600/80 rounded-t-sm"></div>
                              <span className="text-xs mt-1 text-white">SSR</span>
                            </div>
                            <div className="flex flex-col items-center mx-1 w-10">
                              <div className="h-4 w-full bg-purple-600/80 rounded-t-sm"></div>
                              <span className="text-xs mt-1 text-white">SSG</span>
                            </div>
                            <div className="flex flex-col items-center mx-1 w-10">
                              <div className="h-5 w-full bg-cyan-600/80 rounded-t-sm"></div>
                              <span className="text-xs mt-1 text-white">ISR</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">Performance Impact</h3>
                  <p className="text-neutral-300">
                    According to research by the HTTP Archive and Google's Core Web Vitals data, Next.js sites using
                    hybrid rendering approaches show:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300 pl-4">
                    <li>Up to 30% improvement in Largest Contentful Paint (LCP) metrics</li>
                    <li>Significantly better First Input Delay (FID) scores</li>
                    <li>Higher conversion rates due to improved user experience</li>
                  </ul>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 mt-2">
                    <span>Source: Web Vitals Impact Report</span>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each Strategy */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Next.js Rendering Strategy Guide
              </h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                Choose the right rendering strategy for each part of your Next.js application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/30">
                <div className="p-1 bg-blue-900/30">
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Client-Side Rendering</h3>
                      <p className="text-blue-300 text-sm">CSR</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                      <h4 className="text-lg font-medium text-white">Best For</h4>
                    </div>
                    <ul className="space-y-2 text-neutral-300 ml-3 pl-4 border-l border-neutral-800">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Highly interactive components (forms, editors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Private dashboards and admin panels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Real-time features (chat, notifications)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>Content that changes based on user interaction</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs text-neutral-500 mt-4 pt-4 border-t border-neutral-800">
                    <code className="bg-neutral-900 px-2 py-1 rounded text-blue-400 font-mono">'use client'</code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-green-800/5 rounded-xl overflow-hidden border border-green-800/30">
                <div className="p-1 bg-green-900/30">
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Server className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Server-Side Rendering</h3>
                      <p className="text-green-300 text-sm">SSR</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                      <h4 className="text-lg font-medium text-white">Best For</h4>
                    </div>
                    <ul className="space-y-2 text-neutral-300 ml-3 pl-4 border-l border-neutral-800">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>User-specific content that needs SEO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Pages with frequently changing data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Content that depends on request-time information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Pages where content varies by user or context</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs text-neutral-500 mt-4 pt-4 border-t border-neutral-800">
                    <code className="bg-neutral-900 px-2 py-1 rounded text-green-400 font-mono">
                      {"{ cache: 'no-store' }"}
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/30">
                <div className="p-1 bg-purple-900/30">
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Static Site Generation</h3>
                      <p className="text-purple-300 text-sm">SSG</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                      <h4 className="text-lg font-medium text-white">Best For</h4>
                    </div>
                    <ul className="space-y-2 text-neutral-300 ml-3 pl-4 border-l border-neutral-800">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Marketing pages and landing pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Blog posts and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Content that rarely changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Pages that need maximum performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Sites with predictable content and URLs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs text-neutral-500 mt-4 pt-4 border-t border-neutral-800">
                    <code className="bg-neutral-900 px-2 py-1 rounded text-purple-400 font-mono">
                      generateStaticParams()
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/5 rounded-xl overflow-hidden border border-cyan-800/30">
                <div className="p-1 bg-cyan-900/30">
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Incremental Static Regeneration</h3>
                      <p className="text-cyan-300 text-sm">ISR</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
                      <h4 className="text-lg font-medium text-white">Best For</h4>
                    </div>
                    <ul className="space-y-2 text-neutral-300 ml-3 pl-4 border-l border-neutral-800">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>E-commerce product pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Content that changes periodically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>High-traffic pages that need caching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Sites with many pages that would be slow to build</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-xs text-neutral-500 mt-4 pt-4 border-t border-neutral-800">
                    <code className="bg-neutral-900 px-2 py-1 rounded text-cyan-400 font-mono">
                      {"{ next: { revalidate: 60 } }"}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSG and ISR for Automated Content Updates */}
        <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Automated Content Updates with Next.js
              </h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                How SSG and ISR revolutionize content-driven websites
              </p>
            </div>

            <div className="mb-16">
              <StaticContentWireframe />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The Traditional Approach</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Updating content on static sites traditionally required a complete rebuild and redeploy:
                  </p>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Manual process</span> - Content changes require developer
                        intervention
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Full rebuilds</span> - Even small changes require rebuilding the
                        entire site
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Deployment delays</span> - Updates take time to propagate to
                        production
                      </span>
                    </li>
                  </ul>
                  <div className="bg-neutral-800/50 p-4 rounded-lg mt-4">
                    <h4 className="text-sm font-medium text-white mb-2">The Problem:</h4>
                    <p className="text-sm text-neutral-400">
                      Static sites offer great performance but traditionally sacrifice content freshness and require
                      significant maintenance overhead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/10 to-cyan-800/5 rounded-xl overflow-hidden border border-cyan-800/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The ISR Solution</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-neutral-300">
                    Incremental Static Regeneration (ISR) solves these problems by automating content updates:
                  </p>
                  <ul className="space-y-2 text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Automatic updates</span> - Pages regenerate in the background at
                        specified intervals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Incremental builds</span> - Only changed pages are rebuilt, not
                        the entire site
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>
                        <span className="font-semibold">Zero downtime</span> - Users always see the latest cached
                        version while updates happen in the background
                      </span>
                    </li>
                  </ul>
                  <div className="bg-neutral-800/50 p-4 rounded-lg mt-4">
                    <h4 className="text-sm font-medium text-white mb-2">The Solution:</h4>
                    <p className="text-sm text-neutral-400">
                      ISR gives you the best of both worlds: the performance of static sites with the freshness of
                      server-rendered content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-800/30 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">The Power of Automated Static Content</h3>
                <p className="text-neutral-400 mt-2">
                  Next.js eliminates the traditional tradeoff between performance and freshness
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-800/50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <h4 className="text-lg font-medium text-white">Set It and Forget It</h4>
                  </div>
                  <p className="text-sm text-neutral-300">
                    Configure revalidation intervals once and let Next.js handle content freshness automatically. No
                    manual rebuilds required.
                  </p>
                </div>

                <div className="bg-neutral-800/50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-cyan-400" />
                    <h4 className="text-lg font-medium text-white">Lightning Fast Delivery</h4>
                  </div>
                  <p className="text-sm text-neutral-300">
                    Serve static HTML from global CDNs for sub-second load times while maintaining content accuracy.
                  </p>
                </div>

                <div className="bg-neutral-800/50 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-green-400" />
                    <h4 className="text-lg font-medium text-white">Seamless Updates</h4>
                  </div>
                  <p className="text-sm text-neutral-300">
                    Content updates flow automatically from your database to your live site without developer
                    intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-neutral-950 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} | Next.js Rendering Models</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                Resources
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                GitHub
              </Button>
            </div>
          </div>
          <div className="mt-4 text-xs text-neutral-600 text-center md:text-left">
            <p>
              Performance metrics based on data from{" "}
              <a href="https://web.dev/vitals" className="text-purple-600 hover:text-purple-500">
                Google Web Vitals
              </a>{" "}
              and{" "}
              <a href="https://nextjs.org/docs" className="text-purple-600 hover:text-purple-500">
                Next.js Documentation
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

