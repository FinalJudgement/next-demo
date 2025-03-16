import Image from "next/image"
import { Code, Server, Zap, Layout, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import CompanyShowcase from "@/components/company-showcase"

export default function PresentationIntro() {
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
            <span className="font-semibold">Next.js Presentation</span>
          </div>

          {/* Search placeholder - for Algolia */}
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
        <section className="pb-16 bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Presentation Overview</h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                A comprehensive look at Next.js and its benefits for enterprise development
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

        {/* Key Features */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Key Features for Modern Development
              </h2>
              <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                Technical capabilities that make Next.js suitable for organizations of all sizes
              </p>
            </div>
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

        {/* Presenter Info */}
        {/* Remove the entire Presenter Info section */}
      </main>

      {/* Footer */}
      <footer className="py-6 bg-neutral-950 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} | Next.js Technical Overview</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                Resources
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                Documentation
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

