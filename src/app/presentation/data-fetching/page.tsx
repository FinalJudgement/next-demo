"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
    Server,
    Database,
    Globe,
    Code,
    ArrowRight,
    Zap,
    RefreshCw,
    Layers,
    Cpu,
    Rocket,
    Lock,
    Workflow,
    CheckCircle,
    ArrowRightLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Simplify the DataFetchingDemo component to be more concise
function DataFetchingDemo() {
    const [activeStrategy, setActiveStrategy] = useState<string>("ssr")
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<any>(null)

    const fetchData = () => {
        setIsLoading(true)
        // Simulate different loading times based on strategy
        const delay = activeStrategy === "ssg" ? 300 : activeStrategy === "isr" ? 500 : activeStrategy === "app" ? 400 : 800
        setTimeout(() => {
            // Sample data for each strategy
            const sampleData = {
                ssr: [
                    { id: 1, name: "User Dashboard", updated: "Just now" },
                    { id: 2, name: "Analytics Report", updated: "Just now" },
                ],
                ssg: [
                    { id: 1, name: "About Page", updated: "Built 2 days ago" },
                    { id: 2, name: "Documentation", updated: "Built 2 days ago" },
                ],
                isr: [
                    { id: 1, name: "Product Listing", updated: "Revalidated 5 min ago" },
                    { id: 2, name: "Blog Post", updated: "Revalidated 5 min ago" },
                ],
                app: [
                    { id: 1, name: "User Profile", updated: "Streamed now" },
                    { id: 2, name: "Notifications", updated: "Streamed now" },
                ],
            }
            setData(sampleData[activeStrategy as keyof typeof sampleData])
            setIsLoading(false)
        }, delay)
    }

    // Fetch data when strategy changes
    useEffect(() => {
        fetchData()
    }, [activeStrategy])

    return (
        <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
            <div className="p-4 bg-neutral-800 flex flex-wrap gap-2">
                <Button
                    onClick={() => setActiveStrategy("ssr")}
                    className={`${activeStrategy === "ssr" ? "bg-green-600 hover:bg-green-700" : "bg-neutral-700 hover:bg-neutral-600"}`}
                    size="sm"
                >
                    <Server className="h-4 w-4 mr-2" />
                    getServerSideProps (SSR)
                </Button>
                <Button
                    onClick={() => setActiveStrategy("ssg")}
                    className={`${activeStrategy === "ssg" ? "bg-purple-600 hover:bg-purple-700" : "bg-neutral-700 hover:bg-neutral-600"}`}
                    size="sm"
                >
                    <Zap className="h-4 w-4 mr-2" />
                    getStaticProps (SSG)
                </Button>
                <Button
                    onClick={() => setActiveStrategy("isr")}
                    className={`${activeStrategy === "isr" ? "bg-cyan-600 hover:bg-cyan-700" : "bg-neutral-700 hover:bg-neutral-600"}`}
                    size="sm"
                >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Incremental Static Regeneration
                </Button>
                <Button
                    onClick={() => setActiveStrategy("app")}
                    className={`${activeStrategy === "app" ? "bg-blue-600 hover:bg-blue-700" : "bg-neutral-700 hover:bg-neutral-600"}`}
                    size="sm"
                >
                    <Workflow className="h-4 w-4 mr-2" />
                    App Router
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-700">
                {/* Code Example */}
                <div className="p-4 bg-neutral-950">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-neutral-400 font-mono">
                            {activeStrategy === "ssr" && "pages/dashboard.js"}
                            {activeStrategy === "ssg" && "pages/about.js"}
                            {activeStrategy === "isr" && "pages/products/[id].js"}
                            {activeStrategy === "app" && "app/dashboard/page.js"}
                        </div>
                        <Badge variant="outline" className="bg-neutral-800 text-neutral-300 border-neutral-700">
                            {activeStrategy === "ssr" && "Server-Side Rendering"}
                            {activeStrategy === "ssg" && "Static Generation"}
                            {activeStrategy === "isr" && "Incremental Static Regeneration"}
                            {activeStrategy === "app" && "React Server Components"}
                        </Badge>
                    </div>

                    <div className="bg-neutral-900 rounded-md p-4 font-mono text-xs text-neutral-300 overflow-x-auto">
                        {activeStrategy === "ssr" && (
                            <pre>{`// This function runs on every request
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/dashboard')
  const data = await res.json()
  return { props: { data } }
}

export default function Dashboard({ data }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}`}</pre>
                        )}

                        {activeStrategy === "ssg" && (
                            <pre>{`// This function runs at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/about')
  const data = await res.json()
  return { props: { data } }
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Us</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}`}</pre>
                        )}

                        {activeStrategy === "isr" && (
                            <pre>{`// This function runs at build time and periodically
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`)
  const product = await res.json()
  return { 
    props: { product },
    // Revalidate every 60 seconds
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/products')
  const products = await res.json()
  
  const paths = products.slice(0, 10).map(product => ({
    params: { id: product.id.toString() }
  }))
  
  return { paths, fallback: 'blocking' }
}`}</pre>
                        )}

                        {activeStrategy === "app" && (
                            <pre>{`// app/dashboard/page.js
// This is a Server Component by default
import { fetchDashboardData } from '@/lib/data'

export default async function DashboardPage() {
  // Data fetching happens directly in the component
  const data = await fetchDashboardData()
  
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}`}</pre>
                        )}
                    </div>
                </div>

                {/* Visualization */}
                <div className="p-4 bg-neutral-900">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-white">
                            {activeStrategy === "ssr" && "Server-Side Rendering"}
                            {activeStrategy === "ssg" && "Static Generation"}
                            {activeStrategy === "isr" && "Incremental Static Regeneration"}
                            {activeStrategy === "app" && "App Router & Server Components"}
                        </h3>
                        <Button size="sm" variant="outline" className="border-neutral-700 text-neutral-300" onClick={fetchData}>
                            Refresh Data
                        </Button>
                    </div>

                    <div className="bg-neutral-800 rounded-lg p-4 mb-4 min-h-[200px]">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-[200px]">
                                <div className="w-10 h-10 border-2 border-neutral-600 border-t-purple-500 rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {data &&
                                    data.map((item: any) => (
                                        <div key={item.id} className="bg-neutral-700 p-3 rounded-md">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-white">{item.name}</span>
                                                <Badge variant="outline" className="text-xs bg-neutral-800 border-neutral-600">
                                                    {item.updated}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Fix the architecture visualization component to prevent overlapping
function ArchitectureVisualization() {
    const [activeTab, setActiveTab] = useState("traditional")

    return (
        <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
            <div className="p-4 bg-neutral-800">
                <Tabs defaultValue="traditional" onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-2 bg-neutral-700">
                        <TabsTrigger value="traditional" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            Traditional Stack
                        </TabsTrigger>
                        <TabsTrigger value="fullstack" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                            Full-Stack Solution
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="traditional" className="mt-4">
                        <div className="bg-neutral-950 rounded-lg p-6">
                            <div className="flex flex-col space-y-6">
                                {/* Frontend Layer */}
                                <div className="bg-blue-900/20 border border-blue-800/40 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Globe className="h-5 w-5 text-blue-400" />
                                        <h3 className="text-lg font-medium text-white">Next.js Frontend</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                        <div className="bg-blue-950/50 p-2 rounded text-xs text-blue-300 text-center">UI Components</div>
                                        <div className="bg-blue-950/50 p-2 rounded text-xs text-blue-300 text-center">Routing</div>
                                        <div className="bg-blue-950/50 p-2 rounded text-xs text-blue-300 text-center">State Management</div>
                                    </div>
                                    <div className="text-sm text-neutral-400 mb-2">
                                        Handles presentation, routing, and client-side logic
                                    </div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="h-6 w-6 text-neutral-600 animate-pulse" />
                                    </div>
                                </div>

                                {/* API Layer */}
                                <div className="bg-green-900/20 border border-green-800/40 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Server className="h-5 w-5 text-green-400" />
                                        <h3 className="text-lg font-medium text-white">Backend APIs</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                        <div className="bg-green-950/50 p-2 rounded text-xs text-green-300 text-center">.NET Core API</div>
                                        <div className="bg-green-950/50 p-2 rounded text-xs text-green-300 text-center">
                                            Azure Functions
                                        </div>
                                        <div className="bg-green-950/50 p-2 rounded text-xs text-green-300 text-center">REST Endpoints</div>
                                    </div>
                                    <div className="text-sm text-neutral-400 mb-2">Provides business logic and data processing</div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="h-6 w-6 text-neutral-600 animate-pulse" />
                                    </div>
                                </div>

                                {/* Database Layer */}
                                <div className="bg-amber-900/20 border border-amber-800/40 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Database className="h-5 w-5 text-amber-400" />
                                        <h3 className="text-lg font-medium text-white">Database Layer</h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300 text-center">SQL Server</div>
                                        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300 text-center">PostgreSQL</div>
                                        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300 text-center">
                                            Azure Cosmos DB
                                        </div>
                                    </div>
                                    <div className="text-sm text-neutral-400">Stores and manages application data</div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="fullstack" className="mt-4">
                        <div className="bg-neutral-950 rounded-lg p-6">
                            <div className="flex flex-col space-y-6">
                                {/* Next.js Full-Stack */}
                                <div className="bg-purple-900/20 border border-purple-800/40 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Workflow className="h-5 w-5 text-purple-400" />
                                        <h3 className="text-lg font-medium text-white">Next.js Full-Stack Application</h3>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mb-3">
                                        {/* Frontend */}
                                        <div className="bg-blue-900/30 p-3 rounded border border-blue-800/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Globe className="h-4 w-4 text-blue-400" />
                                                <h4 className="text-sm font-medium text-white">Frontend Layer</h4>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 mb-2">
                                                <div className="bg-blue-950/50 p-1 rounded text-xs text-blue-300 text-center">Pages</div>
                                                <div className="bg-blue-950/50 p-1 rounded text-xs text-blue-300 text-center">Components</div>
                                                <div className="bg-blue-950/50 p-1 rounded text-xs text-blue-300 text-center">Hooks</div>
                                            </div>
                                        </div>

                                        {/* API Routes */}
                                        <div className="bg-green-900/30 p-3 rounded border border-green-800/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Server className="h-4 w-4 text-green-400" />
                                                <h4 className="text-sm font-medium text-white">API Routes Layer</h4>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 mb-2">
                                                <div className="bg-green-950/50 p-1 rounded text-xs text-green-300 text-center">/api/users</div>
                                                <div className="bg-green-950/50 p-1 rounded text-xs text-green-300 text-center">
                                                    /api/products
                                                </div>
                                                <div className="bg-green-950/50 p-1 rounded text-xs text-green-300 text-center">
                                                    Server Actions
                                                </div>
                                            </div>
                                        </div>

                                        {/* Auth */}
                                        <div className="bg-cyan-900/30 p-3 rounded border border-cyan-800/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Lock className="h-4 w-4 text-cyan-400" />
                                                <h4 className="text-sm font-medium text-white">Authentication Layer</h4>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 mb-2">
                                                <div className="bg-cyan-950/50 p-1 rounded text-xs text-cyan-300 text-center">NextAuth.js</div>
                                                <div className="bg-cyan-950/50 p-1 rounded text-xs text-cyan-300 text-center">Entra ID</div>
                                                <div className="bg-cyan-950/50 p-1 rounded text-xs text-cyan-300 text-center">JWT Tokens</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-2">
                                        <ArrowRight className="h-6 w-6 text-neutral-600 animate-pulse" />
                                    </div>
                                </div>

                                {/* Database Layer */}
                                <div className="bg-amber-900/20 border border-amber-800/40 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Database className="h-5 w-5 text-amber-400" />
                                        <h3 className="text-lg font-medium text-white">Database Layer</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-3">
                                        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300">
                                            <div className="flex items-center gap-1 justify-center">
                                                <Database className="h-3 w-3" />
                                                <span>SQL Server / PostgreSQL</span>
                                            </div>
                                        </div>
                                        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300">
                                            <div className="flex items-center gap-1 justify-center">
                                                <Code className="h-3 w-3" />
                                                <span>Prisma ORM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-neutral-400 text-center">Direct database access via Prisma ORM</div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="p-4 border-t border-neutral-700 bg-neutral-800">
                <h3 className="text-lg font-medium text-white mb-3">
                    {activeTab === "traditional" ? "Next.js as Frontend in Traditional Stack" : "Next.js as Full-Stack Solution"}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-900 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                        {activeTab === "traditional" ? (
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                                    <span className="text-neutral-300">Integrates with existing .NET Core or Azure backends</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                                    <span className="text-neutral-300">Gradual migration path for legacy applications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                                    <span className="text-neutral-300">Leverages existing backend expertise and infrastructure</span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">Single codebase for frontend and backend</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">Simplified deployment and infrastructure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">Type-safe data flow with tools like Prisma and tRPC</span>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="bg-neutral-900 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-2">Use Cases:</h4>
                        {activeTab === "traditional" ? (
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5" />
                                    <span className="text-neutral-300">Modernizing legacy applications with a new frontend</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5" />
                                    <span className="text-neutral-300">Teams with specialized backend developers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5" />
                                    <span className="text-neutral-300">Complex enterprise systems with existing APIs</span>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">New projects starting from scratch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">Startups and small teams with full-stack developers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-purple-400 mt-0.5" />
                                    <span className="text-neutral-300">MVPs and rapid prototyping</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Add more detailed NextAuth and Prisma integration examples
function NextAuthPrismaDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
                <div className="p-3 bg-neutral-800 flex justify-between items-center">
                    <h3 className="text-white font-medium">NextAuth.js Integration</h3>
                    <Badge variant="outline" className="bg-purple-900/60 text-purple-200 border-purple-800">
                        Authentication
                    </Badge>
                </div>
                <div className="p-4">
                    <div className="bg-neutral-950 rounded-md p-4 font-mono text-xs text-neutral-300 overflow-x-auto mb-4">
                        <pre>{`// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // Add user ID to session
      session.user.id = user.id
      return session
    },
  },
})`}</pre>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            <div>
                                <p className="text-sm text-white font-medium">Multiple Auth Providers</p>
                                <p className="text-xs text-neutral-400">
                                    Support for 50+ authentication providers including social logins, Entra ID, and more
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            <div>
                                <p className="text-sm text-white font-medium">Database Integration</p>
                                <p className="text-xs text-neutral-400">Seamless integration with Prisma for user persistence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
                <div className="p-3 bg-neutral-800 flex justify-between items-center">
                    <h3 className="text-white font-medium">Prisma ORM Integration</h3>
                    <Badge variant="outline" className="bg-cyan-900/60 text-cyan-200 border-cyan-800">
                        Database
                    </Badge>
                </div>
                <div className="p-4">
                    <div className="bg-neutral-950 rounded-md p-4 font-mono text-xs text-neutral-300 overflow-x-auto mb-4">
                        <pre>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  posts         Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`}</pre>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            <div>
                                <p className="text-sm text-white font-medium">Type-Safe Database Access</p>
                                <p className="text-xs text-neutral-400">Auto-generated TypeScript types for your database schema</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            <div>
                                <p className="text-sm text-white font-medium">Multi-Database Support</p>
                                <p className="text-xs text-neutral-400">Works with PostgreSQL, MySQL, SQL Server, SQLite, and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Update the Full-Stack Integration section to fix overflow and add more details
