'use client'

import { useEffect } from "react";
import Hero from "@/components/Hero";
import { type TOCItem } from "@/components/table-of-contents";
import { NavMenu } from "@/components/NavMenu";
import Bounded from "@/lib/Bounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const tocItems: TOCItem[] = [
  {
    id: "hero",
    title: "Hero",
    level: 1,
    
  },
  {
    id: "getting-started",
    title: "Getting Started",
    level: 2,
    items: [
      {
        id: "installation",
        title: "Installation",
        level: 3,
      },
      {
        id: "configuration",
        title: "Configuration",
        level: 3,
      },
    ],
  },
  {
    id: "features",
    title: "Features",
    level: 2,
    items: [
      {
        id: "components",
        title: "Components",
        level: 3,
        items: [
          {
            id: "button",
            title: "Button",
            level: 4,
          },
          {
            id: "card",
            title: "Card",
            level: 4,
          },
        ],
      },
      {
        id: "hooks",
        title: "Hooks",
        level: 3,
      },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    level: 2,
  },
]


export default function Page() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="container mx-auto min-h-screen p-4 md:p-8">
      {/* Navigation Menu */}
      <NavMenu items={tocItems} />
      
      <div id="hero">
        <Hero/>
      </div>
        
      <Bounded>
          <div className="mt-8 flex flex-col md:flex-row md:gap-12">
          
            <div className="w-full md:w-3/4">
            
              <section id="getting-started" className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">Getting Started</h2>
                <p className="mb-6 text-muted-foreground">
                  Learn how to get started with our library and integrate it into your projects.
                </p>

                <div id="installation" className="mb-6">
                  <h3 className="mb-2 text-xl font-medium">Installation</h3>
                  <p className="mb-4">Install the package using npm, yarn, or pnpm:</p>
                  <pre className="rounded-md bg-muted p-4">
                    <code>npm install @acme/ui</code>
                  </pre>
                </div>

                <div id="configuration" className="mb-6">
                  <h3 className="mb-2 text-xl font-medium">Configuration</h3>
                  <p>Configure the library in your project by adding the following to your configuration file:</p>
                  <pre className="mt-4 rounded-md bg-muted p-4">
                    <code>{`// tailwind.config.js
                      module.exports = {
                        content: [
                          './node_modules/@acme/ui/**/*.js',
                          // ...
                        ],
                        // ...
                      }`}
                    </code>
                  </pre>
                </div>
              </section>

              <section id="features" className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">Features</h2>
                <p className="mb-6 text-muted-foreground">Explore the features and capabilities of our library.</p>

                <div id="components" className="mb-6">
                  <h3 className="mb-2 text-xl font-medium">Components</h3>
                  <p className="mb-4">
                    Our library includes a variety of pre-built components to help you build your UI faster.
                  </p>

                  <div id="button" className="mb-4">
                    <h4 className="mb-2 text-lg font-medium">Button</h4>
                    <p>Buttons allow users to take actions with a single tap.</p>
                  </div>

                  <div id="card" className="mb-4">
                    <h4 className="mb-2 text-lg font-medium">Card</h4>
                    <p>Cards contain content and actions about a single subject.</p>
                  </div>
                </div>

                <div id="hooks" className="mb-6">
                  <h3 className="mb-2 text-xl font-medium">Hooks</h3>
                  <p>Custom React hooks to handle common patterns and state management.</p>
                </div>
              </section>

              <section id="api-reference" className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold">API Reference</h2>
                <p className="text-muted-foreground">Detailed API documentation for all components and utilities.</p>
              </section>
            </div>

            
          </div>
          </Bounded>
    </main>
  );
}
