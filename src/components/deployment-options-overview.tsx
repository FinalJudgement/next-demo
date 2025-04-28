"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DeploymentOptionsOverview() {
  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-neutral-800 border-neutral-700 text-white">
          <CardHeader>
            <CardTitle>Choosing the Right Deployment Option</CardTitle>
            <CardDescription className="text-neutral-400">
              Next.js offers flexible deployment solutions for various project types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Azure Static Web Apps</span> - Ideal for static or hybrid
                  apps with minimal backend needs
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Azure App Service</span> - Best for full-stack apps with
                  custom backend logic
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Vercel</span> - The official hosting platform for Next.js
                  with optimized experience
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Docker</span> - For flexible, environment-agnostic
                  deployments
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-neutral-800 border-neutral-700 text-white">
          <CardHeader>
            <CardTitle>Deployment Considerations</CardTitle>
            <CardDescription className="text-neutral-400">
              Key factors to consider when choosing a deployment platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Rendering Strategy</span> - Static, SSR, or ISR requirements
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Backend Needs</span> - API routes, serverless functions, or
                  custom server
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Scalability</span> - Traffic patterns and growth expectations
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">DevOps Integration</span> - CI/CD pipelines and existing
                  workflows
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <span className="font-medium text-white">Cost Considerations</span> - Budget constraints and
                  optimization needs
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

