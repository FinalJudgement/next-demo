import '../globals.css';
import { Urbanist } from "next/font/google";
import { Providers } from '@/lib/providers';
import Image from "next/image"
import { Button } from '@/components/ui/button';
import { HorizontalNavPill } from "@/components/horizontal-nav-pill";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
    title: 'Next.js Demo',
    description: 'Created with Next.js App Router',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-slate-900 text-slate-100">
            <body className={urbanist.className} >
                <Providers>
                    <HorizontalNavPill />
                    <div className="flex min-h-screen flex-col bg-black text-neutral-200">
                        <header className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
                            <div className="container flex h-16 items-center justify-between px-4">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/placeholder.svg?height=40&width=40"
                                        alt="Company Logo"
                                        width={40}
                                        height={40}
                                        className="rounded"
                                    />
                                    <span className="font-semibold">Next.js Presentation</span>
                                </div>

                                {/* Search placeholder */}
                                <div className="hidden md:flex relative w-full max-w-xs mx-4">
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-neutral-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            type="search"
                                            className="block w-full p-2 pl-10 text-sm bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white"
                                            placeholder="Search documentation..."
                                        />
                                    </div>
                                </div>

                                <nav className="hidden md:flex items-center gap-4">
                                    <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white">
                                        Resources
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white">
                                        GitHub
                                    </Button>
                                </nav>

                                {/* Mobile menu button */}
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <svg className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Button>
                            </div>

                            {/* Mobile search - shown only on mobile */}
                            <div className="md:hidden px-4 pb-3">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-neutral-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        className="block w-full p-2 pl-10 text-sm bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-white"
                                        placeholder="Search documentation..."
                                    />
                                </div>
                            </div>
                        </header>
                        {children}
                        <footer className="py-6 bg-neutral-950 border-t border-neutral-800">
                            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                                <div className="flex flex-col md:flex-row justify-between items-center">
                                    <div className="mb-4 md:mb-0">
                                        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} | Next.js Presentation</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                                            Resources
                                        </Button>
                                        <Button variant="ghost" size="sm" className="text-neutral-500 hover:text-neutral-300">
                                            GitHub
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-4 text-xs text-neutral-600 text-center md:text-left">
                                    <p>
                                        Learn more at{" "}
                                        <a href="https://nextjs.org/docs" className="text-purple-600 hover:text-purple-500">
                                            Next.js Documentation
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
