/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

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
    "assets/boots/NFT_BOOTS_OP4.glb"
  ) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OP4_OUTSOLE_01.geometry}
        material={materials.OP4_OUTSOLE_01}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={props.color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OP4_OUTSOLE_02.geometry}
        material={materials.OP4_OUTSOLE_02}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={props.color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OP4_OUTSOLE_03.geometry}
        material={materials.OP4_OUTSOLE_03}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={props.color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OP4_OUTSOLE_04.geometry}
        material={materials.OP4_OUTSOLE_04}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={props.color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OP4_OUTSOLE_05.geometry}
        material={materials.OP4_OUTSOLE_05}
        rotation={[-Math.PI / 2, 0, 0]}
        material-color={props.color}
      />
    </group>
  )
}

useGLTF.preload("assets/boots/NFT_BOOTS_OP4.glb")
