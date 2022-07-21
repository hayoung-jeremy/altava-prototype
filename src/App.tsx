import React, { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Physics } from "@react-three/cannon"

import { Avatar, Ground, Player } from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className="w-screen h-screen">
      {/* Scene */}
      <Canvas shadows gl={{ alpha: false }} camera={{ fov: 75 }}>
        {/* <Sky sunPosition={[100, 10, 100]} /> */}
        <Stars saturation={1} />
        <ambientLight intensity={0.2} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />

        <Physics gravity={[0, -30, 0]}>
          <Avatar scale={0.007} position={[0, 0, -2]} />
          <Ground />
          <Player />
        </Physics>
      </Canvas>

      {/* UI */}
      <MousePointer />
      {!ready && <EnterPopUp setReady={setReady} />}
    </div>
  )
}

export default App
