"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Database, GitBranch, Scale, Server, Settings } from "lucide-react"

export function AzureAppServiceDemo() {
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
                <CardTitle>Azure App Service Workflow</CardTitle>
                <CardDescription className="text-neutral-400">
                  Flexible, managed platform for full-stack web applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {appServiceSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-900/30 border border-purple-800/50 text-purple-400">
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
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                    <path
                      fill="currentColor"
                      d="M16.922 16.187a8.471 8.471 0 0 1-1.836 2.746 8.391 8.391 0 0 1-2.746 1.836 8.366 8.366 0 0 1-6.641 0 8.471 8.471 0 0 1-2.746-1.836 8.471 8.471 0 0 1-1.836-2.746 8.366 8.366 0 0 1 0-6.641 8.471 8.471 0 0 1 1.836-2.746 8.471 8.471 0 0 1 2.746-1.836 8.366 8.366 0 0 1 6.641 0 8.471 8.471 0 0 1 2.746 1.836 8.471 8.471 0 0 1 1.836 2.746 8.366 8.366 0 0 1 0 6.641zm-4.322-9.177-4.322 7.469h3.224l-.43.731h-3.224l-1.504 2.602h7.469l.43-.731h-5.535l5.105-8.84-1.213-1.231z"
                    />
                  </svg>
                  Deploy to Azure App Service
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
                    {appServiceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <feature.icon className="h-5 w-5 text-purple-400 mt-0.5" />
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
                    <Settings className="h-4 w-4 text-purple-400" />
                    App Service Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">Runtime Stack</span>
                      </div>
                      <Badge className="bg-blue-900/30 text-blue-400 border border-blue-800">Node.js 18 LTS</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <Scale className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Scaling</span>
                      </div>
                      <Badge className="bg-green-900/30 text-green-400 border border-green-800">Auto-scale</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Deployment</span>
                      </div>
                      <Badge className="bg-purple-900/30 text-purple-400 border border-purple-800">CI/CD</Badge>
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
              <h3 className="text-lg font-medium text-white mb-2">1. Create an Azure App Service</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# In the Azure Portal:
1. Go to the Azure Portal
2. Search for App Service and select Create
3. Fill in the following details:
   - Name: Enter your app name
   - Runtime Stack: Select Node 18 LTS or your preferred Node.js version
   - Region: Choose a region near your audience
   - SKU/Plan: Choose B1 (Basic) or higher for improved performance
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

    - task: AzureWebApp@1
      inputs:
        azureSubscription: '<Your Azure Service Connection>'
        appName: '<Your App Service Name>'
        package: '.'
        startupCommand: 'npm start'`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Configure App Service for Next.js</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# In the App Service resource:
1. Navigate to Configuration under Settings
2. Add the following environment variables:
   - PORT = 3000
   - NODE_ENV = production
3. Under General Settings, set the Startup Command to:
   npm start`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Benefits of Azure App Service</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Full support for server-side rendering (SSR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Auto-scaling based on traffic patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Built-in monitoring and diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Easy integration with other Azure services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Multiple deployment options (Git, GitHub Actions, DevOps)</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const appServiceSteps = [
  {
    title: "Create Azure App Service",
    description: "Create a new App Service resource in the Azure Portal",
  },
  {
    title: "Configure Runtime",
    description: "Select Node.js runtime and configure deployment options",
  },
  {
    title: "Set Up Deployment",
    description: "Connect to GitHub, Azure DevOps, or use FTP deployment",
  },
  {
    title: "Configure Environment",
    description: "Set environment variables and application settings",
  },
]

const appServiceFeatures = [
  {
    title: "Full SSR Support",
    description: "Run server-side rendering workloads",
    icon: Server,
  },
  {
    title: "Auto-scaling",
    description: "Scale based on demand or schedule",
    icon: Scale,
  },
  {
    title: "Database Integration",
    description: "Connect to Azure SQL, Cosmos DB, etc.",
    icon: Database,
  },
  {
    title: "Custom Configuration",
    description: "Advanced app settings and controls",
    icon: Settings,
  },
]

