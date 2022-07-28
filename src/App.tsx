import React, { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, Stats } from "@react-three/drei"

import { Altaverse, PreHausCustomization } from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"

function App() {
  const [ready, setReady] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [isGuestBookOpen, setIsGuestBookOpen] = useState(false)

  return (
    <div className="w-screen h-screen">
      {!isCustomModalOpen && (
        <>
          <Canvas
            shadows
            gl={{
              alpha: false,
              antialias: true,
              outputEncoding: THREE.sRGBEncoding,
            }}
            dpr={[1, 2]}
            camera={{ fov: 70 }}
            frameloop="demand"
          >
            <Altaverse
              isCustomModalOpen={isCustomModalOpen}
              setIsCustomModalOpen={setIsCustomModalOpen}
              isGuestBookOpen={isGuestBookOpen}
              setIsGuestBookOpen={setIsGuestBookOpen}
            />

            {/* helpers */}
            <Stats />
            {/* <gridHelper args={[20, 20]} /> */}
          </Canvas>
        </>
      )}

      {/* UI */}
      <MousePointer />
      {/* {!ready && <EnterPopUp setReady={setReady} />} */}
      {isCustomModalOpen && (
        <PreHausCustomization setIsCustomModalOpen={setIsCustomModalOpen} />
      )}
      {isGuestBookOpen && (
        <div className="w-screen h-screen bg-[rgba(0,0,0,0.6)] flex items-center justify-center fixed top-0 left-0 z-[999999999999]">
          <button
            className="w-12 h-12 bg-red-50 flex items-center justify-center"
            onClick={() => setIsGuestBookOpen(false)}
          >
            X
          </button>
          <main className="w-[400px] h-[280px] bg-[rgba(255,255,255,0.1)]"></main>
        </div>
      )}
    </div>
  )
}

export default App
