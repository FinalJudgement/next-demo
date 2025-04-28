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
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Home,
  MoreHorizontal,
  PieChart,
  Plus,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"

export function FinanceDashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard")

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
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex h-[600px]">
              {/* Sidebar */}
              <SidebarProvider defaultOpen={true}>
                <Sidebar className="border-r border-gray-200 bg-gray-50">
                  <SidebarHeader className="border-b border-gray-200 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div className="font-bold text-gray-900">FinTrack</div>
                    </div>
                  </SidebarHeader>
                  <SidebarContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <Home className="w-4 h-4 mr-2" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <CreditCard className="w-4 h-4 mr-2" />
                          <span>Accounts</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <BarChart3 className="w-4 h-4 mr-2" />
                          <span>Investments</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <PieChart className="w-4 h-4 mr-2" />
                          <span>Budget</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Calendar</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Users className="w-4 h-4 mr-2" />
                          <span>Contacts</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarContent>
                  <SidebarFooter className="border-t border-gray-200 p-4">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="w-4 h-4 mr-2" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="w-4 h-4 mr-2" />
                          <span>Profile</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarFooter>
                </Sidebar>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Header */}
                  <header className="bg-white border-b border-gray-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                          <input
                            type="search"
                            placeholder="Search..."
                            className="rounded-md border border-gray-300 pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
                  <main className="flex-1 overflow-auto p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Plus className="mr-2 h-4 w-4" /> Add Account
                      </Button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$24,563.55</div>
                          <div className="flex items-center mt-1 text-sm">
                            <span className="text-green-600 flex items-center">
                              <ArrowUp className="h-3 w-3 mr-1" /> 3.2%
                            </span>
                            <span className="text-gray-500 ml-2">from last month</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-gray-500">Monthly Income</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$8,350.00</div>
                          <div className="flex items-center mt-1 text-sm">
                            <span className="text-green-600 flex items-center">
                              <ArrowUp className="h-3 w-3 mr-1" /> 5.1%
                            </span>
                            <span className="text-gray-500 ml-2">from last month</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-gray-500">Monthly Expenses</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$5,240.35</div>
                          <div className="flex items-center mt-1 text-sm">
                            <span className="text-red-600 flex items-center">
                              <ArrowDown className="h-3 w-3 mr-1" /> 2.3%
                            </span>
                            <span className="text-gray-500 ml-2">from last month</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Recent Transactions */}
                    <Card className="mb-6">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Recent Transactions</CardTitle>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" /> Export
                          </Button>
                        </div>
                        <CardDescription>Your latest financial activities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Description</TableHead>
                              <TableHead>Category</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transactions.map((transaction) => (
                              <TableRow key={transaction.id}>
                                <TableCell className="font-medium">{transaction.description}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="bg-gray-100">
                                    {transaction.category}
                                  </Badge>
                                </TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell
                                  className={`text-right ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}
                                >
                                  {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Open menu</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                      <DropdownMenuItem>View details</DropdownMenuItem>
                                      <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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
                          View All Transactions
                        </Button>
                      </CardFooter>
                    </Card>
                  </main>
                </div>
              </SidebarProvider>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="border border-neutral-800 rounded-lg p-6 bg-neutral-900">
          <div className="bg-neutral-950 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300">
              {`// Finance Dashboard with shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Download } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function FinanceDashboard() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          {/* Sidebar content */}
        </Sidebar>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b p-4">
            {/* Header content */}
          </header>
          
          <main className="flex-1 overflow-auto p-6 bg-gray-50">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,563.55</div>
                  <div className="flex items-center mt-1 text-sm">
                    <span className="text-green-600 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" /> 3.2%
                    </span>
                    <span className="text-gray-500 ml-2">from last month</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* More cards... */}
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Transaction rows */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

// Benefits:
// - Accessible components out of the box
// - Consistent design system
// - Highly customizable with Tailwind
// - Responsive and interactive
`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample transaction data
const transactions = [
  {
    id: 1,
    description: "Grocery Store",
    category: "Food",
    date: "Today, 2:30 PM",
    amount: -120.5,
  },
  {
    id: 2,
    description: "Salary Deposit",
    category: "Income",
    date: "Yesterday",
    amount: 3200.0,
  },
  {
    id: 3,
    description: "Electric Bill",
    category: "Utilities",
    date: "Jun 15, 2023",
    amount: -95.4,
  },
  {
    id: 4,
    description: "Freelance Payment",
    category: "Income",
    date: "Jun 14, 2023",
    amount: 850.0,
  },
  {
    id: 5,
    description: "Coffee Shop",
    category: "Food",
    date: "Jun 13, 2023",
    amount: -8.75,
  },
]

