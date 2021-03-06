import React, { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  ContactShadows,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stats,
} from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import { proxy } from "valtio"

import { BootsContainer, PreHausSelectParts } from "."
import { selectedPartsName } from "@constants/preHaus"
import { BootsColorState } from "@interface/bootsColorState"
import { cls } from "@modules/utils"

interface Props {
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  outsoleOption: number
  setOutsoleOption: React.Dispatch<React.SetStateAction<number>>
}

export const bootsColorState: BootsColorState = proxy({
  current: null,
  parts: {
    Quarter: "#ffffff",
    Vamp: "#ffffff",
    Lace: "#ffffff",
    BackCounter: "#ffffff",
    PullLoops: "#ffffff",
    Outsole: "#ffffff",
  },
})

const PreHausCustomization = ({
  setIsCustomModalOpen,
  outsoleOption,
  setOutsoleOption,
}: Props) => {
  const [selectedPartIndex, setSelectedPartIndex] = useState(0)

  useEffect(() => {
    bootsColorState.current = selectedPartsName[selectedPartIndex]

    console.log("selectedPartIndex : ", selectedPartIndex)
    console.log("bootsColorState.current : ", bootsColorState.current)
  }, [selectedPartIndex])

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col">
      <main className="h-full">
        <button
          onClick={() => {
            setIsCustomModalOpen(false)
          }}
          className={cls(
            "flex items-center justify-center w-12 h-12 absolute top-[60px] right-[60px] z-[1] rounded-full transition-all",
            "hover:bg-[rgba(0,0,0,0.1)]"
          )}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Canvas frameloop="demand">
          <Suspense fallback={null}>
            <BootsContainer
              outsoleOption={outsoleOption}
              selectedPartIndex={selectedPartIndex}
              setSelectedPartIndex={setSelectedPartIndex}
            />

            <OrbitControls
              makeDefault
              maxDistance={8}
              minDistance={3}
              // minPolarAngle={0}
              // maxPolarAngle={Math.PI / 2.25}
              // enableDamping
              // dampingFactor={0.5}
              // enablePan={false}
            />
            <color attach="background" args={["#e5e5e5"]} />
            <fog attach="fog" args={["#e5e5e5", 5, 20]} />
            <PerspectiveCamera fov={45} position={[1.5, 1.2, 6]} makeDefault />
            <ambientLight color="#faf7f7" intensity={0.12} />
            <pointLight intensity={0.4} position={[3, 1.8, -1.2]} />
            <pointLight intensity={0.2} position={[-1, 1.8, 3]} />
            <Plane
              args={[60, 60]}
              rotation={[-degToRad(90), 0, 0]}
              position={[0, -1.5, 0]}
            >
              <meshBasicMaterial color="#ccc" />
            </Plane>
            <ContactShadows position={[0, -1.4, 0]} blur={1.5} opacity={0.6} />
          </Suspense>
          <Stats />
          {/* <gridHelper /> */}
        </Canvas>
        <Loader />
      </main>

      <PreHausSelectParts
        selectedPartIndex={selectedPartIndex}
        setSelectedPartIndex={setSelectedPartIndex}
        outsoleOption={outsoleOption}
        setOutsoleOption={setOutsoleOption}
        // state={state}
      />
    </div>
  )
}

export default PreHausCustomization
