/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Cloud, Code, Package, Server, Settings } from "lucide-react"

export function DockerDeploymentDemo() {
  const [activeTab, setActiveTab] = useState("demo")

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="demo" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="demo"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Deployment Demo
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Implementation Steps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neutral-800 border-neutral-700 text-white">
              <CardHeader>
                <CardTitle>Docker Deployment Workflow</CardTitle>
                <CardDescription className="text-neutral-400">
                  Package your Next.js app into a portable container for flexible deployment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {dockerSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-900/30 border border-cyan-800/50 text-cyan-400">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-white">{step.title}</h3>
                        <p className="text-sm text-neutral-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cyan-700 hover:bg-cyan-800 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                    <path
                      fill="currentColor"
                      d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.887c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
                    />
                  </svg>
                  Deploy with Docker
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="bg-neutral-800 border-neutral-700 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-400">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {dockerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <feature.icon className="h-5 w-5 text-cyan-400 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-white">{feature.title}</h3>
                          <p className="text-xs text-neutral-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border-neutral-700 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-cyan-400" />
                    Deployment Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Azure Container Apps</span>
                      </div>
                      <Badge className="bg-blue-900/30 text-blue-400 border border-blue-800">Managed</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">AWS Elastic Container Service</span>
                      </div>
                      <Badge className="bg-yellow-900/30 text-yellow-400 border border-yellow-800">Scalable</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Google Cloud Run</span>
                      </div>
                      <Badge className="bg-green-900/30 text-green-400 border border-green-800">Serverless</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Self-hosted Kubernetes</span>
                      </div>
                      <Badge className="bg-purple-900/30 text-purple-400 border border-purple-800">Custom</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Create a Dockerfile</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Dockerfile in the root of your project

# Base on Node.js LTS
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Configure Next.js for Docker</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`// In next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Creates a standalone build optimized for containers
  // Other configurations...
}

module.exports = nextConfig`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Build and Run Docker Container</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Build the Docker image
docker build -t my-nextjs-app .

# Run the container locally
docker run -p 3000:3000 my-nextjs-app

# Tag and push to a container registry
docker tag my-nextjs-app registry.example.com/my-nextjs-app
docker push registry.example.com/my-nextjs-app`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">4. Deploy to Cloud Providers</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Azure Container Apps
az login
az containerapp create \\
  --name my-nextjs-app \\
  --resource-group my-resource-group \\
  --image registry.example.com/my-nextjs-app \\
  --target-port 3000 \\
  --ingress external

# AWS ECS
aws ecs create-service \\
  --cluster my-cluster \\
  --service-name my-nextjs-app \\
  --task-definition my-nextjs-app:1 \\
  --desired-count 1

# Google Cloud Run
gcloud run deploy my-nextjs-app \\
  --image registry.example.com/my-nextjs-app \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Benefits of Docker Deployment</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Consistent environment across development and production</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Portable across any cloud provider or self-hosted environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Simplified dependency management and isolation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Scalable with container orchestration tools like Kubernetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Efficient resource utilization and fast startup times</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const dockerSteps = [
  {
    title: "Create Dockerfile",
    description: "Define the container configuration for your Next.js app",
  },
  {
    title: "Build Docker Image",
    description: "Package your application into a Docker image",
  },
  {
    title: "Push to Registry",
    description: "Upload your Docker image to a container registry",
  },
  {
    title: "Deploy Container",
    description: "Deploy the container to your chosen cloud provider or self-hosted environment",
  },
]

const dockerFeatures = [
  {
    title: "Portability",
    description: "Run anywhere that supports Docker",
    icon: Package,
  },
  {
    title: "Consistency",
    description: "Same environment in dev and prod",
    icon: Code,
  },
  {
    title: "Scalability",
    description: "Easy horizontal scaling with orchestration",
    icon: Server,
  },
  {
    title: "Customization",
    description: "Full control over runtime environment",
    icon: Settings,
  },
]

