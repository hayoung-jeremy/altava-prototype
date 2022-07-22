import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Stats } from "@react-three/drei"
import { Debug, Physics } from "@react-three/cannon"

import {
  Avatar,
  EnvironmentSettings,
  Ground,
  Guidlines,
  Player,
  WelcomText,
} from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"
import { Management, PreHaus, Project } from "@components/layout"

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows
        gl={{ alpha: true }}
        camera={{ fov: 70 }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Ground />
            <Avatar scale={0.007} position={[0, 0, -2]} />
            {/* <Debug scale={1.1} color="black"></Debug> */}
            <WelcomText />
          </Physics>

          {/* default settings */}
          <EnvironmentSettings />
          <Guidlines />

          {/* Layout */}
          <Management />
          <Project />
          <PreHaus />
        </Suspense>

        {/* helpers */}
        {/* <gridHelper args={[30, 30]} /> */}
        <Stats />
      </Canvas>

      {/* UI */}
      <MousePointer />
      {/* {!ready && <EnterPopUp setReady={setReady} />} */}
    </div>
  )
}

export default App
