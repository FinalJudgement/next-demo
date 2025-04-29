'use client'

import { useEffect, useRef } from "react";
import { type TOCItem } from "@/components/table-of-contents";
import { NavMenu } from "@/components/NavMenu";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero";
import PillShape from "@/components/shapes/PillShape";
import DiamondShape from "@/components/shapes/DiamondShape";
import DonutShape from "@/components/shapes/DonutShape";

const tocItems: TOCItem[] = [
  {
    id: "panel-1",
    title: "Hero",
    level: 1,
  },
  {
    id: "panel-2",
    title: "Features",
    level: 1,
  },
  {
    id: "panel-3",
    title: "Services",
    level: 1,
  },
  {
    id: "panel-4",
    title: "Portfolio",
    level: 1,
  },
  {
    id: "panel-5",
    title: "Introduction",
    level: 1,
  },
]

export default function Page() {
  // Refs for the shape containers
  const pillContainerRef = useRef(null);
  const diamondContainerRef = useRef(null);
  const donutContainerRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Get all panels
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    
    // Set up the container for scrolling
    const totalPanels = panels.length;
    gsap.set(".panels-container", { 
      height: (totalPanels * 100) + "vh",
      position: "relative"
    });
    
    // Set all panels to position: fixed to avoid flickering
    gsap.set(panels, { 
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      overflow: "hidden"
    });
    
    // Initially hide all panels except the first one
    panels.forEach((panel, i) => {
      if (i > 0) {
        gsap.set(panel, { 
          autoAlpha: 1,
          y: "100vh", // Start below the viewport
          zIndex: 10 + i // Ensure proper stacking
        });
      } else {
        gsap.set(panel, { zIndex: 10 }); // First panel
      }
    });
    
    // Create a master timeline
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".panels-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
        pin: false, // Don't pin the container
        anticipatePin: 1
      }
    });
    
    // Add animations for each panel transition
    panels.forEach((panel, i) => {
      if (i < totalPanels - 1) {
        const nextPanel = panels[i + 1];
        const sectionTl = gsap.timeline();
        
        // Create a bidirectional animation that works when scrolling both up and down:
        
        sectionTl
          // Animate the next panel from below when scrolling down
          .fromTo(nextPanel, 
            { y: "100vh" }, // Start position (below viewport)
            { 
              y: "0vh", // End position (in viewport)
              ease: "power2.out", 
              duration: 0.7
            }, 
            0
          )
          // Move the current panel up when scrolling down
          .to(panel, { 
            y: "-100vh", // Move up and out of view when scrolling down
            ease: "power2.in",
            duration: 0.5
          }, 0.6); // Start slightly before the next panel is fully in
        
        // Add section timeline to master timeline
        masterTimeline.add(sectionTl, i);
        
        // Add individual ScrollTriggers for each panel to handle reverse animations
        if (i > 0) {
          ScrollTrigger.create({
            trigger: `#panel-${i}`,
            start: "top 80%", // When this panel reaches 80% from the top
            onEnterBack: () => {
              // When scrolling back up to this panel, animate it back down into view
              gsap.to(panel, {
                y: "0vh", // Move back to original position
                duration: 0.5,
                ease: "power2.out"
              });
              
              // Move the next panel back down below the viewport
              gsap.to(nextPanel, {
                y: "100vh",
                duration: 0.5,
                ease: "power2.in"
              });
            },
            markers: false
          });
        }
      }
    });
    
    // Create animations for shapes that are synchronized with panel transitions
    // Features panel (panel-2) shapes
    if (pillContainerRef.current && diamondContainerRef.current) {
      // Set initial state - hidden
      gsap.set(pillContainerRef.current, { autoAlpha: 0, scale: 0 });
      gsap.set(diamondContainerRef.current, { autoAlpha: 0, scale: 0 });
      
      // Directly animate shapes when panel-2 is in view
      ScrollTrigger.create({
        trigger: "#panel-2",
        start: "top 80%", // When panel-2 reaches the top of the viewport
        onEnter: () => {
          // Animate pill shape immediately
          gsap.to(pillContainerRef.current, { 
            autoAlpha: 1, 
            scale: 0.8,
            duration: 1,
            ease: "elastic.out(1,0.3)",
            delay: 0.2 // Small delay after panel is in view
          });
          
          // Animate diamond shape with a slight delay
          gsap.to(diamondContainerRef.current, { 
            autoAlpha: 1, 
            scale: 1,
            duration: 1,
            delay: 0.5, // Slightly longer delay for staggered effect
            ease: "elastic.out(1,0.3)"
          });
        },
        onLeaveBack: () => {
          // Hide shapes when scrolling back up
          gsap.to([pillContainerRef.current, diamondContainerRef.current], { 
            autoAlpha: 0, 
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in"
          });
        },
        markers: false
      });
      
      // Hide shapes when scrolling to the next panel
      ScrollTrigger.create({
        trigger: "#panel-3",
        start: "top 80%", // When panel-3 is 80% from the top of the viewport
        onEnter: () => {
          // Hide panel-2 shapes when panel-3 starts to enter
          gsap.to([pillContainerRef.current, diamondContainerRef.current], { 
            autoAlpha: 0, 
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in"
          });
        },
        onLeaveBack: () => {
          // Show panel-2 shapes again when scrolling back up from panel-3
          gsap.to(pillContainerRef.current, { 
            autoAlpha: 1, 
            scale: 0.8,
            duration: 0.5,
            ease: "power2.out"
          });
          gsap.to(diamondContainerRef.current, { 
            autoAlpha: 1, 
            scale: 1,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out"
          });
        },
        markers: false
      });
    }
    
    // Services panel (panel-3) shapes
    if (donutContainerRef.current) {
      // Set initial state - hidden
      gsap.set(donutContainerRef.current, { autoAlpha: 0, scale: 0 });
      
      // Directly animate shape when panel-3 is in view
      ScrollTrigger.create({
        trigger: "#panel-3",
        start: "top -20%", // When panel-3 reaches the top of the viewport
        onEnter: () => {
          // Animate donut shape immediately
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 1, 
            scale: 1,
            duration: 1,
            ease: "elastic.out(1,0.3)",
            delay: 0.2 // Small delay after panel is in view
          });
        },
        onLeaveBack: () => {
          // Hide shape when scrolling back up
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 0, 
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in"
          });
        },
        markers: false
      });
      
      // Hide shape when scrolling to the next panel
      ScrollTrigger.create({
        trigger: "#panel-4",
        start: "top 80%", // When panel-4 is 80% from the top of the viewport
        onEnter: () => {
          // Hide panel-3 shape when panel-4 starts to enter
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 0, 
            scale: 0.5,
            duration: 0.3,
            ease: "power2.in"
          });
        },
        onLeaveBack: () => {
          // Show panel-3 shape again when scrolling back up from panel-4
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 1, 
            scale: 1.8,
            duration: 0.5,
            ease: "power2.out"
          });
        },
        markers: false
      });
    }
    
    // Add a special ScrollTrigger for the first panel to handle scrolling back to top
    ScrollTrigger.create({
      trigger: "#panel-1",
      start: "top 80%", // When panel-1 is 80% from the top of the viewport
      onEnterBack: () => {
        // Reset the first panel when scrolling back to the top
        gsap.to(panels[0], {
          y: "0vh", // Move back to original position
          duration: 0.5,
          ease: "power2.out"
        });
      },
      markers: false
    });
    
    // Clean up all ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Fixed Navigation Menu */}
      <div className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <NavMenu items={tocItems} />
        </div>
      </div>
      
      {/* Panels */}
      <div className="panels-container ">
        {/* Hero Panel */}
        <section 
          id="panel-1" 
          className="panel h-screen w-screen bg-slate-900 flex items-center justify-center"
        >
          <Hero />
        </section>
        
        {/* Features Panel */}
        <section 
          id="panel-2" 
          className="panel h-screen w-screen bg-purple-400 flex items-center justify-center relative overflow-hidden"
        >
          {/* Shapes positioned absolutely */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div ref={pillContainerRef} className="absolute top-[10%] left-[5%] w-[30%] md:w-[20%]">
              <PillShape 
                className="w-full" 
                scale={2} 
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
              />
            </div>
            <div ref={diamondContainerRef} className="absolute bottom-[15%] right-[10%] w-[30%] md:w-[20%]">
              <DiamondShape 
                className="w-full" 
                scale={1.5} 
                position={[0, 0, 0]} 
                rotation={[0.5, 0.5, 0]} 
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Presentation</h2>
            <div className="gap-8 max-w-5xl mx-auto px-4">
              <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
              <p className="text-xl text-white">Welcome to our deep dive into Next.js — a powerful, flexible framework for building the modern web.</p>
              <p className="text-xl text-white mt-4">Throughout this session, we'll explore how Next.js helps developers build fast, scalable, and visually stunning applications with ease. Whether you're just starting or looking to sharpen your skills, you're in the right place.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Panel */}
        <section 
          id="panel-3" 
          className="panel h-screen w-screen bg-green-400 flex items-center justify-center relative overflow-hidden"
        >
          {/* Donut shape */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div ref={donutContainerRef} className="absolute top-[20%] right-[15%] w-[30%] md:w-[20%]">
              <DonutShape 
                className="w-full" 
                scale={1.8} 
                position={[0, 0, 0]} 
                rotation={[0.3, 0.5, 0]} 
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Concepts</h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4">
              <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <p className="text-xl text-white">
                  We'll break down the key concepts behind Frontend development, Server capabilities, and API creation — and show how Next.js brings them all together into one streamlined experience.
                </p>
                <p className="text-xl text-white mt-4">
                  You'll get a clearer view of how modern web apps can be built faster, with better structure, better performance, and much less friction.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Panel */}
        <section 
          id="panel-4" 
          className="panel h-screen w-screen bg-blue-400 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Quiz</h2>
            <div className="gap-6 max-w-4xl mx-auto px-4">
              <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <p className="text-xl text-white text-center">
                  At the end of our presentation, it’s your turn to shine!<br/>
                  Test your knowledge in a quick, fun quiz — and remember, both your score and your time will matter.
                </p>
                <p className="text-xl text-white text-center mt-2">
                  The highest scorer with the fastest time will be crowned the winner and receive a prize!
                </p>
                <div className="mt-6">
                  <Link 
                    href="/quiz" 
                    className="bg-white text-red-400 hover:bg-red-100 transition-colors px-6 py-3 rounded-lg font-bold shadow-lg"
                  >
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Panel */}
        <section 
          id="panel-5" 
          className="panel h-screen w-screen bg-red-400 flex items-center justify-center"
        >
         <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Introduction</h2>
          <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
            <p className="text-xl text-white mb-4">
              Without further ado, let’s begin our journey into the world of Next.js — where speed, scalability, and simplicity redefine what's possible in web development.
            </p>
            <p className="text-xl text-white mb-4">
              Get ready to explore how Next.js empowers developers and transforms ideas into high-performance applications.
            </p>
            <div className="mt-6">
              <Link 
                href="/intro" 
                className="bg-white text-red-400 hover:bg-red-100 transition-colors px-6 py-3 rounded-lg font-bold shadow-lg"
              >
                Start Introduction
              </Link>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
