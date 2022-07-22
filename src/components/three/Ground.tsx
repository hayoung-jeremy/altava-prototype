import React from "react"
import { usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { MeshStandardMaterial, RepeatWrapping, TextureLoader } from "three"

const Ground = (props: any) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))

  const texture = useLoader(TextureLoader, "images/background-texture.jpg")
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(24, 24)

  return (
    <mesh ref={ref} receiveShadow {...props}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial
        color={"#ccc"}
        map={texture}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  )
}

export default Ground
