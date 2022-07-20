import React from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"

import { Ground, Player } from "@components/three"
import { PointerLockControls, Sky } from "@react-three/drei"

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows gl={{ alpha: false }}>
        <Sky sunPosition={[100, 10, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