function FullStackIntegrationSection() {
    return (
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-8 mb-16">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Full-Stack Integration</h3>
                <p className="text-neutral-400 mt-2">Next.js integrates seamlessly with popular libraries and services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-800/50 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <Lock className="h-5 w-5 text-purple-400" />
                        <h4 className="text-lg font-medium text-white">Authentication</h4>
                    </div>
                    <p className="text-sm text-neutral-300 mb-3">
                        Secure user authentication with NextAuth.js, supporting Entra ID, Google, and more
                    </p>
                    <div className="bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-400 overflow-x-auto">
                        <pre className="whitespace-pre-wrap break-all">import NextAuth from "next-auth"</pre>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <Database className="h-5 w-5 text-cyan-400" />
                        <h4 className="text-lg font-medium text-white">Database Access</h4>
                    </div>
                    <p className="text-sm text-neutral-300 mb-3">
                        Type-safe database operations with Prisma ORM for SQL Server, PostgreSQL, and more
                    </p>
                    <div className="bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-400 overflow-x-auto">
                        <pre className="whitespace-pre-wrap break-all">import {"{ prisma }"} from "@/lib/prisma"</pre>
                    </div>
                </div>

                <div className="bg-neutral-800/50 p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <ArrowRightLeft className="h-5 w-5 text-green-400" />
                        <h4 className="text-lg font-medium text-white">Type-Safe APIs</h4>
                    </div>
                    <p className="text-sm text-neutral-300 mb-3">
                        End-to-end type safety with tRPC for seamless frontend-backend integration
                    </p>
                    <div className="bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-400 overflow-x-auto">
                        <pre className="whitespace-pre-wrap break-all">import {"{ trpc }"} from "@/utils/trpc"</pre>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <NextAuthPrismaDemo />
            </div>
        </div>
    )
}

