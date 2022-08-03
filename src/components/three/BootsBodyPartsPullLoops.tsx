import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { useSnapshot } from "valtio"
import { partsName } from "@constants/preHaus"
import { bootsColorState } from "./PreHausCustomization"

type GLTFResult = GLTF & {
  nodes: {
    [keys: string]: THREE.Mesh
  }
  materials: {
    [keys: string]: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(
    "assets/boots/NFT_BOOTS_BODY.glb"
  ) as GLTFResult

  const snap = useSnapshot(bootsColorState)

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes[partsName["Pull Loops"]].geometry}
        material={materials[partsName["Pull Loops"]]}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={snap.parts["Pull Loops"] ?? "#fff"}
      />
    </group>
  )
}

useGLTF.preload("assets/boots/NFT_BOOTS_BODY.glb")
