import { Database, RefreshCw, Clock, Zap } from "lucide-react"

export default function StaticContentWireframe() {
  return (
    <div className="border border-neutral-700 rounded-lg overflow-hidden bg-neutral-900">
      <div className="p-3 bg-neutral-800 flex justify-between items-center">
        <h3 className="text-white font-medium">Next.js Automated Content Updates</h3>
      </div>

      <div className="p-6">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-3xl h-[400px]">
            {/* Database */}
            <div className="absolute top-0 left-0 md:left-10 w-64 bg-neutral-800 rounded-lg p-4 border border-neutral-700">
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-blue-400" />
                <h4 className="text-sm font-medium text-white">Content Database</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="h-3 w-32 bg-neutral-700 rounded-md"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <div className="h-3 w-24 bg-neutral-700 rounded-md"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-28 bg-neutral-700 rounded-md"></div>
                </div>
              </div>
            </div>

            {/* ISR Process */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 bg-purple-900/20 rounded-lg p-4 border border-purple-800/30">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="h-12 w-1 bg-neutral-700"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <RefreshCw className="h-6 w-6 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-purple-400" />
                <h4 className="text-sm font-medium text-white">ISR Revalidation</h4>
                <div className="text-xs bg-cyan-900/50 px-2 py-0.5 rounded text-cyan-300">every 60s</div>
              </div>
              <div className="text-xs text-center text-neutral-400">
                Automatically checks for content changes and rebuilds only what&apos;s needed
              </div>
            </div>

            {/* Static Site */}
            <div className="absolute bottom-0 right-0 md:right-10 w-64 bg-neutral-800 rounded-lg p-4 border border-neutral-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-yellow-400" />
                <h4 className="text-sm font-medium text-white">Static Website</h4>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-neutral-700 rounded-md"></div>
                <div className="h-3 w-3/4 bg-neutral-700 rounded-md"></div>
                <div className="h-3 w-1/2 bg-neutral-700 rounded-md"></div>
                <div className="h-3 w-2/3 bg-neutral-700 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center max-w-md">
            <h4 className="text-white font-medium mb-2">No More Manual Updates</h4>
            <p className="text-sm text-neutral-400">
              With ISR, your static site automatically stays in sync with your database content without requiring full
              rebuilds or developer intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

