import React, { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, Stats } from "@react-three/drei"

import { Altaverse, PreHausCustomization } from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"

function App() {
  const [ready, setReady] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)

  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows
        gl={{
          alpha: false,
          antialias: true,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{ fov: 70 }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <Altaverse
            isCustomModalOpen={isCustomModalOpen}
            setIsCustomModalOpen={setIsCustomModalOpen}
          />
        </Suspense>

        {/* helpers */}
        <Stats />
        {/* <gridHelper args={[30, 30]} /> */}
      </Canvas>
      <Loader />

      {/* UI */}
      <MousePointer />
      {!ready && <EnterPopUp setReady={setReady} />}
      {isCustomModalOpen && (
        <PreHausCustomization setIsCustomModalOpen={setIsCustomModalOpen} />
      )}
    </div>
  )
}

export default App
