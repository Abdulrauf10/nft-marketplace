import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface CardProps {
  image: string;
}

export default function Card({ image }: CardProps) {
  return (
    <div className="w-[315px] h-[315px] lg:w-[510px] lg:h-[510px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
        <ambientLight intensity={1} />
        <SwingingCard image={image} />
      </Canvas>
    </div>
  );
}

interface SwingingCardProps {
  image: string;
}

function SwingingCard({ image }: SwingingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const texture = useTexture(image, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
  });

  let aspect = 1;

  if (texture.image instanceof HTMLImageElement) {
    aspect = texture.image.width / texture.image.height;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t) * 0.25;
    meshRef.current.rotation.x = Math.cos(t * 0.5) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2 / aspect]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
