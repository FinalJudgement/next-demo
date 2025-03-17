import { Code, Server, Zap, Layout, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import CompanyShowcase from "@/components/company-showcase"

export default function PresentationIntro() {
  return (<main className="flex-1">
    {/* Hero Section */}
    <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
              Technical Overview
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              <span className="text-purple-400">Next.js</span> for Modern Web Development
            </h1>
            <p className="text-xl text-neutral-400">
              A powerful React framework for building fast, scalable web applications
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="border-neutral-700 text-neutral-300 bg-neutral-800 hover:text-white"
              >
                View Source Code
              </Button>
            </div>
            <div className="text-sm text-neutral-500">This presentation site is built with Next.js</div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-purple-900/20 rounded-lg"></div>
            <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-neutral-400 font-mono">terminal</div>
              </div>
              <div className="bg-neutral-950 rounded-md p-4 font-mono text-sm text-neutral-300">
                <p className="text-neutral-500">$ # Create a new Next.js project</p>
                <p className="text-green-400">$ npx create-next-app@latest my-app</p>
                <p className="text-neutral-300">
                  ✓ Would you like to use TypeScript? ... <span className="text-purple-400">Yes</span>
                </p>
                <p className="text-neutral-300">
                  ✓ Would you like to use ESLint? ... <span className="text-purple-400">Yes</span>
                </p>
                <p className="text-neutral-300">
                  ✓ Would you like to use Tailwind CSS? ... <span className="text-purple-400">Yes</span>
                </p>
                <p className="text-neutral-300">
                  ✓ Would you like to use the App Router? ... <span className="text-purple-400">Yes</span>
                </p>
                <p className="text-neutral-500 mt-2">$ # Start the development server</p>
                <p className="text-green-400">$ cd my-app && npm run dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What is Next.js Section */}
    <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">What is Next.js?</h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            A modern React framework that brings together the best tools for web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">The Complete Framework</h3>
              <p className="text-neutral-400">
                Created by Vercel in 2016, Next.js has evolved from a simple server-side rendering solution to a
                complete framework for building modern web applications. It's designed to enhance React with
                powerful features while maintaining a great developer experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 bg-neutral-800/50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center text-white font-bold">
                  TS
                </div>
                <span className="font-medium">TypeScript</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-md bg-cyan-500 flex items-center justify-center text-white font-bold">
                  TW
                </div>
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center text-white font-bold">
                  PR
                </div>
                <span className="font-medium">Prisma ORM</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-800/50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center text-white font-bold">
                  AU
                </div>
                <span className="font-medium">Auth.js</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 left-4 bottom-4 bg-purple-900/20 rounded-lg"></div>
            <div className="relative bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">Project Structure</span>
                </div>
                <div className="font-mono text-sm bg-neutral-950 p-4 rounded-md">
                  <div className="text-blue-400">app/</div>
                  <div className="pl-4 text-green-400">page.tsx</div>
                  <div className="pl-4 text-green-400">layout.tsx</div>
                  <div className="pl-4 text-blue-400">api/</div>
                  <div className="pl-8 text-green-400">route.ts</div>
                  <div className="pl-4 text-blue-400">dashboard/</div>
                  <div className="pl-8 text-green-400">page.tsx</div>
                  <div className="text-blue-400">components/</div>
                  <div className="pl-4 text-green-400">ui/</div>
                  <div className="text-blue-400">lib/</div>
                  <div className="pl-4 text-green-400">db.ts</div>
                  <div className="text-blue-400">public/</div>
                  <div className="text-green-400">next.config.js</div>
                  <div className="text-green-400">tailwind.config.js</div>
                  <div className="text-green-400">prisma/schema.prisma</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white text-center mb-8">Key Features for Modern Development</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">TypeScript Integration</CardTitle>
              <CardDescription className="text-neutral-400">
                First-class TypeScript support with built-in types and configurations for type-safe development.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <Server className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Hybrid Rendering</CardTitle>
              <CardDescription className="text-neutral-400">
                Multiple rendering strategies including Server Components, Static Generation, and Client-side
                rendering.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <Layout className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">File-based Routing</CardTitle>
              <CardDescription className="text-neutral-400">
                Intuitive routing system based on the file system, eliminating complex route configurations.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Performance Optimizations</CardTitle>
              <CardDescription className="text-neutral-400">
                Automatic code splitting, image optimization, and font optimization for faster load times.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <GitBranch className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">API Routes</CardTitle>
              <CardDescription className="text-neutral-400">
                Built-in API routes that can connect to any backend service, database, or third-party API.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg
                className="h-10 w-10 text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.27002 6.96002L12 12L20.73 6.96002"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22.08V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <CardTitle className="text-white">Middleware</CardTitle>
              <CardDescription className="text-neutral-400">
                Powerful middleware capabilities for authentication, logging, and request transformation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>

    {/* Company Showcase */}
    <section className="pt-16 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-rows-2 gap-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Trusted Across Industries</h2>
            <p className="text-neutral-400">
              Next.js has become the framework of choice for companies of all sizes across diverse industries. With
              its thriving ecosystem and robust community support, developers can build high-performance
              applications with confidence. The extensive library ecosystem and established best practices make
              Next.js a reliable choice for projects of any scale.
            </p>
            <p className="text-neutral-400">
              From startups to global brands, Next.js powers thousands of applications that serve millions of users
              daily, offering unmatched performance, developer experience, and scalability.
            </p>
          </div>
          <CompanyShowcase />
        </div>
      </div>
    </section>

    {/* Table of Contents */}
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Presentation Overview</h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            A comprehensive look at Next.js and its benefits for modern development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                1
              </div>
              <div>
                <h3 className="font-medium text-white">Introduction to Next.js</h3>
                <p className="text-sm text-neutral-400">Core concepts and architecture</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                2
              </div>
              <div>
                <h3 className="font-medium text-white">Rendering Models & Performance Benefits</h3>
                <p className="text-sm text-neutral-400">SSR, SSG, ISR, and CSR explained</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                3
              </div>
              <div>
                <h3 className="font-medium text-white">Optimization for Faster Loads</h3>
                <p className="text-sm text-neutral-400">Image, font, and script optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                4
              </div>
              <div>
                <h3 className="font-medium text-white">Modern UI Development</h3>
                <p className="text-sm text-neutral-400">Component architecture and styling approaches</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                5
              </div>
              <div>
                <h3 className="font-medium text-white">Data Fetching & API Integrations</h3>
                <p className="text-sm text-neutral-400">Server components, API routes, and data strategies</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                6
              </div>
              <div>
                <h3 className="font-medium text-white">Industry Adoption & Ecosystem</h3>
                <p className="text-sm text-neutral-400">Case studies and community support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                7
              </div>
              <div>
                <h3 className="font-medium text-white">Seamless Integration with Existing Tools</h3>
                <p className="text-sm text-neutral-400">TypeScript, cloud services, and backend compatibility</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                8
              </div>
              <div>
                <h3 className="font-medium text-white">Next.js & AI Integration</h3>
                <p className="text-sm text-neutral-400">Building AI-powered applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                9
              </div>
              <div>
                <h3 className="font-medium text-white">Developer Experience & Cost Efficiency</h3>
                <p className="text-sm text-neutral-400">Productivity gains and operational benefits</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-900/20 text-purple-400">
                10
              </div>
              <div>
                <h3 className="font-medium text-white">Scalability & Future-Proofing</h3>
                <p className="text-sm text-neutral-400">Enterprise-grade architecture considerations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