// Update the Data Fetching Strategies section to be more concise
function DataFetchingStrategiesSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Data Fetching Code Examples</h2>
                    <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                        See how to implement different data fetching patterns in Next.js
                    </p>
                </div>

                <div className="mb-16">
                    <DataFetchingDemo />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Server className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Server Components</h3>
                            </div>
                        </div>
                        <div className="bg-neutral-800/50 p-4 rounded-lg">
                            <div className="font-mono text-xs text-neutral-300 overflow-x-auto">
                                <pre>{`// app/dashboard/page.tsx
import { prisma } from '@/lib/prisma'

export default async function DashboardPage() {
  // Data fetching happens directly in the component
  const users = await prisma.user.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  })
  
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}`}</pre>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-900/10 to-cyan-800/5 rounded-xl overflow-hidden border border-cyan-800/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <RefreshCw className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Server Actions</h3>
                            </div>
                        </div>
                        <div className="bg-neutral-800/50 p-4 rounded-lg">
                            <div className="font-mono text-xs text-neutral-300 overflow-x-auto">
                                <pre>{`// app/actions.ts
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const authorId = formData.get('authorId') as string
  
  if (!title || !authorId) {
    throw new Error('Title and author are required')
  }
  
  await prisma.post.create({
    data: {
      title,
      content,
      authorId
    }
  })
  
  revalidatePath('/blog')
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ApiRequestDemo() {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)

    const makeRequest = async () => {
        setIsLoading(true)
        setError(null)

        try {
            // Simulate API request
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Mock response
            const mockResponse = {
                success: true,
                data: {
                    users: [
                        { id: 1, name: "John Doe", email: "john@example.com" },
                        { id: 2, name: "Jane Smith", email: "jane@example.com" },
                        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
                    ],
                    timestamp: new Date().toISOString(),
                },
            }

            setResponse(mockResponse)
        } catch (err) {
            setError("An error occurred while fetching data")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
            <div className="p-4 bg-neutral-800">
                <h3 className="text-lg font-medium text-white">API Request Demo</h3>
                <p className="text-sm text-neutral-400">Try making a request to a simulated API endpoint</p>
            </div>
            <div className="p-4">
                <div className="flex justify-center mb-4">
                    <Button onClick={makeRequest} disabled={isLoading} className="bg-purple-600 hover:bg-purple-700">
                        {isLoading ? (
                            <>
                                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                                Fetching Data...
                            </>
                        ) : (
                            <>
                                <Server className="h-4 w-4 mr-2" />
                                Make API Request
                            </>
                        )}
                    </Button>
                </div>

                {error && (
                    <div className="bg-red-900/20 border border-red-800 rounded-md p-3 mb-4">
                        <p className="text-sm text-red-300">{error}</p>
                    </div>
                )}

                {response && (
                    <div className="space-y-4">
                        <div className="bg-green-900/20 border border-green-800 rounded-md p-3">
                            <p className="text-sm text-green-300">Request successful!</p>
                        </div>

                        <div className="bg-neutral-950 rounded-md p-4">
                            <h4 className="text-sm font-medium text-white mb-2">Response:</h4>
                            <pre className="bg-neutral-900 p-3 rounded text-xs text-neutral-300 overflow-x-auto">
                                {JSON.stringify(response, null, 2)}
                            </pre>
                        </div>

                        <div className="bg-neutral-800 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-white mb-2">Users:</h4>
                            <div className="space-y-2">
                                {response.data.users.map((user: any) => (
                                    <div key={user.id} className="bg-neutral-700 p-2 rounded-md">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-white">{user.name}</span>
                                            <span className="text-xs text-neutral-400">{user.email}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function ApiRoutesDemo() {
    return (
        <div className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
            <div className="p-4 bg-neutral-800">
                <h3 className="text-lg font-medium text-white">API Routes Example</h3>
                <p className="text-sm text-neutral-400">Demonstrates creating a simple API endpoint in Next.js</p>
            </div>
            <div className="p-4">
                <div className="bg-neutral-950 rounded-md p-4 font-mono text-xs text-neutral-300 overflow-x-auto mb-4">
                    <pre>{`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}`}</pre>
                </div>
                <div className="bg-neutral-950 rounded-md p-4 font-mono text-xs text-neutral-300 overflow-x-auto">
                    <pre>{`// pages/api/users.js
