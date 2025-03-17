'use client'

import { useEffect, useRef } from "react";
import { type TOCItem } from "@/components/table-of-contents";
import { NavMenu } from "@/components/NavMenu";
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
    title: "Contact",
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
 
    // Modified implementation with scrub for smoother animations
    gsap.utils.toArray<HTMLElement>(".panel").forEach((panel, i) => {
      // Create a timeline for each panel
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          // Ensure animation is fully complete before allowing scroll to continue
          console.log(`Panel ${i} animation complete`);
        }
      });
      
      // Add the panel animation to the timeline
      tl.to(panel, { y: 0, duration: 1 });
      
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", // When the top of the panel reaches the top of the viewport
        end: "+=100%", // Reduced from 150% to 100% to minimize over-scrolling
        pin: true,
        pinSpacing: true,
        scrub: 0.5, // Add smooth scrubbing for better scroll-linked animations
        immediateRender: false, // Prevent initial rendering jumps
        markers: false, // Set to true for debugging
      });
    });
    
    // Create simple fade in/out animations for shapes
    // Features panel (panel-2) shapes
    if (pillContainerRef.current && diamondContainerRef.current) {
      // Set initial state - hidden
      gsap.set(pillContainerRef.current, { autoAlpha: 0 });
      gsap.set(diamondContainerRef.current, { autoAlpha: 0 });
      
      // Pop in for pill shape with elastic effect
      ScrollTrigger.create({
        trigger: "#panel-2",
        start: "top top", // Start when the top of panel-2 reaches the bottom of viewport
        onEnter: () => {
          // Set initial state before animation
          gsap.set(pillContainerRef.current, { 
            autoAlpha: 0,
            scale: 0
          });
          
          // Animate with elastic pop effect
          gsap.to(pillContainerRef.current, { 
            autoAlpha: 1,
            scale: .8,
            duration: 2,
            ease: "elastic.out(1,0.3)",
          });
        },
        onLeaveBack: () => {
          gsap.to(pillContainerRef.current, { 
            autoAlpha: 0,
            scale: 0.5,
            duration: 0.5,
            ease: "power2.in"
          });
        },
        markers: false
      });
      
      // Pop in for diamond shape with slight delay
      ScrollTrigger.create({
        trigger: "#panel-2",
        start: "top top", // Start slightly after pill shape
        onEnter: () => {
          // Set initial state before animation
          gsap.set(diamondContainerRef.current, { 
            autoAlpha: 0,
            scale: 0
          });
          
          // Animate with elastic pop effect
          gsap.to(diamondContainerRef.current, { 
            autoAlpha: 1,
            scale: 1,
            duration: 2,
            delay:.5,
            ease: "elastic.out(1,0.3)",
          });
        },
        onLeaveBack: () => {
          gsap.to(diamondContainerRef.current, { 
            autoAlpha: 0,
            scale: 0.5,
            duration: 0.5,
            ease: "power2.in"
          });
        },
        markers: false
      });
      
      // Simple fade out when leaving panel
      ScrollTrigger.create({
        trigger: "#panel-2",
        start: "bottom center", // Start when the bottom of panel-2 reaches the center of viewport
        end: "bottom top", // End when the bottom of panel-2 leaves the top of viewport
        onEnter: () => {
          gsap.to([pillContainerRef.current, diamondContainerRef.current], { 
            autoAlpha: 0, 
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to([pillContainerRef.current, diamondContainerRef.current], { 
            autoAlpha: 1, 
            duration: 0.5,
          });
        },
        markers: false
      });
    }
    
    // Services panel (panel-3) shapes
    if (donutContainerRef.current) {
      // Set initial state - hidden
      gsap.set(donutContainerRef.current, { autoAlpha: 0 });
      
      // Pop in for donut shape with elastic effect
      ScrollTrigger.create({
        trigger: "#panel-3",
        start: "top top", // Start when the top of panel-3 reaches the bottom of viewport
        end: "top center", // End when the top of panel-3 reaches the center of viewport
        onEnter: () => {
          // Set initial state before animation
          gsap.set(donutContainerRef.current, { 
            autoAlpha: 0,
            scale: 0,
          });
          
          // Animate with elastic pop effect
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1,0.3)",
          });
        },
        onLeaveBack: () => {
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 0,
            scale: 0.5,
            duration: 0.5,
            ease: "power2.in"
          });
        },
        markers: false
      });
      
      // Simple fade out when leaving panel
      ScrollTrigger.create({
        trigger: "#panel-3",
        start: "bottom center", // Start when the bottom of panel-3 reaches the center of viewport
        end: "bottom top", // End when the bottom of panel-3 leaves the top of viewport
        onEnter: () => {
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 0, 
            duration: 1.5
          });
        },
        onLeaveBack: () => {
          gsap.to(donutContainerRef.current, { 
            autoAlpha: 1, 
            duration: 1.5
          });
        },
        markers: false
      });
    }
    
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
          className="panel h-screen w-screen bg-purple-500 flex items-center justify-center relative overflow-hidden"
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
            <h2 className="text-4xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3">Responsive Design</h3>
                <p className="text-white/90">Fully responsive layouts that work on any device, big or small.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3">Modern UI</h3>
                <p className="text-white/90">Clean and modern user interfaces built with the latest technologies.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-3">Fast Performance</h3>
                <p className="text-white/90">Optimized for speed and performance to provide the best user experience.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Panel */}
        <section 
          id="panel-3" 
          className="panel h-screen w-screen bg-green-500 flex items-center justify-center relative overflow-hidden"
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
            <h2 className="text-4xl font-bold text-white mb-6">Services</h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-white/90">Custom websites and web applications built with the latest technologies.</p>
              </div>
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
                <p className="text-white/90">Beautiful and intuitive user interfaces designed for the best user experience.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Panel */}
        <section 
          id="panel-4" 
          className="panel h-screen w-screen bg-blue-500 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm h-48 flex items-center justify-center">
                <p className="text-xl font-bold text-white">Project 1</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm h-48 flex items-center justify-center">
                <p className="text-xl font-bold text-white">Project 2</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm h-48 flex items-center justify-center">
                <p className="text-xl font-bold text-white">Project 3</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm h-48 flex items-center justify-center">
                <p className="text-xl font-bold text-white">Project 4</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Panel */}
        <section 
          id="panel-5" 
          className="panel h-screen w-screen bg-red-500 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>
            <div className="bg-white/20 p-8 rounded-lg backdrop-blur-sm max-w-md mx-auto">
              <p className="text-white mb-4">Get in touch with us to discuss your project.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-bold">Email:</span>
                  <span className="text-white">contact@example.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-bold">Phone:</span>
                  <span className="text-white">(123) 456-7890</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
