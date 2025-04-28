/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Code, Database, Globe, Lock, Workflow } from "lucide-react"

export function AzureStaticWebAppsDemo() {
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
                <CardTitle>Azure Static Web Apps Workflow</CardTitle>
                <CardDescription className="text-neutral-400">
                  Serverless platform for static frontends with lightweight dynamic content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {azureSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400">
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
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                    <path
                      fill="currentColor"
                      d="M5.483 21.3H24L14.025 2.1 5.483 21.3zm-4.483 0h4.483L14.025 2.1 1 21.3z"
                    />
                  </svg>
                  Deploy to Azure Static Web Apps
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
                    {azureFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <feature.icon className="h-5 w-5 text-blue-400 mt-0.5" />
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
                    <Workflow className="h-4 w-4 text-blue-400" />
                    GitHub Actions Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-neutral-900 p-3 rounded-md font-mono text-xs text-neutral-300 overflow-x-auto">
                      <pre>
                        {`name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: actions/checkout@v3
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: \${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: \${{ secrets.GITHUB_TOKEN }}
          app_location: "/"
          api_location: "api"
          output_location: ".next"`}
                      </pre>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">GitHub Actions Workflow</span>
                      </div>
                      <Badge className="bg-green-900/30 text-green-400 border border-green-800">Automated</Badge>
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
              <h3 className="text-lg font-medium text-white mb-2">1. Create an Azure Static Web App</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# In the Azure Portal:
1. Go to the Azure Portal
2. Search for Static Web Apps in the search bar and select Create
3. Fill in the required fields:
   - Name: Enter your app name
   - Region: Choose a region close to your users
   - Deployment Source: Select Azure DevOps or GitHub
   - Connect your repository and select your branch (e.g., main)
   - For the Build Presets, select Next.js
4. Click Review + Create, then click Create`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                2. Configure Azure DevOps Pipeline for Continuous Deployment
              </h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# In Azure DevOps:
1. Go to your Next.js project repository
2. Navigate to the Pipelines section and create a new pipeline
3. Choose Starter Pipeline or Existing YAML File
4. Add the following YAML configuration:

# .azure-pipelines.yml
trigger:
  - main

jobs:
- job: BuildAndDeploy
  pool:
    vmImage: 'ubuntu-latest'

  steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '18.x'

    - script: |
        npm install
        npm run build
      displayName: 'Build Next.js App'

    - task: AzureStaticWebApp@0
      inputs:
        app_location: "/"       # Root folder for your Next.js app
        output_location: ".next" # Next.js build output directory
        azure_static_web_apps_api_token: $(deployment_token)

# In the Azure Portal:
# 1. Go to your Static Web App resource
# 2. Select Deployment Token from the left panel
# 3. Copy the deployment token and add it as a secret in your Azure DevOps project under $(deployment_token)`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Manage API Routes and Serverless Functions</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Azure Static Web Apps automatically provisions Azure Functions for your API routes
# Simply place your API routes in the /pages/api or /api folder in your Next.js project

# Example API Route in Next.js:
// /pages/api/hello.js
export default async function handler(req, res) {
    res.status(200).json({ message: "Hello from Azure Functions!" });
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">4. Configure Next.js for Static Web Apps</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`// In next.config.js:

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export
  // For hybrid rendering with API routes, use:
  // output: 'standalone',
  images: {
    unoptimized: true, // For static export
  },
}

module.exports = nextConfig`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Benefits of Azure Static Web Apps</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Integrated CI/CD with GitHub Actions or Azure DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Automatic Azure Functions for API routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Built-in authentication providers (GitHub, Twitter, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Free SSL certificates and custom domains</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Global CDN distribution for fast content delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const azureSteps = [
  {
    title: "Create Azure Static Web App",
    description: "Create a new Static Web App resource in the Azure Portal",
  },
  {
    title: "Connect Repository",
    description: "Link your GitHub or Azure DevOps repository",
  },
  {
    title: "Configure Build Settings",
    description: "Set app location, API location, and output location",
  },
  {
    title: "Deploy",
    description: "Azure automatically sets up GitHub Actions workflow and deploys your app",
  },
]

const azureFeatures = [
  {
    title: "Serverless API",
    description: "Automatic Azure Functions for backend logic",
    icon: Code,
  },
  {
    title: "Global CDN",
    description: "Content delivered from Azure's global edge network",
    icon: Globe,
  },
  {
    title: "Authentication",
    description: "Built-in auth with multiple providers",
    icon: Lock,
  },
  {
    title: "Database Integration",
    description: "Connect to Azure Cosmos DB or other data sources",
    icon: Database,
  },
]

