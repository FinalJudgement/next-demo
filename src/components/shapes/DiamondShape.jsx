import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function DiamondShape({ className = "", scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <div 
      className={`aspect-square ${className}`}
      data-speed="0.8"
    >
      <Canvas 
        className="z-0" 
        shadows 
        gl={{ antialias: false }} 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <DiamondGeometry scale={scale} position={position} rotation={rotation} />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9} 
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function DiamondGeometry({ scale, position, rotation }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  
  const material = new THREE.MeshStandardMaterial({
    color: 0x8e44ad, 
    roughness: 0.1
  });

  const soundEffects = [
    new Audio("/sounds/knock1.ogg"),
    new Audio("/sounds/knock2.ogg"),
    new Audio("/sounds/knock3.ogg"),
  ];

  function handleClick(e) {
    const mesh = e.object;
    
    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      
      // Initial animation - diamond drops from top with bounce
      gsap.fromTo(
        meshRef.current.position,
        { y: 20 },
        {
          y: position[1],
          duration: 1.5,
          ease: "bounce.out",
        }
      );
      
      // Rotation animation
      gsap.fromTo(
        meshRef.current.rotation,
        { x: 0, y: 0, z: 0 },
        {
          x: rotation[0],
          y: rotation[1],
          z: rotation[2],
          duration: 1.5,
          ease: "power2.out",
        }
      );
    });
    
    return () => ctx.revert();
  }, [position, rotation]);

  return (
    <group position={position} rotation={rotation} ref={meshRef}>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh
          geometry={new THREE.OctahedronGeometry(1.5 * scale)}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={material}
        />
      </Float>
    </group>
  );
}
