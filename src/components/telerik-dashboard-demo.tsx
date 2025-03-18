/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TelerikDashboardDemo() {
  const [activeTab, setActiveTab] = useState("demo")

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="demo" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="demo"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Telerik UI Demo
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Implementation Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Telerik UI Components</CardTitle>
              <CardDescription>Powerful UI components for professional web applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Data Grid Mockup */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
                  <div className="font-medium">KendoReact Data Grid</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-7 bg-white/20 hover:bg-white/30 text-white">
                      Export
                    </Button>
                    <Button size="sm" variant="secondary" className="h-7 bg-white/20 hover:bg-white/30 text-white">
                      Settings
                    </Button>
                  </div>
                </div>
                <div className="bg-white">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="p-2 text-left font-medium text-gray-600">Product ID</th>
                        <th className="p-2 text-left font-medium text-gray-600">Product Name</th>
                        <th className="p-2 text-left font-medium text-gray-600">Category</th>
                        <th className="p-2 text-left font-medium text-gray-600">Price</th>
                        <th className="p-2 text-left font-medium text-gray-600">In Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      {telerikProducts.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="p-2">{product.id}</td>
                          <td className="p-2">{product.name}</td>
                          <td className="p-2">{product.category}</td>
                          <td className="p-2">${product.price.toFixed(2)}</td>
                          <td className="p-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {product.inStock ? "Yes" : "No"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="bg-gray-50 p-2 flex items-center justify-between">
                    <div className="text-sm text-gray-500">Showing 1-5 of 100 items</div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                        1
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                        2
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                        3
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 w-7 p-0">
                        ...
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
                  <div className="font-medium">KendoReact Charts</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-7 bg-white/20 hover:bg-white/30 text-white">
                      Export
                    </Button>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="h-64 flex">
                    {/* Bar Chart */}
                    <div className="w-1/2 h-full flex items-end justify-around p-4 border-r">
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-500 rounded-t-sm" style={{ height: "40%" }}></div>
                        <div className="mt-2 text-xs">Q1</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-500 rounded-t-sm" style={{ height: "65%" }}></div>
                        <div className="mt-2 text-xs">Q2</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-500 rounded-t-sm" style={{ height: "85%" }}></div>
                        <div className="mt-2 text-xs">Q3</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-500 rounded-t-sm" style={{ height: "55%" }}></div>
                        <div className="mt-2 text-xs">Q4</div>
                      </div>
                    </div>

                    {/* Line Chart */}
                    <div className="w-1/2 h-full flex items-center justify-center p-4">
                      <svg width="100%" height="100%" viewBox="0 0 300 200">
                        {/* Axes */}
                        <line x1="0" y1="180" x2="300" y2="180" stroke="#e5e7eb" strokeWidth="1" />
                        <line x1="0" y1="0" x2="0" y2="180" stroke="#e5e7eb" strokeWidth="1" />

                        {/* Line */}
                        <path
                          d="M0,150 L75,100 L150,120 L225,60 L300,90"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        {/* Points */}
                        <circle cx="0" cy="150" r="5" fill="#3b82f6" />
                        <circle cx="75" cy="100" r="5" fill="#3b82f6" />
                        <circle cx="150" cy="120" r="5" fill="#3b82f6" />
                        <circle cx="225" cy="60" r="5" fill="#3b82f6" />
                        <circle cx="300" cy="90" r="5" fill="#3b82f6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scheduler Mockup */}
              <div className="border rounded-md overflow-hidden">
                <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
                  <div className="font-medium">KendoReact Scheduler</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-7 bg-white/20 hover:bg-white/30 text-white">
                      Today
                    </Button>
                    <Button size="sm" variant="secondary" className="h-7 bg-white/20 hover:bg-white/30 text-white">
                      Week
                    </Button>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="grid grid-cols-7 gap-1">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center font-medium text-sm p-2 bg-gray-50">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div key={i} className="h-16 border p-1 text-xs">
                        <div className="text-right text-gray-500 mb-1">{i + 1}</div>
                        {i === 3 && <div className="bg-blue-100 text-blue-800 p-1 rounded text-xs">Meeting</div>}
                        {i === 10 && <div className="bg-green-100 text-green-800 p-1 rounded text-xs">Conference</div>}
                        {i === 15 && <div className="bg-purple-100 text-purple-800 p-1 rounded text-xs">Deadline</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">Learn More About Telerik UI</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {`// Integrating Telerik UI components with Next.js
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import { Scheduler, SchedulerView } from '@progress/kendo-react-scheduler';
import '@progress/kendo-theme-default/dist/all.css';

// Sample data
const products = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, inStock: true },
  { id: 2, name: 'Product B', category: 'Clothing', price: 59.99, inStock: true },
  { id: 3, name: 'Product C', category: 'Home', price: 129.99, inStock: false },
];

const salesData = [
  { quarter: 'Q1', sales: 123000 },
  { quarter: 'Q2', sales: 165000 },
  { quarter: 'Q3', sales: 196000 },
  { quarter: 'Q4', sales: 142000 },
];

export default function TelerikDashboard() {
  return (
    <div className="space-y-6">
      {/* Data Grid */}
      <div className="border rounded-md overflow-hidden">
        <h2 className="bg-blue-600 text-white p-3">KendoReact Data Grid</h2>
        <Grid data={products} style={{ height: '300px' }}>
          <GridColumn field="id" title="Product ID" width="100px" />
          <GridColumn field="name" title="Product Name" />
          <GridColumn field="category" title="Category" />
          <GridColumn field="price" title="Price" format="{0:c}" />
          <GridColumn field="inStock" title="In Stock" 
            cell={(props) => (
              <td>
                {props.dataItem.inStock ? 'Yes' : 'No'}
              </td>
            )} 
          />
        </Grid>
      </div>

      {/* Charts */}
      <div className="border rounded-md overflow-hidden">
        <h2 className="bg-blue-600 text-white p-3">KendoReact Charts</h2>
        <div className="flex">
          <div className="w-1/2 p-4">
            <Chart>
              <ChartSeries>
                <ChartSeriesItem
                  type="column"
                  data={salesData}
                  field="sales"
                  categoryField="quarter"
                  color="#3b82f6"
                />
              </ChartSeries>
            </Chart>
          </div>
          <div className="w-1/2 p-4">
            <Chart>
              <ChartSeries>
                <ChartSeriesItem
                  type="line"
                  data={salesData}
                  field="sales"
                  categoryField="quarter"
                  markers={{ visible: true }}
                  color="#3b82f6"
                />
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>

      {/* Scheduler */}
      <div className="border rounded-md overflow-hidden">
        <h2 className="bg-blue-600 text-white p-3">KendoReact Scheduler</h2>
        <Scheduler
          data={[
            {
              id: 1,
              title: 'Meeting',
              start: new Date(2023, 5, 4, 10, 0),
              end: new Date(2023, 5, 4, 11, 30),
            },
            {
              id: 2,
              title: 'Conference',
              start: new Date(2023, 5, 11, 9, 0),
              end: new Date(2023, 5, 11, 17, 0),
            },
          ]}
          defaultView="week"
        >
          <SchedulerView type="day" />
          <SchedulerView type="week" />
          <SchedulerView type="month" />
        </Scheduler>
      </div>
    </div>
  );
}

// Benefits of Telerik UI:
// - Enterprise-grade UI components
// - Advanced data visualization capabilities
// - Comprehensive suite of components
// - Professional support and documentation
// - Regular updates and improvements
// - Optimized for performance
// - Accessibility compliance
`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample product data
const telerikProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    inStock: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 89.99,
    inStock: false,
  },
  {
    id: 4,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 59.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Mouse",
    category: "Computers",
    price: 39.99,
    inStock: true,
  },
]

