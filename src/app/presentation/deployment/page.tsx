import type { Metadata } from "next"
import { DeploymentOptionsOverview } from "@/components/deployment-options-overview"
import { VercelDeploymentDemo } from "@/components/vercel-deployment-demo"
import { AzureStaticWebAppsDemo } from "@/components/azure-static-web-apps-demo"
import { AzureAppServiceDemo } from "@/components/azure-app-service-demo"
import { DockerDeploymentDemo } from "@/components/docker-deployment-demo"

export const metadata: Metadata = {
  title: "Deployment & Hosting | Next.js Presentation",
  description: "Exploring Next.js deployment options and hosting solutions",
}

export default function DeploymentPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
                Deployment & Hosting
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                <span className="text-purple-400">Next.js</span> Deployment Options
              </h1>
              <p className="text-xl text-neutral-400">
                Flexible, powerful hosting solutions for every type of Next.js application
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-block rounded-lg bg-neutral-800/50 px-3 py-1 text-sm text-neutral-400">
                  From static sites to full-stack applications
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
                  <div className="ml-2 text-sm text-neutral-400 font-mono">deployment.config.js</div>
                </div>
                <div className="bg-neutral-950 rounded-md p-4 font-mono text-sm text-neutral-300">
                  <p className="text-blue-400">// Next.js deployment configuration</p>
                  <p className="text-green-400">module.exports = {"{"}</p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-purple-400">// Choose your deployment target</span>
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-yellow-400">target:</span>{" "}
                    <span className="text-green-400">'serverless'</span>,
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-yellow-400">output:</span>{" "}
                    <span className="text-green-400">'standalone'</span>,
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-purple-400">// Configure image optimization</span>
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-yellow-400">images:</span> {"{"}{" "}
                    <span className="text-green-400">domains: ['example.com']</span> {"}"},
                  </p>
                  <p className="text-green-400">{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Overview */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Deployment Options</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Next.js offers flexible deployment solutions that fit various project types — whether static, hybrid, or
              full-stack
            </p>
          </div>

          <DeploymentOptionsOverview />
        </div>
      </section>

      {/* Azure Static Web Apps Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Azure Static Web Apps</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Ideal for static or hybrid apps with minimal backend needs
            </p>
          </div>

          <AzureStaticWebAppsDemo />
        </div>
      </section>

      {/* Azure App Service Section */}
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Azure App Service</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Best for full-stack apps with custom backend logic
            </p>
          </div>

          <AzureAppServiceDemo />
        </div>
      </section>

      {/* Vercel Deployment Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Vercel Deployment</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              The official hosting platform for Next.js, providing a fast, optimized experience with minimal setup
            </p>
          </div>

          <VercelDeploymentDemo />
        </div>
      </section>

      {/* Docker Deployment Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Docker Deployment</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              For flexible, environment-agnostic deployments
            </p>
          </div>

          <DockerDeploymentDemo />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Choosing the Right Deployment Option</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-neutral-300">
                  Selecting the appropriate platform for your Next.js project depends on your specific requirements:
                </p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Use Azure Static Web Apps</strong> for static-heavy or hybrid apps
                      requiring lightweight backend functions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Use Azure App Service</strong> for full-stack or complex
                      server-side apps with custom backend logic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Use Vercel</strong> for the easiest and most optimized Next.js
                      experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Use Docker</strong> for flexibility, control, and portability
                      across multiple cloud providers
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4">Deployment Considerations</h3>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Rendering Strategy:</strong> Static, SSR, or ISR requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Backend Needs:</strong> API routes, serverless functions, or custom
                      server
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Scalability:</strong> Traffic patterns and growth expectations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">DevOps Integration:</strong> CI/CD pipelines and existing workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Cost Considerations:</strong> Budget constraints and optimization
                      needs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

