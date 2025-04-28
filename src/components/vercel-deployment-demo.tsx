"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, GitBranch, GitPullRequest, Globe, Rocket, Server, Zap, Filter, Users } from "lucide-react"

export function VercelDeploymentDemo() {
  const [activeTab, setActiveTab] = useState("demo")
  const [selectedFeature, setSelectedFeature] = useState("edge-functions")

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="demo" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6 bg-neutral-800">
          <TabsTrigger
            value="demo"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Deployment Demo
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Advanced Features
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
                <CardTitle>Vercel Deployment Workflow</CardTitle>
                <CardDescription className="text-neutral-400">
                  Simple, automated deployment process for Next.js applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {vercelSteps.map((step, index) => (
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
                <Button className="w-full bg-black hover:bg-neutral-800 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                    <path fill="currentColor" d="M12 2L2 19.8h20L12 2Z" />
                  </svg>
                  Deploy to Vercel
                </Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="bg-neutral-800 border-neutral-700 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-400">Deployment Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {vercelFeatures.map((feature, index) => (
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
                    <GitPullRequest className="h-4 w-4 text-purple-400" />
                    Preview Deployments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">feature/new-homepage</span>
                      </div>
                      <Badge className="bg-green-900/30 text-green-400 border border-green-800">Live</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm">fix/navigation-bug</span>
                      </div>
                      <Badge className="bg-blue-900/30 text-blue-400 border border-blue-800">Building</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-neutral-900 rounded-md">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">main</span>
                      </div>
                      <Badge className="bg-purple-900/30 text-purple-400 border border-purple-800">Production</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="bg-neutral-800 border-neutral-700 text-white h-full">
                <CardHeader>
                  <CardTitle>Advanced Features</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Powerful capabilities that make Vercel ideal for modern web applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {advancedFeatures.map((feature) => (
                    <Button
                      key={feature.id}
                      variant={selectedFeature === feature.id ? "default" : "outline"}
                      className={`w-full justify-start text-left mb-2 ${
                        selectedFeature === feature.id
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-neutral-900 hover:bg-neutral-800"
                      }`}
                      onClick={() => setSelectedFeature(feature.id)}
                    >
                      <feature.icon className="h-4 w-4 mr-2" />
                      {feature.title}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              {advancedFeatures.map(
                (feature) =>
                  selectedFeature === feature.id && (
                    <Card key={feature.id} className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <feature.icon className="h-5 w-5 text-purple-400" />
                          <CardTitle>{feature.title}</CardTitle>
                        </div>
                        <CardDescription className="text-neutral-400">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="relative bg-neutral-900 p-6 rounded-lg overflow-hidden">
                            {feature.diagram}
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-medium text-white">Key Benefits</h3>
                            <ul className="space-y-2">
                              {feature.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-4 w-4 text-green-400 mt-1" />
                                  <span className="text-sm text-neutral-300">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {feature.example && (
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium text-white">Example Usage</h3>
                              <div className="bg-neutral-950 p-3 rounded-md font-mono text-xs text-neutral-300 overflow-x-auto">
                                <pre>{feature.example}</pre>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ),
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Prepare Your Next.js Project</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`// Ensure your Next.js project is ready for production
// In next.config.js (optional optimizations)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Optimized for container deployments
  images: {
    domains: ['example.com'], // Add domains for Image component
  },
  // Other configurations...
}

module.exports = nextConfig`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Push to GitHub</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/username/your-nextjs-project.git

# Push to GitHub
git push -u origin main`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Deploy to Vercel</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# Option 1: Using Vercel CLI
npm i -g vercel
vercel login
vercel

# Option 2: Using Vercel Dashboard
# 1. Go to https://vercel.com/new
# 2. Import your GitHub repository
# 3. Configure project settings
# 4. Deploy`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">4. Configure Environment Variables (if needed)</h3>
              <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                <pre>
                  {`# In Vercel Dashboard:
# 1. Go to your project
# 2. Click on "Settings"
# 3. Navigate to "Environment Variables"
# 4. Add your variables:

DATABASE_URL=your_database_connection_string
API_KEY=your_api_key
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Benefits of Vercel Deployment</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Zero configuration required for most Next.js projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Preview deployments for every pull request</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Built-in analytics and performance monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-1" />
                  <span>Seamless rollbacks to previous deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const vercelSteps = [
  {
    title: "Connect Repository",
    description: "Link your GitHub, GitLab, or Bitbucket repository to Vercel",
  },
  {
    title: "Configure Project",
    description: "Vercel automatically detects Next.js and suggests optimal settings",
  },
  {
    title: "Set Environment Variables",
    description: "Add any required environment variables for your application",
  },
  {
    title: "Deploy",
    description: "Vercel builds and deploys your application to its global network",
  },
]

const vercelFeatures = [
  {
    title: "Global Edge Network",
    description: "Content delivered from servers closest to your users",
    icon: Globe,
  },
  {
    title: "Serverless Functions",
    description: "API routes automatically deployed as serverless functions",
    icon: Server,
  },
  {
    title: "Preview Deployments",
    description: "Every pull request gets its own preview URL",
    icon: GitPullRequest,
  },
  {
    title: "One-Click Deployments",
    description: "Deploy directly from your Git repository",
    icon: Rocket,
  },
]

const advancedFeatures = [
  {
    id: "edge-functions",
    title: "Edge Functions",
    description: "Run serverless functions at the edge, closer to users, reducing latency and improving performance",
    icon: Zap,
    benefits: [
      "Reduced latency by running code closer to users",
      "Global distribution across 30+ regions",
      "Instant cold starts for better performance",
      "Automatic scaling based on traffic",
      "No server management required",
    ],
    example: `// pages/api/edge-function.js
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'World';
  
  return new Response(
    JSON.stringify({ message: \`Hello, \${name}!\` }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}`,
    diagram: (
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500 mb-2">
            <Users className="h-8 w-8 text-purple-400" />
          </div>
          <div className="text-sm font-medium text-white">Users</div>
        </div>

        <svg width="100%" height="30" viewBox="0 0 100 30" className="mb-4">
          <defs>
            <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
            </marker>
          </defs>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="30"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead1)"
          />
        </svg>

        <div className="grid grid-cols-3 gap-4 w-full mb-6 relative">
          <div className="absolute -top-6 left-0 right-0 text-center">
            <div className="inline-block bg-neutral-800/90 px-3 py-1 rounded-full text-xs text-white">
              Edge Functions process requests at the edge location closest to the user
            </div>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500 flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-xs text-center text-white">Edge Region {i}</div>
            </div>
          ))}
        </div>

        <svg width="100%" height="30" viewBox="0 0 100 30" className="mb-4">
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
            </marker>
          </defs>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="30"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead2)"
          />
        </svg>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/50 border border-green-500 mb-2">
            <Server className="h-8 w-8 text-green-400" />
          </div>
          <div className="text-sm font-medium text-white">Origin Server</div>
        </div>
      </div>
    ),
  },
  {
    id: "serverless-functions",
    title: "Serverless Functions",
    description:
      "Supports backend functionality without managing servers, using runtimes like Node.js, Python, Ruby, and Go",
    icon: Server,
    benefits: [
      "No server provisioning or management",
      "Automatic scaling based on demand",
      "Pay only for what you use",
      "Multiple runtime support (Node.js, Python, Go, Ruby)",
      "Seamless integration with Next.js API routes",
    ],
    example: `// pages/api/hello.js
export default function handler(req, res) {
  const { name = 'World' } = req.query;
  
  // Connect to database, process data, etc.
  
  res.status(200).json({ 
    message: \`Hello, \${name}!\`,
    timestamp: new Date().toISOString() 
  });
}`,
    diagram: (
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500 mb-2">
            <Users className="h-8 w-8 text-purple-400" />
          </div>
          <div className="text-sm font-medium text-white">Client Request</div>
        </div>

        <svg width="100%" height="30" viewBox="0 0 100 30" className="mb-4">
          <defs>
            <marker id="arrowhead4" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
            </marker>
          </defs>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="30"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead4)"
          />
        </svg>

        <div className="relative bg-neutral-800 rounded-lg p-4 mb-6 w-full max-w-md">
          <div className="absolute -top-6 left-0 right-0 text-center">
            <div className="inline-block bg-neutral-800/90 px-3 py-1 rounded-full text-xs text-white">
              Serverless Functions scale automatically with demand
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-medium text-white">API Route Handler</span>
            </div>
            <Badge className="bg-green-900/30 text-green-400 border border-green-800">Auto-scaling</Badge>
          </div>

          <div className="bg-neutral-900 p-3 rounded-md font-mono text-xs text-neutral-300 overflow-x-auto mb-2">
            <pre>{`export default function handler(req, res) {
  // Process request
  // Connect to database
  // Return response
  res.status(200).json({ ... });
}`}</pre>
          </div>

          <div className="flex justify-between text-xs text-neutral-400">
            <span>No server management</span>
            <span>Pay per invocation</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-lg bg-blue-900/50 border border-blue-500 flex items-center justify-center mb-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-400">
                <path
                  fill="currentColor"
                  d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                />
              </svg>
            </div>
            <div className="text-xs text-center text-white">Node.js</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-lg bg-green-900/50 border border-green-500 flex items-center justify-center mb-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-400">
                <path
                  fill="currentColor"
                  d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.372 12-12 0-6.628-5.372-12-12-12zm-.5 4.65c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM5.66 15.85c-.3-.24-.58-.49-.86-.74l.65-.77c.25.23.5.45.78.67l-.57.84zm12.85-2.63c.2-.4.39-.83.56-1.27l.91.42c-.19.48-.4.94-.62 1.38l-.85-.53zm-14.28-3.1c-.15-.42-.29-.84-.4-1.27l.95-.25c.1.39.22.77.36 1.15l-.91.37zm15.08-1.64c.04-.44.08-.9.09-1.37l1 .03c-.01.51-.05 1.01-.1 1.5l-.99-.16zM7.45 6.71c.03-.44.08-.87.15-1.3l.98.14c-.06.39-.11.78-.14 1.18l-.99-.02zm8.33-1.28c-.12-.43-.26-.84-.42-1.24l.9-.39c.17.44.33.89.46 1.35l-.94.28zm-6.27-.9c.2-.4.43-.79.68-1.15l.78.64c-.22.32-.42.66-.6 1.02l-.86-.51z"
                />
              </svg>
            </div>
            <div className="text-xs text-center text-white">Python</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-lg bg-cyan-900/50 border border-cyan-500 flex items-center justify-center mb-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-400">
                <path
                  fill="currentColor"
                  d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07l-4.23-.011zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07l-5.527.012zm2.828 1.075c-.047 0-.059-.023-.035-.059l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082l-2.547-.023zm13.635-5.12c-.737.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 0 1-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"
                />
              </svg>
            </div>
            <div className="text-xs text-center text-white">Go</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "edge-middleware",
    title: "Edge Middleware",
    description:
      "Allows for the execution of code before a request is completed, enabling tasks like authentication, redirects, and feature flags",
    icon: Filter,
    benefits: [
      "Intercept and modify requests before they complete",
      "Implement authentication and authorization",
      "Create custom redirects and rewrites",
      "A/B testing and feature flags",
      "Geolocation-based content delivery",
    ],
    example: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get country from IP (available on Edge network)
  const country = request.geo?.country || 'US';
  
  // Clone the request URL and create a new URL for rewrite
  const url = request.nextUrl.clone();
  
  // Rewrite to country-specific page
  if (url.pathname === '/') {
    url.pathname = \`/\${country.toLowerCase()}\`;
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};`,
    diagram: (
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500 mb-2">
            <Users className="h-8 w-8 text-purple-400" />
          </div>
          <div className="text-sm font-medium text-white">User Request</div>
        </div>

        <svg width="100%" height="30" viewBox="0 0 100 30" className="mb-4">
          <defs>
            <marker id="arrowhead5" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
            </marker>
          </defs>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="30"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead5)"
          />
        </svg>

        <div className="relative bg-neutral-800 rounded-lg p-4 mb-6 w-full max-w-md">
          <div className="absolute -top-6 left-0 right-0 text-center">
            <div className="inline-block bg-neutral-800/90 px-3 py-1 rounded-full text-xs text-white">
              Edge Middleware intercepts requests before they reach your application
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-white">Edge Middleware</span>
            </div>
            <Badge className="bg-yellow-900/30 text-yellow-400 border border-yellow-800">Intercepts</Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-neutral-900 p-2 rounded-md text-xs text-neutral-300">
              <div className="font-medium mb-1 text-yellow-400">Authentication</div>
              <div>Verify user sessions</div>
            </div>
            <div className="bg-neutral-900 p-2 rounded-md text-xs text-neutral-300">
              <div className="font-medium mb-1 text-yellow-400">Redirects</div>
              <div>Route to correct pages</div>
            </div>
            <div className="bg-neutral-900 p-2 rounded-md text-xs text-neutral-300">
              <div className="font-medium mb-1 text-yellow-400">Geolocation</div>
              <div>Country-specific content</div>
            </div>
            <div className="bg-neutral-900 p-2 rounded-md text-xs text-neutral-300">
              <div className="font-medium mb-1 text-yellow-400">A/B Testing</div>
              <div>Feature flags & experiments</div>
            </div>
          </div>
        </div>

        <svg width="100%" height="30" viewBox="0 0 100 30" className="mb-4">
          <defs>
            <marker id="arrowhead6" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
            </marker>
          </defs>
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="30"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeDasharray="5,5"
            markerEnd="url(#arrowhead6)"
          />
        </svg>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/50 border border-green-500 mb-2">
            <Globe className="h-8 w-8 text-green-400" />
          </div>
          <div className="text-sm font-medium text-white">Next.js Application</div>
        </div>
      </div>
    ),
  },
]

