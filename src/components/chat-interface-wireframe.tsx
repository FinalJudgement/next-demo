"use client"

import { useState, useEffect } from "react"
import { User, MessageSquare, Settings, Search, Send, Home, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChatInterfaceWireframe() {
  const [activeTab, setActiveTab] = useState("chat")
  const [loadingState, setLoadingState] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Animation sequence to show loading order
  useEffect(() => {
    if (isAnimating) {
      const timer1 = setTimeout(() => setLoadingState(1), 500) // SSG loads first
      const timer2 = setTimeout(() => setLoadingState(2), 1500) // ISR loads second
      const timer3 = setTimeout(() => setLoadingState(3), 2500) // SSR loads third
      const timer4 = setTimeout(() => setLoadingState(4), 3500) // CSR loads last
      const timer5 = setTimeout(() => setLoadingState(0), 5000) // Reset
      const timer6 = setTimeout(() => setIsAnimating(false), 5100) // Stop animation

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
        clearTimeout(timer5)
        clearTimeout(timer6)
      }
    }
  }, [isAnimating])

  const startAnimation = () => {
    setLoadingState(0)
    setIsAnimating(true)
  }

  return (
    <div className="border border-neutral-700 rounded-lg overflow-hidden bg-neutral-900">
      <div className="p-3 bg-neutral-800 flex justify-between items-center">
        <h3 className="text-white font-medium">Next.js Chat Application Rendering Demo</h3>
        <Button
          size="sm"
          onClick={startAnimation}
          disabled={isAnimating}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          {isAnimating ? "Loading..." : "Show Loading Sequence"}
        </Button>
      </div>

      {/* Global Navigation - SSG */}
      <div
        className={`w-full border-b border-neutral-700 bg-neutral-800 flex items-center justify-between px-4 py-2 relative ${loadingState === 0 || loadingState >= 1 ? "opacity-100" : "opacity-30"}`}
      >
        {loadingState === 1 && (
          <div className="absolute inset-0 bg-green-500/20 animate-pulse z-10 flex items-center justify-center">
            <span className="text-xs font-bold text-white bg-green-800 px-2 py-1 rounded">SSG LOADING</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-white">ChatApp</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-neutral-700">
            <Home className="h-4 w-4 text-neutral-300" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-neutral-700">
            <Bell className="h-4 w-4 text-neutral-300" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 bg-neutral-700">
            <Menu className="h-4 w-4 text-neutral-300" />
          </Button>
        </div>

        {/* SSG Label */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-900 text-xs text-white px-2 py-1 rounded-b shadow-lg">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span>SSG Rendered Navigation</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 h-[450px]">
        {/* Sidebar - ISR */}
        <div
          className={`col-span-3 border-r border-neutral-700 flex flex-col relative ${loadingState === 0 || loadingState >= 2 ? "opacity-100" : "opacity-30"}`}
        >
          {loadingState === 2 && (
            <div className="absolute inset-0 bg-purple-500/20 animate-pulse z-10 flex items-center justify-center">
              <span className="text-xs font-bold text-white bg-purple-800 px-2 py-1 rounded">ISR LOADING</span>
            </div>
          )}
          <div className="p-3 border-b border-neutral-700 bg-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                <User className="h-4 w-4 text-neutral-300" />
              </div>
              <span className="text-sm font-medium text-neutral-300">Contacts</span>
            </div>
            <div className="relative group">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border border-neutral-800"></div>
              <div className="p-1 rounded-full hover:bg-neutral-700">
                <Settings className="h-4 w-4 text-neutral-400" />
              </div>
            </div>
          </div>

          <div className="p-2 bg-neutral-800">
            <div className="relative">
              <Search className="h-3 w-3 absolute left-2 top-2.5 text-neutral-500" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full bg-neutral-700 text-xs rounded-md py-2 pl-7 pr-2 text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`p-3 flex items-center gap-2 hover:bg-neutral-800 cursor-pointer ${i === 1 ? "bg-neutral-800" : ""}`}
              >
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                  <User className="h-4 w-4 text-neutral-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-neutral-300 truncate">Contact {i}</span>
                    <span className="text-xs text-neutral-500">12:34</span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate">Last message from contact {i}...</p>
                </div>
              </div>
            ))}
          </div>

          {/* ISR Label */}
          <div className="absolute top-12 left-0 bg-purple-900 text-xs text-white px-2 py-1 rounded-r shadow-lg">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span>ISR Rendered Contacts</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 flex flex-col">
          {/* Messages - SSR */}
          <div
            className={`flex-1 p-4 overflow-y-auto bg-neutral-950 relative ${loadingState === 0 || loadingState >= 3 ? "opacity-100" : "opacity-30"}`}
          >
            {loadingState === 3 && (
              <div className="absolute inset-0 bg-green-500/20 animate-pulse z-10 flex items-center justify-center">
                <span className="text-xs font-bold text-white bg-green-800 px-2 py-1 rounded">SSR LOADING</span>
              </div>
            )}
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                  <User className="h-4 w-4 text-neutral-300" />
                </div>
                <div className="bg-neutral-800 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                  <p className="text-sm text-neutral-300">Hey there! How are you doing today?</p>
                  <span className="text-xs text-neutral-500 mt-1 block">12:30</span>
                </div>
              </div>

              <div className="flex items-end gap-2 justify-end">
                <div className="bg-purple-900 p-3 rounded-lg rounded-br-none max-w-[80%]">
                  <p className="text-sm text-white">I'm doing great! Just working on some Next.js rendering models.</p>
                  <span className="text-xs text-purple-300 mt-1 block">12:32</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                  <User className="h-4 w-4 text-neutral-300" />
                </div>
                <div className="bg-neutral-800 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                  <p className="text-sm text-neutral-300">
                    That sounds interesting! Which rendering strategy are you using?
                  </p>
                  <span className="text-xs text-neutral-500 mt-1 block">12:33</span>
                </div>
              </div>
            </div>

            {/* SSR Label */}
            <div className="absolute top-2 right-2 bg-green-900 text-xs text-white px-2 py-1 rounded shadow-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>SSR Rendered Messages</span>
              </div>
            </div>
          </div>

          {/* Input - CSR */}
          <div
            className={`p-3 border-t border-neutral-700 bg-neutral-800 relative ${loadingState === 0 || loadingState >= 4 ? "opacity-100" : "opacity-30"}`}
          >
            {loadingState === 4 && (
              <div className="absolute inset-0 bg-blue-500/20 animate-pulse z-10 flex items-center justify-center">
                <span className="text-xs font-bold text-white bg-blue-800 px-2 py-1 rounded">CSR LOADING</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-neutral-700 rounded-md py-2 px-3 text-sm text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* CSR Label */}
            <div className="absolute top-0 right-0 translate-y-[-100%] bg-blue-900 text-xs text-white px-2 py-1 rounded shadow-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>CSR Rendered Input</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-neutral-800 border-t border-neutral-700">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <h4 className="text-sm font-medium text-white mb-2">Next.js Rendering Strategy Breakdown</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <span className="text-xs text-neutral-300">SSG: Navigation (Loads First)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-xs text-neutral-300">ISR: Contact List (Loads Second)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <span className="text-xs text-neutral-300">SSR: Chat Messages (Loads Third)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-xs text-neutral-300">CSR: Message Input (Loads Last)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

