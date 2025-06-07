import React from 'react'
import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                penumbra={0.2}
                intensity={100}
                color="white"
            />
            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                penumbra={0.5}
                intensity={40}
                color="red"
            />
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                penumbra={1}
                intensity={60}
                color="red"
            />

            <primitive
                object={new THREE.RectAreaLight("white", 8, 3, 2)}
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
                intensity={15}
            ></primitive>

            <pointLight position={[0, 1, 0]} intensity={10} color="white" />
            <pointLight position={[1, 2, -2]} intensity={10} color="white" />
        </>
    )
}

export default HeroLights