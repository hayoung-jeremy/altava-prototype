import React, { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, Stats } from "@react-three/drei"

import { Altaverse, PreHausCustomization } from "@components/three"
import { EnterPopUp, GuestBookInput, MousePointer } from "@components/ui"

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
        <GuestBookInput setIsGuestBookOpen={setIsGuestBookOpen} />
      )}
    </div>
  )
}

export default App
