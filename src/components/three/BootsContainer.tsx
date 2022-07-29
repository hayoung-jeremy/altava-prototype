import React, { useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { degToRad } from "three/src/math/MathUtils"
import {
  BootsBody,
  BootsOutsole1,
  BootsOutsole2,
  BootsOutsole3,
  BootsOutsole4,
} from "."

interface Props {
  outsoleOption: number
  selectedPartIndex: number
  setSelectedPartIndex: React.Dispatch<React.SetStateAction<number>>
}

const BootsContainer = ({
  outsoleOption,
  selectedPartIndex,
  setSelectedPartIndex,
}: Props) => {
  const v = new THREE.Vector3()
  //   useFrame(state => {
  //     state.camera.position.lerp(
  //       v.set(
  //         selectedPartIndex === 0 ? 25 : 0,
  //         selectedPartIndex ? 1 : 0,
  //         selectedPartIndex ? 0 : 0
  //       ),
  //       0.05
  //     )
  //     state.camera.lookAt(0, 0, 0)
  //     state.camera.updateProjectionMatrix()
  //   })

  return (
    <group rotation={[degToRad(10), 0, 0]} position={[0, -1.05, 0]}>
      <BootsBody scale={0.08} />
      {outsoleOption === 0 && (
        <BootsOutsole1
          scale={0.08}
          position={[0, 0, 0]}
          // state={state}
        />
      )}
      {outsoleOption === 1 && (
        <BootsOutsole2
          scale={0.08}
          position={[0, 0, 0]}
          // state={state}
        />
      )}
      {outsoleOption === 2 && (
        <BootsOutsole3
          scale={0.08}
          position={[0, 0, 0]}
          // state={state}
        />
      )}
      {outsoleOption === 3 && (
        <BootsOutsole4
          scale={0.08}
          position={[0, 0, 0]}
          // state={state}
        />
      )}
    </group>
  )
}

export default BootsContainer
