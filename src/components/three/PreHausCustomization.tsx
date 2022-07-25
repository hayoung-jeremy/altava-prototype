import React, { Suspense, useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Center,
  ContactShadows,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stats,
} from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import {
  BootsBody,
  BootsOutsole1,
  BootsOutsole2,
  BootsOutsole3,
  BootsOutsole4,
  PreHausSelectParts,
} from "."
import { selectedPartsName } from "@constants/preHaus"

interface Props {
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PreHausCustomization = ({ setIsCustomModalOpen }: Props) => {
  const [OP1_BASE_01_color, setOP1_BASE_01_color] = useState("#fff")
  const [OP1_BASE_02_color, setOP1_BASE_02_color] = useState("#fff")
  const [OP1_BASE_03_color, setOP1_BASE_03_color] = useState("#fff")
  const [OP1_BASE_04_color, setOP1_BASE_04_color] = useState("#fff")
  const [OP1_BASE_05_color, setOP1_BASE_05_color] = useState("#fff")
  const [outSoleColor, setOutSoleColor] = useState("#fff")
  const [selectedPartIndex, setSelectedPartIndex] = useState(0)

  const [outsoleOption, setOutsoleOption] = useState(0)
  const [selectedOutsoleIndex, setSelectedOutsoleIndex] = useState(0)

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col">
      <main className="h-full">
        <div
          onClick={() => {
            setIsCustomModalOpen(false)
          }}
          className="bg-red-50 w-10 h-10 absolute top-[60px] right-[60px] z-[1]"
        ></div>
        <Canvas>
          <Suspense fallback={null}>
            <group rotation={[degToRad(10), 0, 0]} position={[0, -1.05, 0]}>
              <BootsBody
                scale={0.08}
                OP1_BASE_01_color={OP1_BASE_01_color}
                OP1_BASE_02_color={OP1_BASE_02_color}
                OP1_BASE_03_color={OP1_BASE_03_color}
                OP1_BASE_04_color={OP1_BASE_04_color}
                OP1_BASE_05_color={OP1_BASE_05_color}
                outSoleColor={outSoleColor}
              />
              {outsoleOption === 0 && (
                <BootsOutsole1
                  scale={0.08}
                  position={[0, 0, 0]}
                  outSoleColor={outSoleColor}
                />
              )}
              {outsoleOption === 1 && (
                <BootsOutsole2
                  scale={0.08}
                  position={[0, 0, 0]}
                  outSoleColor={outSoleColor}
                />
              )}
              {outsoleOption === 2 && (
                <BootsOutsole3
                  scale={0.08}
                  position={[0, 0, 0]}
                  outSoleColor={outSoleColor}
                />
              )}
              {outsoleOption === 3 && (
                <BootsOutsole4
                  scale={0.08}
                  position={[0, 0, 0]}
                  outSoleColor={outSoleColor}
                />
              )}
            </group>
            {/* <Center>
            </Center> */}

            <OrbitControls
              // minPolarAngle={0}
              // maxPolarAngle={Math.PI / 2.25}
              maxDistance={8}
              minDistance={3}
              makeDefault
              // enableDamping
              // dampingFactor={0.5}
              // enablePan={false}
            />
            <color attach="background" args={["#e5e5e5"]} />
            <fog attach="fog" args={["#e5e5e5", 2, 20]} />
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
        {/* <PreHausOptionContainer
          setOutsoleOption={setOutsoleOption}
          setOP1_BASE_01_color={setOP1_BASE_01_color}
          setOP1_BASE_02_color={setOP1_BASE_02_color}
          setOP1_BASE_03_color={setOP1_BASE_03_color}
          setOP1_BASE_04_color={setOP1_BASE_04_color}
          setOP1_BASE_05_color={setOP1_BASE_05_color}
          setOutSoleColor={setOutSoleColor}
        /> */}
      </main>

      <PreHausSelectParts
        selectedPartName={selectedPartsName[selectedPartIndex]}
        selectedPartIndex={selectedPartIndex}
        setSelectedPartIndex={setSelectedPartIndex}
        setOutsoleOption={setOutsoleOption}
      />
    </div>
  )
}

export default PreHausCustomization
