/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import {
  Bell,
  CalendarIcon,
  ChevronDown,
  Download,
  Home,
  LineChart,
  MoreHorizontal,
  PieChart,
  Plus,
  Search,
  Settings,
} from "lucide-react"

export function ShadcnDashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-lg p-6">
      <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-6 bg-neutral-800">
          <TabsTrigger
            value="dashboard"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Dashboard Demo
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Implementation Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg dark">
            <div className="flex h-[600px] relative">
              {/* Sidebar */}
              <div className="w-56 border-r border-neutral-800 bg-neutral-950 h-full absolute left-0 top-0 bottom-0">
                <div className="border-b border-neutral-800 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center">
                      <LineChart className="h-5 w-5 text-white" />
                    </div>
                    <div className="font-bold text-white">ShadcnUI</div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="px-3 py-1 text-xs font-medium text-neutral-400">Navigation</div>
                  <div className="mt-1">
                    <Button variant="ghost" className="w-full justify-start text-left px-3 text-white">
                      <Home className="w-4 h-4 mr-2" />
                      <span>Dashboard</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left px-3 text-white">
                      <LineChart className="w-4 h-4 mr-2" />
                      <span>Analytics</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left px-3 text-white">
                      <PieChart className="w-4 h-4 mr-2" />
                      <span>Reports</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left px-3 text-white">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>Calendar</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-left px-3 text-white">
                      <Settings className="w-4 h-4 mr-2" />
                      <span>Settings</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-hidden ml-56 bg-neutral-900">
                {/* Header */}
                <header className="bg-neutral-900 border-b border-neutral-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-400" />
                        <input
                          type="search"
                          placeholder="Search..."
                          className="rounded-md border border-neutral-700 bg-neutral-800 pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon">
                        <Bell className="h-4 w-4" />
                      </Button>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-auto p-6 bg-neutral-900">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="mr-2 h-4 w-4" /> New Project
                    </Button>
                  </div>

                  {/* Chart Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Line Chart Card */}
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Line Chart</CardTitle>
                        </div>
                        <CardDescription className="text-neutral-400">Monthly trends</CardDescription>
                      </CardHeader>
                      <CardContent className="h-48 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center rounded-md p-4">
                          <svg width="100%" height="100%" viewBox="0 0 300 200" className="overflow-visible">
                            <g transform="translate(0, 200) scale(1, -1)">
                              {/* X and Y axis */}
                              <line x1="0" y1="0" x2="300" y2="0" stroke="#525252" strokeWidth="1" />
                              <line x1="0" y1="0" x2="0" y2="200" stroke="#525252" strokeWidth="1" />

                              {/* Line chart */}
                              <path
                                d="M0,40 L50,90 L100,60 L150,120 L200,80 L250,140 L300,100"
                                fill="none"
                                stroke="#8b5cf6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />

                              {/* Data points */}
                              <circle cx="0" cy="40" r="4" fill="#8b5cf6" />
                              <circle cx="50" cy="90" r="4" fill="#8b5cf6" />
                              <circle cx="100" cy="60" r="4" fill="#8b5cf6" />
                              <circle cx="150" cy="120" r="4" fill="#8b5cf6" />
                              <circle cx="200" cy="80" r="4" fill="#8b5cf6" />
                              <circle cx="250" cy="140" r="4" fill="#8b5cf6" />
                              <circle cx="300" cy="100" r="4" fill="#8b5cf6" />
                            </g>
                          </svg>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Bar Chart Card */}
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <CardTitle>Bar Chart</CardTitle>
                        <CardDescription className="text-neutral-400">Quarterly results</CardDescription>
                      </CardHeader>
                      <CardContent className="h-48 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center rounded-md p-4">
                          <svg width="100%" height="100%" viewBox="0 0 300 200" className="overflow-visible">
                            <g transform="translate(0, 200) scale(1, -1)">
                              {/* X and Y axis */}
                              <line x1="0" y1="0" x2="300" y2="0" stroke="#525252" strokeWidth="1" />
                              <line x1="0" y1="0" x2="0" y2="200" stroke="#525252" strokeWidth="1" />

                              {/* Bar chart */}
                              <rect x="20" y="0" width="30" height="40" fill="#c4b5fd" />
                              <rect x="60" y="0" width="30" height="90" fill="#a78bfa" />
                              <rect x="100" y="0" width="30" height="60" fill="#8b5cf6" />
                              <rect x="140" y="0" width="30" height="120" fill="#7c3aed" />
                              <rect x="180" y="0" width="30" height="80" fill="#6d28d9" />
                              <rect x="220" y="0" width="30" height="140" fill="#5b21b6" />
                              <rect x="260" y="0" width="30" height="100" fill="#4c1d95" />
                            </g>
                          </svg>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Pie Chart Card */}
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <CardTitle>Pie Chart</CardTitle>
                        <CardDescription className="text-neutral-400">Revenue breakdown</CardDescription>
                      </CardHeader>
                      <CardContent className="h-48 flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center rounded-md p-4">
                          <svg width="150" height="150" viewBox="0 0 100 100">
                            {/* Pie chart */}
                            <circle cx="50" cy="50" r="40" fill="#262626" />

                            {/* Pie slices */}
                            <path d="M50,50 L90,50 A40,40 0 0,1 75,85 z" fill="#c4b5fd" />
                            <path d="M50,50 L75,85 A40,40 0 0,1 25,85 z" fill="#a78bfa" />
                            <path d="M50,50 L25,85 A40,40 0 0,1 10,50 z" fill="#8b5cf6" />
                            <path d="M50,50 L10,50 A40,40 0 0,1 50,10 z" fill="#7c3aed" />
                            <path d="M50,50 L50,10 A40,40 0 0,1 90,50 z" fill="#6d28d9" />

                            {/* Center circle */}
                            <circle cx="50" cy="50" r="15" fill="#262626" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Calendar and Tasks Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Calendar Card */}
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                        <CardDescription className="text-neutral-400">Schedule and events</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border border-neutral-700"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View All Events
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Tasks Card */}
                    <Card className="bg-neutral-800 border-neutral-700 text-white">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Tasks</CardTitle>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardDescription className="text-neutral-400">Manage your tasks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {tasks.map((task) => (
                            <div
                              key={task.id}
                              className={`flex items-start gap-2 rounded-md border p-3 text-sm ${task.completed
                                  ? "border-neutral-700 bg-neutral-800/50 text-neutral-400"
                                  : "border-neutral-700 bg-neutral-800"
                                }`}
                            >
                              <div
                                className={`mt-0.5 h-5 w-5 rounded-md border border-neutral-700 ${task.completed ? "bg-purple-600" : ""}`}
                              >
                                {task.completed && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 text-white"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className={`font-medium ${task.completed ? "line-through" : ""}`}>
                                  {task.title}
                                </div>
                                <div className="text-xs text-neutral-400">{task.dueDate}</div>
                              </div>
                              <Button variant="ghost" size="icon" className="h-7 w-7">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View All Tasks
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Table Card */}
                  <Card className="bg-neutral-800 border-neutral-700 text-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Recent Activities</CardTitle>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" /> Export
                        </Button>
                      </div>
                      <CardDescription className="text-neutral-400">Your latest activities and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="border-neutral-700">
                            <TableHead>Description</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {activities.map((activity) => (
                            <TableRow key={activity.id} className="border-neutral-700">
                              <TableCell className="font-medium">{activity.description}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-neutral-700 text-white">
                                  {activity.category}
                                </Badge>
                              </TableCell>
                              <TableCell>{activity.date}</TableCell>
                              <TableCell>
                                <Badge
                                  className={
                                    activity.status === "Completed"
                                      ? "bg-green-900/30 text-green-400 border-green-800"
                                      : activity.status === "In Progress"
                                        ? "bg-blue-900/30 text-blue-400 border-blue-800"
                                        : "bg-yellow-900/30 text-yellow-400 border-yellow-800"
                                  }
                                >
                                  {activity.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Open menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent
                                    align="end"
                                    className="bg-neutral-800 border-neutral-700 text-white"
                                  >
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem className="focus:bg-neutral-700">View details</DropdownMenuItem>
                                    <DropdownMenuItem className="focus:bg-neutral-700">Edit</DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-neutral-700" />
                                    <DropdownMenuItem className="text-red-400 focus:bg-neutral-700">
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button variant="outline" size="sm">
                        View All Activities
                      </Button>
                    </CardFooter>
                  </Card>
                </main>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {`// Building beautiful UIs with shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { LineChart, BarChart3, PieChart } from 'lucide-react'

export function Dashboard() {
return (
  <div className="flex h-screen dark">
    {/* Sidebar */}
    <div className="w-56 border-r border-neutral-800 bg-neutral-950">
      {/* Sidebar content */}
    </div>
    
    <div className="flex-1 flex flex-col overflow-hidden bg-neutral-900">
      <header className="bg-neutral-900 border-b border-neutral-800 p-4">
        {/* Header content */}
      </header>
      
      <main className="flex-1 overflow-auto p-6 bg-neutral-900">
        {/* Chart cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Line Chart Card */}
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Line Chart</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Line chart visualization */}
            </CardContent>
          </Card>
          
          {/* Bar Chart Card */}
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Bar chart visualization */}
            </CardContent>
          </Card>
          
          {/* Pie Chart Card */}
          <Card className="bg-neutral-800 border-neutral-700 text-white">
            <CardHeader>
              <CardTitle>Pie Chart</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Pie chart visualization */}
            </CardContent>
          </Card>
        </div>
        
        {/* Calendar Card */}
        <Card className="mb-6 bg-neutral-800 border-neutral-700 text-white">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" />
          </CardContent>
        </Card>
        
        {/* Table Card */}
        <Card className="bg-neutral-800 border-neutral-700 text-white">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-700">
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Table rows */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  </div>
)
}

// Benefits of shadcn/ui:
// - Beautifully designed components
// - Fully customizable with Tailwind
// - Lightweight - only import what you need
// - Accessible and responsive by default
// - Consistent theming and styling
// - Copy and paste into your project
// - No external dependencies to manage
`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample activity data
const activities = [
  {
    id: 1,
    description: "Project Created",
    category: "Project",
    date: "Today, 2:30 PM",
    status: "Completed",
  },
  {
    id: 2,
    description: "Design Review",
    category: "Meeting",
    date: "Yesterday",
    status: "Completed",
  },
  {
    id: 3,
    description: "Component Library Update",
    category: "Development",
    date: "Jun 15, 2023",
    status: "In Progress",
  },
  {
    id: 4,
    description: "User Testing",
    category: "Research",
    date: "Jun 14, 2023",
    status: "Scheduled",
  },
  {
    id: 5,
    description: "Documentation",
    category: "Content",
    date: "Jun 13, 2023",
    status: "In Progress",
  },
]

// Sample task data
const tasks = [
  {
    id: 1,
    title: "Update dashboard design",
    dueDate: "Today, 5:00 PM",
    completed: true,
  },
  {
    id: 2,
    title: "Prepare presentation for client meeting",
    dueDate: "Tomorrow, 10:00 AM",
    completed: false,
  },
  {
    id: 3,
    title: "Review new feature requirements",
    dueDate: "Jun 18, 2023",
    completed: false,
  },
  {
    id: 4,
    title: "Fix navigation bug in mobile view",
    dueDate: "Jun 20, 2023",
    completed: false,
  },
  {
    id: 5,
    title: "Implement dark mode toggle",
    dueDate: "Jun 22, 2023",
    completed: false,
  },
]

