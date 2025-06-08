import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import Particles from './Particles';
import { MacBook } from './Macbook';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      ></OrbitControls>
      <HeroLights></HeroLights>
      <Particles count={[300]}></Particles>
      <group scale={isMobile ? 10.0 : 15.0}  position={[0, -2.0, 0]} rotation={[0, -5, 0]}>
        <MacBook></MacBook>
      </group>
    </Canvas>
  )
}

export default HeroExperience