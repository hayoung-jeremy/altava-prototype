import * as THREE from "three"
import React, { Suspense } from "react"
import { Center, Image, RoundedBox } from "@react-three/drei"

interface Props {
  color?: string
  imgURL: string
  props?: any
  [keys: string]: any
  positionX?: number
  positionY?: number
  positionZ?: number
}

const Card = ({
  color = "#333",
  imgURL,
  positionX,
  positionY = 1,
  positionZ = 0,
  props,
}: Props) => {
  return (
    <Suspense fallback={null}>
      <Image
        url={imgURL}
        scale={[1, 1.5, 0]}
        opacity={0.99999}
        transparent
        position={[positionX, positionY, positionZ]}
        {...props}
      />
      <RoundedBox
        scale={[1, 1.5, 0.01]}
        position={[positionX, positionY, positionZ + -0.01]}
        castShadow
        {...props}
      >
        <meshStandardMaterial side={THREE.FrontSide} color={color} {...props} />
      </RoundedBox>
      <Image
        url="images/altavaGroup_mark_gradient.png"
        scale={0.35}
        opacity={0.99999}
        transparent
        position={[positionX, positionY, positionZ + -0.05]}
        rotation={[0, Math.PI, 0]}
        {...props}
      />
    </Suspense>
  )
}

export default Card
