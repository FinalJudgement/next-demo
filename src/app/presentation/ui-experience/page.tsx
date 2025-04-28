/* eslint-disable react/jsx-no-comment-textnodes */
import type { Metadata } from "next"
import { ImageOptimizationDemo } from "@/components/image-optimization-demo"
import { FontOptimizationDemo } from "@/components/font-optimization-demo"
import { TailwindComponentsDemo } from "@/components/tailwind-components-demo"
import { ShadcnDashboardDemo } from "@/components/shadcn-dashboard-demo"
import { TelerikDashboardDemo } from "@/components/telerik-dashboard-demo"
import { UILibrariesOverview } from "@/components/ui-libraries-overview"

export const metadata: Metadata = {
  title: "UI Experience | Next.js Presentation",
  description: "Exploring Next.js UI optimizations and component-driven development",
}

export default function UIExperiencePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-400">
                UI Experience
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                <span className="text-purple-400">Next.js</span> UI Optimization
              </h1>
              <p className="text-xl text-neutral-400">
                Modern, efficient, and visually appealing interfaces with built-in optimizations
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-block rounded-lg bg-neutral-800/50 px-3 py-1 text-sm text-neutral-400">
                  Explore how Next.js enhances UI development
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
                  <div className="ml-2 text-sm text-neutral-400 font-mono">ui-optimization.tsx</div>
                </div>
                <div className="bg-neutral-950 rounded-md p-4 font-mono text-sm text-neutral-300">
                  <p className="text-blue-400">// Next.js provides built-in UI optimizations</p>
                  <p className="text-green-400">
                    import {"{"} Image {"}"} from &apos;next/image&apos;
                  </p>
                  <p className="text-green-400">
                    import {"{"} Inter {"}"} from &apos;next/font/google&apos;
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-purple-400">// Automatic image optimization</span>
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-yellow-400">{"<Image"}</span>
                  </p>
                  <p className="text-neutral-300 pl-8">
                    <span className="text-blue-400">src=&quot;/product.jpg&quot;</span>
                  </p>
                  <p className="text-neutral-300 pl-8">
                    <span className="text-blue-400">alt=&quot;Product&quot;</span>
                  </p>
                  <p className="text-neutral-300 pl-8">
                    <span className="text-blue-400">width={"{1920}"}</span>
                  </p>
                  <p className="text-neutral-300 pl-8">
                    <span className="text-blue-400">height={"{1200}"}</span>
                  </p>
                  <p className="text-neutral-300 pl-4">
                    <span className="text-yellow-400">{"/>"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Optimization Section */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Image Optimization</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Next.js automatically optimizes images for better performance and user experience
            </p>
          </div>

          <ImageOptimizationDemo />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Automatic Resizing</h3>
              <p className="text-neutral-300">
                Serves appropriately sized images for different devices, reducing unnecessary data transfer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Modern Formats</h3>
              <p className="text-neutral-300">
                Utilizes formats like WebP when supported, offering better compression and quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Visual Stability</h3>
              <p className="text-neutral-300">
                Prevents layout shifts during image loading by calculating and reserving space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Font Optimization Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Font Optimization</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Next.js optimizes font loading for better performance and visual stability
            </p>
          </div>

          <FontOptimizationDemo />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Self-Hosting</h3>
              <p className="text-neutral-300">
                Automatically downloads and serves fonts from your domain, eliminating external requests and enhancing
                privacy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Zero Layout Shift</h3>
              <p className="text-neutral-300">
                Utilizes the CSS size-adjust property to maintain layout stability during font loading.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Google Fonts Integration</h3>
              <p className="text-neutral-300">
                Easily incorporate Google Fonts with performance optimizations built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind Components Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Tailwind CSS Integration</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Build component-driven UIs with Tailwind CSS and Next.js
            </p>
          </div>

          <TailwindComponentsDemo />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Utility Classes</h3>
              <p className="text-neutral-300">
                Provides a comprehensive set of classes for styling, reducing the need for custom CSS.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Responsive Design</h3>
              <p className="text-neutral-300">
                Simplifies the creation of responsive layouts with intuitive class names.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Customization</h3>
              <p className="text-neutral-300">Allows extensive customization to align with brand guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Libraries Overview Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">UI Component Libraries</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Enhance your Next.js applications with powerful UI component libraries
            </p>
          </div>

          <UILibrariesOverview />
        </div>
      </section>

      {/* ShadCN Dashboard Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">ShadCN/UI Component Library</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Build beautiful, accessible, and customizable interfaces with ShadCN/UI
            </p>
          </div>

          <ShadcnDashboardDemo />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Beautifully Designed</h3>
              <p className="text-neutral-300">
                Professionally crafted components that look great out of the box while being fully customizable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Lightweight & Flexible</h3>
              <p className="text-neutral-300">
                Copy and paste only what you need - no dependencies to manage or unnecessary code to ship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Accessibility First</h3>
              <p className="text-neutral-300">
                Built with accessibility in mind, ensuring your applications work for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telerik Dashboard Section */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Telerik UI Components</h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Enterprise-grade UI components for professional Next.js applications
            </p>
          </div>

          <TelerikDashboardDemo />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-xl overflow-hidden border border-blue-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Advanced Data Visualization</h3>
              <p className="text-neutral-300">
                Comprehensive suite of charts, graphs, and data visualization tools for complex data representation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/5 rounded-xl overflow-hidden border border-purple-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Components</h3>
              <p className="text-neutral-300">
                Professional UI components with advanced features like filtering, sorting, and complex data handling.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/5 rounded-xl overflow-hidden border border-green-800/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-neutral-300">
                Commercial support, extensive documentation, and regular updates for mission-critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

