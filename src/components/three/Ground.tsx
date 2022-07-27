import React, { Suspense } from "react"
import { usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { RepeatWrapping, TextureLoader } from "three"

const Ground = (props: any) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))

  const texture = useLoader(
    TextureLoader,
    "images/textures/background-texture.jpg"
  )
  // texture.wrapS = RepeatWrapping
  // texture.wrapT = RepeatWrapping
  // texture.repeat.set(10, 10)

  return (
    <Suspense fallback={null}>
      <mesh ref={ref} receiveShadow {...props} raycast={() => null}>
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshStandardMaterial
          color={"#666"}
          map={texture}
          // map={baseTex}
          // normalMap={normalTex}
          // roughnessMap={roughnessTex}
          // displacementMap={displacementTex}
          // aoMap={aoTex}
          // roughness={0.4}
          // metalness={0.2}
        />
      </mesh>
    </Suspense>
  )
}

export default Ground
