import React from "react"
import { usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { RepeatWrapping, TextureLoader } from "three"

const Ground = (props: any) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))

  const texture = useLoader(TextureLoader, "images/background-texture.jpg")
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(240, 240)

  return (
    <mesh ref={ref} receiveShadow {...props}>
      <planeBufferGeometry attach="geometry" args={[1000, 10000]} />
      <meshStandardMaterial attach="material" color={"#333"} map={texture} />
    </mesh>
  )
}

export default Ground
