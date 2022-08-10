import React, { useEffect, useState } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { Bounds } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import {
  BootsBodyPartsBackCounter,
  BootsBodyPartsLace,
  BootsBodyPartsPullLoops,
  BootsBodyPartsQuarter,
  BootsBodyPartsVamp,
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
  useEffect(() => {
    console.log("askdalsjdlk")
  }, [])

  return (
    <group rotation={[degToRad(10), 0, 0]} position={[0, -1.05, 0]}>
      <BootsBodyPartsQuarter
        scale={0.08}
        selectedPartIndex={selectedPartIndex}
      />
      <BootsBodyPartsVamp scale={0.08} selectedPartIndex={selectedPartIndex} />
      <BootsBodyPartsLace scale={0.08} selectedPartIndex={selectedPartIndex} />
      <BootsBodyPartsBackCounter
        scale={0.08}
        selectedPartIndex={selectedPartIndex}
      />
      <BootsBodyPartsPullLoops
        scale={0.08}
        selectedPartIndex={selectedPartIndex}
      />

      {outsoleOption === 0 && (
        <BootsOutsole1
          scale={0.08}
          position={[0, 0, 0]}
          selectedPartIndex={selectedPartIndex}
        />
      )}
      {outsoleOption === 1 && (
        <BootsOutsole2
          scale={0.08}
          position={[0, 0, 0]}
          selectedPartIndex={selectedPartIndex}
        />
      )}
      {outsoleOption === 2 && (
        <BootsOutsole3
          scale={0.08}
          position={[0, 0, 0]}
          selectedPartIndex={selectedPartIndex}
        />
      )}
      {outsoleOption === 3 && (
        <BootsOutsole4
          scale={0.08}
          position={[0, 0, 0]}
          selectedPartIndex={selectedPartIndex}
        />
      )}
      {/* <Bounds damping={2} margin={0.5}></Bounds> */}
    </group>
  )
}

export default BootsContainer
