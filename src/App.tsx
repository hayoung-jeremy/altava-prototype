import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Sparkles, Stars } from "@react-three/drei"
import { Physics } from "@react-three/cannon"

import { Avatar, Card, Ground, Player } from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"
import { management } from "@constants/management"

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className="w-screen h-screen">
      {/* Scene */}
      <Canvas shadows gl={{ alpha: false }} camera={{ fov: 75 }}>
        <Suspense fallback={null}>
          {/* <Sky sunPosition={[100, 10, 100]} /> */}
          <Stars saturation={1} />
          <Sparkles position={[0, 0, -2]} />
          <ambientLight intensity={0.2} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <pointLight castShadow intensity={0.8} position={[1, 2, 0]} />

          <Physics gravity={[0, -30, 0]}>
            <Avatar scale={0.007} position={[0, 0, -2]} />
            <Ground />
            <Player />
          </Physics>
          {management.map((item, index) => {
            return (
              <Card
                key={index}
                imgURL={item.imgUrl}
                positionX={index * 1.2}
                // positionY={index * 1.2}
                positionZ={index * 0.2}
              />
            )
          })}
        </Suspense>
      </Canvas>

      {/* UI */}
      <MousePointer />
      {/* {!ready && <EnterPopUp setReady={setReady} />} */}
    </div>
  )
}

export default App
