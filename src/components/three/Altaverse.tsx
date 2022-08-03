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
import { degToRad } from "three/src/math/MathUtils"

interface Props {
  isCustomModalOpen: boolean
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isGuestBookOpen: boolean
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
  getGuestBook: (data: any) => void
  guestBookList: any
  isHelperGuideOpen: boolean
  outsoleOption: number
  setOutsoleOption: React.Dispatch<React.SetStateAction<number>>
}

const Altaverse = ({
  isCustomModalOpen,
  setIsCustomModalOpen,
  isGuestBookOpen,
  setIsGuestBookOpen,
  getGuestBook,
  guestBookList,
  isHelperGuideOpen,
  outsoleOption,
  setOutsoleOption,
}: Props) => {
  const pointerLockControlRef = useRef<any>(null)

  const { camera, controls, gl } = useThree()

  return (
    <Suspense fallback={null}>
      <Physics gravity={[0, -30, 0]} broadphase="SAP">
        <Ground />
        <Player
          isCustomModalOpen={isCustomModalOpen}
          isGuestBookOpen={isGuestBookOpen}
          isHelperGuideOpen={isHelperGuideOpen}
        />
        <Avatar
          scale={0.007}
          position={[1, 0, -2]}
          rotation={[0, -degToRad(40), 0]}
        />
        {/* <Debug scale={1.1} color="black"></Debug> */}
        <WelcomText />
        {!isCustomModalOpen && !isGuestBookOpen && !isHelperGuideOpen && (
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
      <PreHaus
        setIsCustomModalOpen={setIsCustomModalOpen}
        outsoleOption={outsoleOption}
        setOutsoleOption={setOutsoleOption}
      />
      <GuestBoard
        setIsGuestBookOpen={setIsGuestBookOpen}
        getGuestBook={getGuestBook}
        guestBookList={guestBookList}
      />
    </Suspense>
  )
}

export default Altaverse
