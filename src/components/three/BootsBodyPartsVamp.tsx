import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import { useFrame, useThree } from "@react-three/fiber"
import { useBounds, useGLTF } from "@react-three/drei"

import { useSnapshot } from "valtio"
import { partsName } from "@constants/preHaus"
import { bootsColorState } from "./PreHausCustomization"
import { degToRad } from "three/src/math/MathUtils"

type GLTFResult = GLTF & {
  nodes: {
    [keys: string]: THREE.Mesh
  }
  materials: {
    [keys: string]: THREE.MeshStandardMaterial
  }
}

export default function BootsBodyPartsVamp({ ...props }: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(
    "assets/boots/NFT_BOOTS_BODY.glb"
  ) as GLTFResult

  const snap = useSnapshot(bootsColorState)
  // const api = useBounds()
  // const { camera, controls } = useThree()
  // const vec = new THREE.Vector3()

  // useEffect(() => {
  //   if (props.selectedPartIndex === 1 && group.current) {
  //     console.log("api : ", api)
  //     // api.refresh().fit()
  //     api.refresh(group.current).fit()
  //   }
  // }, [props.selectedPartIndex])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes[partsName.Vamp].geometry}
        material={materials[partsName.Vamp]}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={snap.parts.Vamp ?? "#fff"}
      />
    </group>
  )
}

useGLTF.preload("assets/boots/NFT_BOOTS_BODY.glb")