import { prisma } from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const { name, email } = req.body
    const newUser = await prisma.user.create({
      data: { name, email }
    })
    res.status(201).json(newUser)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}`}</pre>
                </div>
            </div>
        </div>
    )
}

// Update the main component to use the new sections
export default function DataFetching() {
    return (<main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
                            Full-Stack Capabilities
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                            <span className="text-purple-400">Next.js</span> Data Fetching & Architecture
                        </h1>
                        <p className="text-xl text-neutral-400">
                            Powerful patterns for building scalable frontends or complete full-stack applications
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="inline-block rounded-lg bg-neutral-800/50 px-3 py-1 text-sm text-neutral-400">
                                Explore Next.js data fetching strategies and architectural patterns
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
                                <div className="ml-2 text-sm text-neutral-400 font-mono">data-fetching.js</div>
                            </div>
                            <div className="bg-neutral-950 rounded-md p-4 font-mono text-sm text-neutral-300">
                                <p className="text-blue-400">// Next.js offers multiple data fetching patterns</p>
                                <p className="text-green-400">export async function getServerSideProps() {"{"}</p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-purple-400">// Runs on every request</span>
                                </p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-yellow-400">const data = await fetch('https://api.example.com/data')</span>
                                </p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-yellow-400">return {"{ props: { data } }"}</span>
                                </p>
                                <p className="text-green-400">{"}"}</p>
                                <p className="text-neutral-300 mt-2"></p>
                                <p className="text-blue-400">// App Router (React Server Components)</p>
                                <p className="text-green-400">export default async function Page() {"{"}</p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-purple-400">// Data fetching directly in the component</span>
                                </p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-yellow-400">const data = await fetch('https://api.example.com/data')</span>
                                </p>
                                <p className="text-neutral-300 pl-4">
                                    <span className="text-yellow-400">return {"<div>{data.title}</div>"}</span>
                                </p>
                                <p className="text-green-400">{"}"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Data Fetching Strategies */}
        <DataFetchingStrategiesSection />

        {/* API Routes */}
        <section className="py-16 bg-neutral-900">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                        API Routes - Full-Stack Capabilities
                    </h2>
                    <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                        Build backend functionality directly within your Next.js application
                    </p>
                </div>

                <div className="mb-16">
                    <ApiRequestDemo />
                </div>

                <div className="mb-16">
                    <ApiRoutesDemo />
                </div>

                <FullStackIntegrationSection />
            </div>
        </section>

        {/* Architecture Patterns */}
        <section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                        Next.js Architecture Patterns
                    </h2>
                    <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
                        Flexible approaches for building modern web applications
                    </p>
                </div>

                <div className="mb-16">
                    <ArchitectureVisualization />
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white">Architectural Advantages</h3>
                        <p className="text-neutral-400 mt-2">Next.js provides significant advantages for development teams</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-neutral-800/50 p-5 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Layers className="h-5 w-5 text-purple-400" />
                                <h4 className="text-lg font-medium text-white">Unified Codebase</h4>
                            </div>
                            <p className="text-sm text-neutral-300">
                                Developers write frontend and backend logic in a single project, simplifying collaboration and
                                reducing context switching.
                            </p>
                        </div>

                        <div className="bg-neutral-800/50 p-5 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu className="h-5 w-5 text-cyan-400" />
                                <h4 className="text-lg font-medium text-white">Simplified Data Flow</h4>
                            </div>
                            <p className="text-sm text-neutral-300">
                                Tools like Prisma and tRPC ensure data models remain type-safe and consistent throughout your
                                application.
                            </p>
                        </div>

                        <div className="bg-neutral-800/50 p-5 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Rocket className="h-5 w-5 text-green-400" />
                                <h4 className="text-lg font-medium text-white">Faster Development</h4>
                            </div>
                            <p className="text-sm text-neutral-300">
                                By leveraging Next.js's built-in API routes and server-side features, teams save time that would
                                otherwise be spent building and maintaining a separate backend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>)
}

