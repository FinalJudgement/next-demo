"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function UILibrariesOverview() {
  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 bg-neutral-800">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="shadcn"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            shadcn/ui
          </TabsTrigger>
          <TabsTrigger
            value="telerik"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Telerik UI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>UI Component Libraries for Next.js</CardTitle>
              <CardDescription>Enhance your Next.js applications with powerful UI component libraries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Modern Next.js applications benefit from using component libraries that provide pre-built, accessible,
                and customizable UI elements. Two popular options are shadcn/ui and Telerik UI.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">shadcn/ui</h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Beautifully designed components built on Radix UI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Copy-paste approach - no external dependencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Fully customizable with Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Lightweight - only import what you need</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Telerik UI</h3>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Comprehensive suite of professional components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Advanced data visualization and grid capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Enterprise-grade functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Dedicated support and extensive documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shadcn" className="space-y-6">
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>shadcn/ui Integration</CardTitle>
              <CardDescription>How to integrate shadcn/ui into your Next.js project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Installation</h3>
                  <div className="bg-neutral-950 p-3 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                    <pre>
                      {`# Initialize shadcn/ui in your Next.js project
npx shadcn@latest init

# Add components as needed
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add tabs`}
                    </pre>
                  </div>
                </div>

                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Usage</h3>
                  <div className="bg-neutral-950 p-3 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                    <pre>
                      {`import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}`}
                    </pre>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">View shadcn/ui Documentation</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="telerik" className="space-y-6">
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Telerik UI Integration</CardTitle>
              <CardDescription>How to integrate Telerik UI components into your Next.js project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Installation</h3>
                  <div className="bg-neutral-950 p-3 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                    <pre>
                      {`# Install Telerik UI components
npm install --save @progress/kendo-react-grid @progress/kendo-data-query
npm install --save @progress/kendo-react-charts @progress/kendo-drawing
npm install --save @progress/kendo-licensing @progress/kendo-react-intl
npm install --save @progress/kendo-theme-default`}
                    </pre>
                  </div>
                </div>

                <div className="bg-neutral-900 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Usage</h3>
                  <div className="bg-neutral-950 p-3 rounded-md font-mono text-sm text-neutral-300 overflow-x-auto">
                    <pre>
                      {`import { Grid, GridColumn } from "@progress/kendo-react-grid"
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts"
import "@progress/kendo-theme-default/dist/all.css"

export default function MyComponent() {
  const data = [
    { id: 1, name: "Product A", sales: 123 },
    { id: 2, name: "Product B", sales: 456 }
  ]
  
  return (
    <div>
      <Grid data={data}>
        <GridColumn field="id" title="ID" />
        <GridColumn field="name" title="Name" />
        <GridColumn field="sales" title="Sales" />
      </Grid>
    </div>
  )
}`}
                    </pre>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">View Telerik UI Documentation</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

