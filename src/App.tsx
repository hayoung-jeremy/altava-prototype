import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { CubicBezierLine, Stats } from "@react-three/drei"
import { Debug, Physics } from "@react-three/cannon"

import {
  Avatar,
  EnvironmentSettings,
  Ground,
  Player,
  WelcomText,
} from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"
import { Management, Project } from "@components/layout"

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
          <EnvironmentSettings />
          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Ground />
            <Avatar scale={0.007} position={[0, 0, -2]} />
            {/* <Debug scale={1.1} color="black"></Debug> */}
            <WelcomText />
          </Physics>
          {/* Layout */}
          <Management />
          <Project />
          <CubicBezierLine
            start={[0, 0.001, -3]}
            midA={[-6, 0.001, -7]}
            midB={[0, 0, -15]}
            end={[4, 0.001, -12]}
            segments={100}
            color={"#7f6d94"}
            lineWidth={0.8}
            dashed={false}
          />
          <CubicBezierLine
            start={[4, 0.001, -12]}
            midA={[0, 0, 0]}
            midB={[0, 0, 0]}
            end={[0, 0, 0]}
            segments={100}
            color={"#7f6d94"}
            lineWidth={0.8}
            dashed={false}
          />
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
