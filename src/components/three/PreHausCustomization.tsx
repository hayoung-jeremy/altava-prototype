import React, { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

interface Props {
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PreHausCustomization = ({ setIsCustomModalOpen }: Props) => {
  return (
    <div className="w-screen h-screen bg-black fixed top-0 left-0 z-[9999999999999999999]">
      <div
        onClick={() => {
          setIsCustomModalOpen(false)
        }}
        className="bg-red-50 w-10 h-10"
      ></div>
      <Canvas>
        <PerspectiveCamera fov={75} />
        <ambientLight intensity={0.5} />
        <mesh>
          <boxBufferGeometry args={[1, 1]} attach="geometry" />
          <meshStandardMaterial attach="material" color="red" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default PreHausCustomization
