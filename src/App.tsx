import React, { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, Stats } from "@react-three/drei"

import { Altaverse, PreHausCustomization } from "@components/three"
import { GuestBookInput, HelperGuide, MousePointer } from "@components/ui"
import useGuestBook from "@modules/hooks/useGuestBook"

function App() {
  const [ready, setReady] = useState(false)
  const [isHelperGuideOpen, setIsHelperGuideOpen] = useState(true)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [isGuestBookOpen, setIsGuestBookOpen] = useState(false)
  const { getGuestBook, guestBookList } = useGuestBook()

  return (
    <div className="w-screen h-screen overflow-hidden">
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
              isHelperGuideOpen={isHelperGuideOpen}
              getGuestBook={getGuestBook}
              guestBookList={guestBookList}
            />

            {/* helpers */}
            <Stats />
            {/* <gridHelper args={[20, 20]} /> */}
          </Canvas>
        </>
      )}

      {/* UI */}
      <MousePointer />
      {isHelperGuideOpen && (
        <HelperGuide setIsHelperGuideOpen={setIsHelperGuideOpen} />
      )}
      {isCustomModalOpen && (
        <PreHausCustomization setIsCustomModalOpen={setIsCustomModalOpen} />
      )}
      {isGuestBookOpen && (
        <GuestBookInput
          setIsGuestBookOpen={setIsGuestBookOpen}
          getGuestBook={getGuestBook}
          guestBookList={guestBookList}
        />
      )}
    </div>
  )
}

export default App
