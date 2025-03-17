"use client"
import { useState, useEffect } from "react"
import {
  Folder,
  File,
  Code,
  Zap,
  RefreshCw,
  Clock,
  ArrowRight,
  Package,
  FileCode,
  Layers,
  Cpu,
  BarChart,
  Rocket,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

function FastRefreshDemo() {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  // Cycle through the steps automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  // Update the counter when we reach step 3
  useEffect(() => {
    if (step === 3) {
      setCount((prev) => prev + 1)
    }
  }, [step])

  // Original code
  const originalCode = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-white">
        Counter Example
      </h2>
      <p className="mb-4 text-neutral-300">
        Current count: {count}
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}`

  // Modified code (changing button color)
  const modifiedCode = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-neutral-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2 text-white">
        Counter Example
      </h2>
      <p className="mb-4 text-neutral-300">
        Current count: {count}
      </p>
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}`

  return (
    <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-neutral-800">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-neutral-400 font-medium">Fast Refresh Demo</div>
        <div className="w-16"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-700">
        {/* Code Editor */}
        <div className="p-4 bg-neutral-950 relative">
          <div className="text-sm text-neutral-400 font-mono mb-2">counter.tsx</div>
          <pre className="font-mono text-xs text-neutral-300 overflow-x-auto">
            {step < 2 ? originalCode : modifiedCode}
          </pre>

          {/* Editing overlay */}
          {step === 1 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg animate-pulse">Editing component...</div>
            </div>
          )}

          {/* Highlight changed line */}
          {step === 2 && (
            <div className="absolute top-[275px] left-0 right-0 h-6 bg-purple-500/20 border-l-2 border-purple-500"></div>
          )}
        </div>

        {/* Preview */}
        <div className="p-4 bg-neutral-900 flex flex-col">
          <div className="text-sm text-neutral-400 font-mono mb-2">Preview</div>
          <div className="flex-1 flex flex-col">
            <div className="p-4 bg-neutral-800 rounded-lg">
              <h2 className="text-xl font-bold mb-2 text-white">Counter Example</h2>
              <p className="mb-4 text-neutral-300">Current count: {count}</p>
              <button
                className={`px-4 py-2 ${step < 3 ? "bg-blue-600" : "bg-purple-600"} text-white rounded`}
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
            </div>

            <div className="mt-4 flex-1 flex flex-col justify-end">
              {step === 0 && (
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span>Initial component state</span>
                </div>
              )}

              {step === 1 && (
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <RefreshCw className="h-3 w-3 text-yellow-400 animate-spin" />
                  <span>Developer editing component...</span>
                </div>
              )}

              {step === 2 && (
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <RefreshCw className="h-3 w-3 text-yellow-400 animate-spin" />
                  <span>Fast Refresh detecting changes...</span>
                </div>
              )}

              {step === 3 && (
                <div className="flex items-center gap-2 text-xs text-green-400">
                  <Zap className="h-3 w-3" />
                  <span>Changes applied without losing state!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 bg-neutral-800 border-t border-neutral-700 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span>Fast Refresh preserves component state while applying UI changes</span>
        </div>
      </div>
    </div>
  )
}

export default function DeveloperExperience() {
  const [activeFolder, setActiveFolder] = useState<string | null>("pages")

  return (<main className="flex-1" >
    {/* Hero Section */}
    < section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black" >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
              Developer Experience
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              <span className="text-purple-400">Next.js</span> Developer Experience
            </h1>
            <p className="text-xl text-neutral-400">
              Streamlined workflows, intuitive structure, and powerful tools that accelerate development
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="inline-block rounded-lg bg-neutral-800/50 px-3 py-1 text-sm text-neutral-400">
                Explore how Next.js enhances developer productivity
              </div>
            </div>
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
                <p className="text-green-400">$ npx create-next-app my-project</p>
                <p className="text-neutral-500">
                  ✓ Would you like to use TypeScript? ... <span className="text-white">Yes</span>
                </p>
                <p className="text-neutral-500">
                  ✓ Would you like to use ESLint? ... <span className="text-white">Yes</span>
                </p>
                <p className="text-neutral-500">
                  ✓ Would you like to use Tailwind CSS? ... <span className="text-white">Yes</span>
                </p>
                <p className="text-neutral-500">
                  ✓ Would you like to use `src/` directory? ... <span className="text-white">No</span>
                </p>
                <p className="text-neutral-500">
                  ✓ Would you like to use App Router? ... <span className="text-white">Yes</span>
                </p>
                <p className="text-neutral-500">
                  ✓ Would you like to customize the default import alias? ... <span className="text-white">No</span>
                </p>
                <p className="text-purple-400">Creating a new Next.js app in /my-project...</p>
                <p className="text-blue-400">Initializing project with template: app-tw</p>
                <p className="text-green-400">Success! Created my-project</p>
                <p className="text-white mt-2">$ cd my-project</p>
                <p className="text-white">$ npm run dev</p>
                <p className="text-green-400 mt-2">
                  ready - started server on 0.0.0.0:3000, url: http://localhost:3000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

    {/* Project Structure Visualization */}
    < section className="py-16 bg-gradient-to-b from-black to-neutral-900" >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Intuitive Project Structure
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            Next.js follows a simple, predictable structure that makes onboarding easier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-neutral-900 rounded-lg border border-neutral-800 p-4">
            <div className="text-lg font-medium text-white mb-4">Project Files</div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-2 text-neutral-400">
                <Folder className="h-4 w-4 text-yellow-400" />
                <span>my-project/</span>
              </div>

              <div
                className={`flex items-center gap-2 pl-4 cursor-pointer ${activeFolder === "app" ? "text-white" : "text-neutral-400"}`}
                onClick={() => setActiveFolder("app")}
              >
                <Folder className="h-4 w-4 text-blue-400" />
                <span>app/</span>
              </div>

              <div
                className={`flex items-center gap-2 pl-4 cursor-pointer ${activeFolder === "pages" ? "text-white" : "text-neutral-400"}`}
                onClick={() => setActiveFolder("pages")}
              >
                <Folder className="h-4 w-4 text-green-400" />
                <span>pages/</span>
              </div>

              <div
                className={`flex items-center gap-2 pl-4 cursor-pointer ${activeFolder === "components" ? "text-white" : "text-neutral-400"}`}
                onClick={() => setActiveFolder("components")}
              >
                <Folder className="h-4 w-4 text-purple-400" />
                <span>components/</span>
              </div>

              <div
                className={`flex items-center gap-2 pl-4 cursor-pointer ${activeFolder === "public" ? "text-white" : "text-neutral-400"}`}
                onClick={() => setActiveFolder("public")}
              >
                <Folder className="h-4 w-4 text-orange-400" />
                <span>public/</span>
              </div>

              <div
                className={`flex items-center gap-2 pl-4 cursor-pointer ${activeFolder === "styles" ? "text-white" : "text-neutral-400"}`}
                onClick={() => setActiveFolder("styles")}
              >
                <Folder className="h-4 w-4 text-pink-400" />
                <span>styles/</span>
              </div>

              <div className="flex items-center gap-2 pl-4 text-neutral-400">
                <File className="h-4 w-4 text-neutral-400" />
                <span>package.json</span>
              </div>

              <div className="flex items-center gap-2 pl-4 text-neutral-400">
                <File className="h-4 w-4 text-neutral-400" />
                <span>next.config.js</span>
              </div>

              <div className="flex items-center gap-2 pl-4 text-neutral-400">
                <File className="h-4 w-4 text-neutral-400" />
                <span>tsconfig.json</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            {activeFolder === "app" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Folder className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">App Router</h3>
                    <p className="text-sm text-blue-300">Powerful new structure for component organization</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-lg">
                  <div className="font-mono text-sm text-neutral-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>app/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>layout.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Root Layout
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>page.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Home Page
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>about/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>page.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /about Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>blog/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>page.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /blog Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>[slug]/</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Dynamic Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>page.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /blog/[slug] Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>api/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <Folder className="h-4 w-4 text-blue-400" />
                      <span>users/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>route.ts</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        API Route
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Nested layouts with shared UI across routes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Server Components for improved performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Built-in loading states and error handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Simplified data fetching with async/await</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeFolder === "pages" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Folder className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pages Directory</h3>
                    <p className="text-sm text-green-300">File-based routing system</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-lg">
                  <div className="font-mono text-sm text-neutral-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-green-400" />
                      <span>pages/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>_app.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Custom App
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>_document.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Custom Document
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>index.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        / Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>about.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /about Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-green-400" />
                      <span>blog/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>index.tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /blog Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>[slug].tsx</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        /blog/[slug] Route
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-green-400" />
                      <span>api/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>hello.ts</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        API Route
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Simple file-based routing (no react-router setup)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Automatic code splitting for each page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>API routes for backend functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Pre-rendering options (SSG, SSR) per page</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeFolder === "components" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Folder className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Components Directory</h3>
                    <p className="text-sm text-purple-300">Reusable UI components</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-lg">
                  <div className="font-mono text-sm text-neutral-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-purple-400" />
                      <span>components/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Header.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Footer.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-purple-400" />
                      <span>ui/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Button.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Card.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-purple-400" />
                      <span>layout/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Sidebar.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-purple-400" />
                      <span>blog/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>PostCard.tsx</span>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Organized component structure for better maintainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Reusable UI components across multiple pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Supports both client and server components (App Router)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Easy integration with component libraries</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeFolder === "public" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Folder className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Public Directory</h3>
                    <p className="text-sm text-orange-300">Static assets served at root</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-lg">
                  <div className="font-mono text-sm text-neutral-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-orange-400" />
                      <span>public/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>favicon.ico</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>logo.svg</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-orange-400" />
                      <span>images/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>hero.jpg</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>profile.png</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <Folder className="h-4 w-4 text-orange-400" />
                      <span>fonts/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>inter.woff2</span>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Static assets are automatically served at root path</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>No configuration needed for static file serving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Assets are optimized during build process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Supports all static file types (images, fonts, videos, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeFolder === "styles" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Folder className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Styles Directory</h3>
                    <p className="text-sm text-pink-300">CSS and styling files</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-lg">
                  <div className="font-mono text-sm text-neutral-300 space-y-1">
                    <div className="flex items-center gap-2">
                      <Folder className="h-4 w-4 text-pink-400" />
                      <span>styles/</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>globals.css</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        Global Styles
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>Home.module.css</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 text-xs bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 border-purple-800"
                      >
                        CSS Module
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>variables.css</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <File className="h-4 w-4 text-neutral-400" />
                      <span>tailwind.css</span>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Support for global CSS and CSS Modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Built-in Sass and PostCSS support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Seamless integration with Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>CSS-in-JS libraries support (styled-components, emotion)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section >

    {/* Language Support and Package Managers */}
    < section className="py-16 bg-neutral-900" >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Flexible Development Options
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            Next.js adapts to your preferred languages and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <FileCode className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Language Support</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-yellow-400" />
                  <h4 className="text-lg font-medium text-white">JavaScript</h4>
                </div>
                <p className="text-sm text-neutral-300">
                  Start quickly with familiar syntax. Perfect for rapid prototyping and smaller projects.
                </p>
                <div className="mt-3 bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-300">
                  <pre className="overflow-x-auto max-w-full whitespace-pre-wrap">{`// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js site!</h1>
    </div>
  )
}`}</pre>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-medium text-white">TypeScript</h4>
                </div>
                <p className="text-sm text-neutral-300">
                  Type safety for larger projects. Simply add .ts or .tsx files and Next.js automatically configures
                  TypeScript.
                </p>
                <div className="mt-3 bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-300">
                  <pre className="overflow-x-auto max-w-full whitespace-pre-wrap">{`// pages/index.tsx
import { GetStaticProps } from 'next'

interface HomeProps {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { title: 'Welcome to my Next.js site!' }
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Package className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Package Managers</h3>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0v24h24v-24h-24zm19.2 4.8h-14.4v14.4h14.4v-14.4zm-4.8 9.6h-4.8v-4.8h4.8v4.8z" />
                  </svg>
                  <h4 className="text-lg font-medium text-white">npm</h4>
                </div>
                <p className="text-sm text-neutral-300">
                  Default choice for most developers. Simple and widely used.
                </p>
                <div className="mt-3 bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-300">
                  <pre className="overflow-x-auto max-w-full whitespace-pre-wrap">{`$ npx create-next-app my-app
$ cd my-app
$ npm run dev`}</pre>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.5 4.5h1v10.5h-1v-10.5zm-5.5 11h11v1h-11v-1z" />
                  </svg>
                  <h4 className="text-lg font-medium text-white">yarn</h4>
                </div>
                <p className="text-sm text-neutral-300">Faster dependency resolution for larger projects.</p>
                <div className="mt-3 bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-300">
                  <pre className="overflow-x-auto max-w-full whitespace-pre-wrap">{`$ yarn create next-app my-app
$ cd my-app
$ yarn dev`}</pre>
                </div>
              </div>

              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0v24h24v-24h-24zm19.2 4.8h-14.4v14.4h14.4v-14.4zm-4.8 9.6h-4.8v-4.8h4.8v4.8z" />
                  </svg>
                  <h4 className="text-lg font-medium text-white">pnpm</h4>
                </div>
                <p className="text-sm text-neutral-300">
                  Efficient for monorepos and large-scale applications due to its disk-saving architecture.
                </p>
                <div className="mt-3 bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-300">
                  <pre className="overflow-x-auto max-w-full whitespace-pre-wrap">{`$ pnpm create next-app my-app
$ cd my-app
$ pnpm dev`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

    {/* Hot Reloading and Fast Feedback */}
    < section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950" >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Fast Refresh & Instant Feedback
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            Rapid development with near-instant updates
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-4 md:p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Fast Refresh</h3>
              <p className="text-neutral-300">
                Next.js features Fast Refresh, giving developers near-instant updates in the browser as they modify
                code:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 pl-4">
                <li>Preserves component state during edits</li>
                <li>Provides clear error reporting</li>
                <li>Supports both functional and class components</li>
                <li>Works with CSS and static assets</li>
              </ul>
              <div className="bg-neutral-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-medium text-white">Time-Saving Benefits</h4>
                </div>
                <p className="text-neutral-300 text-sm">
                  Fast Refresh reduces the feedback loop from seconds to milliseconds, allowing developers to
                  iterate rapidly without losing their place or state in the application.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <FastRefreshDemo />
            </div>
          </div>
        </div>
      </div>
    </section >

    {/* Productivity Metrics */}
    < section className="py-16 bg-neutral-950" >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Proven Time-Saving Benefits
          </h2>
          <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
            Real-world productivity gains in enterprise environments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">40 Hours Saved</h3>
                <p className="text-sm text-blue-300">Per Week</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <p className="text-sm text-neutral-300">
                  Chick-fil-A saved 40 developer hours per week by adopting Next.js for their micro-frontend
                  architecture.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-neutral-400">Faster feature delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-neutral-400">More efficient iterations</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">75% Reduction</h3>
                <p className="text-sm text-green-300">In Build Times</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <p className="text-sm text-neutral-300">
                  Sonos reduced their build times by 75% and improved performance scores by 10% after moving to
                  Next.js.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-green-400" />
                <span className="text-sm text-neutral-400">Accelerated development pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-green-400" />
                <span className="text-sm text-neutral-400">Better performance metrics</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <RefreshCw className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">30s vs 30min</h3>
                <p className="text-sm text-purple-300">Content Deployment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 p-4 rounded-lg">
                <p className="text-sm text-neutral-300">
                  HashiCorp reported cutting their content deployment times from 30 minutes to 30 seconds using
                  Next.js&apos;s Incremental Static Regeneration.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-neutral-400">60x faster content updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-neutral-400">Improved content workflow</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white">Developer Experience Matters</h3>
            <p className="text-neutral-400 mt-2">
              Next.js streamlines development, minimizes boilerplate, and maximizes iteration speed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="h-5 w-5 text-purple-400" />
                <h4 className="text-lg font-medium text-white">Zero Config</h4>
              </div>
              <p className="text-sm text-neutral-300">
                Start building immediately without complex setup. Next.js handles routing, bundling, and
                optimization out of the box.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="h-5 w-5 text-cyan-400" />
                <h4 className="text-lg font-medium text-white">Unified Platform</h4>
              </div>
              <p className="text-sm text-neutral-300">
                Frontend and backend in one codebase. Build complete applications without juggling multiple
                repositories.
              </p>
            </div>

            <div className="bg-neutral-800/50 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="h-5 w-5 text-green-400" />
                <h4 className="text-lg font-medium text-white">Scalable Architecture</h4>
              </div>
              <p className="text-sm text-neutral-300">
                Start small and scale as needed. Next.js grows with your project from prototype to production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

