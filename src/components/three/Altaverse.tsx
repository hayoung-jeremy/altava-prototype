import React, { Suspense, useEffect } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import {
  Avatar,
  EnvironmentSettings,
  Ground,
  Guidlines,
  Player,
  WelcomText,
} from "@components/three"
import { Management, PreHaus, Project } from "@components/layout"

interface Props {
  isCustomModalOpen: boolean
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Altaverse = ({ isCustomModalOpen, setIsCustomModalOpen }: Props) => {
  return (
    <Suspense fallback={null}>
      <Physics gravity={[0, -30, 0]} broadphase="SAP">
        <Player />
        <Ground />
        {/* <Avatar scale={0.007} position={[0, 0, -2]} /> */}
        {/* <Debug scale={1.1} color="black"></Debug> */}
        <WelcomText />
      </Physics>

      {/* default settings */}
      <EnvironmentSettings />
      <Guidlines />

      {/* Layout */}
      <Management />
      <Project />
      <PreHaus setIsCustomModalOpen={setIsCustomModalOpen} />
    </Suspense>
  )
}

export default Altaverse
