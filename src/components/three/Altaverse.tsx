import React, { Suspense, useRef, useEffect } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"
import { PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import {
  Avatar,
  EnvironmentSettings,
  Ground,
  Guidlines,
  Player,
  WelcomText,
} from "@components/three"
import { GuestBoard, Management, PreHaus, Project } from "@components/layout"

interface Props {
  isCustomModalOpen: boolean
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isGuestBookOpen: boolean
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Altaverse = ({
  isCustomModalOpen,
  setIsCustomModalOpen,
  isGuestBookOpen,
  setIsGuestBookOpen,
}: Props) => {
  const pointerLockControlRef = useRef<any>(null)

  const { camera, controls, gl } = useThree()

  useEffect(() => {
    console.log(pointerLockControlRef)
  }, [pointerLockControlRef])

  return (
    <Suspense fallback={null}>
      <Physics gravity={[0, -30, 0]} broadphase="SAP">
        <Player />
        <Ground />
        {/* <Avatar scale={0.007} position={[0, 0, -2]} /> */}
        {/* <Debug scale={1.1} color="black"></Debug> */}
        <WelcomText />
        {!isCustomModalOpen && !isGuestBookOpen && (
          <PointerLockControls
            ref={pointerLockControlRef}
            // selector="myControl"
            // onLock={() => console.log("Controls locked")}
            // onUnlock={() => console.log("Controls unlocked")+}
          />
        )}
      </Physics>

      {/* default settings */}
      <EnvironmentSettings />
      <Guidlines />

      {/* Layout */}
      <Management />
      <Project />
      <PreHaus setIsCustomModalOpen={setIsCustomModalOpen} />
      <GuestBoard setIsGuestBookOpen={setIsGuestBookOpen} />
    </Suspense>
  )
}

export default Altaverse
