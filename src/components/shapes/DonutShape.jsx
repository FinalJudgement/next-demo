import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function DonutShape({ className = "", scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
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
        camera={{ position: [0, 0, 15], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <DonutGeometry scale={scale} position={position} rotation={rotation} />
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

function DonutGeometry({ scale, position, rotation }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  
  const material = new THREE.MeshStandardMaterial({
    color: 0xe74c3c, 
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
      
      // Initial animation - donut spins in from right
      gsap.fromTo(
        meshRef.current.position,
        { x: 20 },
        {
          x: position[0],
          duration: 1.5,
          ease: "power3.out",
        }
      );
      
      // Rotation animation - continuous spin
      gsap.fromTo(
        meshRef.current.rotation,
        { x: 0, y: 0, z: 0 },
        {
          x: Math.PI * 2,
          y: Math.PI * 2,
          duration: 8,
          ease: "none",
          repeat: -1,
        }
      );
    });
    
    return () => ctx.revert();
  }, [position]);

  return (
    <group position={position} rotation={rotation} ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh
          geometry={new THREE.TorusGeometry(0.6 * scale, 0.25 * scale, 16, 32)}
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
