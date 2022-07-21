import * as THREE from "three"
import React, { Suspense, useRef, useState } from "react"
import {
  Center,
  GradientTexture,
  Html,
  Image,
  RoundedBox,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { cls } from "@modules/utils"
import { degToRad } from "three/src/math/MathUtils"

interface Props {
  color?: string
  imgURL: string
  name?: string
  managingPosition?: string
  sns?: string
  positionX?: number
  positionY?: number
  positionZ?: number
  props?: any
  [keys: string]: any
}

const Card = ({
  color = "#222",
  imgURL,
  name,
  managingPosition,
  sns,
  positionX,
  positionY = 1,
  positionZ = 0,
  props,
}: Props) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Suspense fallback={null}>
      <mesh
        ref={ref}
        onPointerOver={(e: any) => {
          e.stopPropagation()
          setIsHovered(true)
        }}
        onPointerOut={() => setIsHovered(false)}
      >
        <Image
          url={imgURL}
          scale={[0.88, 1.38, 0]}
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
          <meshStandardMaterial
            side={THREE.FrontSide}
            color={isHovered ? "#4b4275" : color}
            {...props}
          />
          {isHovered && (
            <Html scale={0.1} transform occlude position={[0, -0.6, 1]}>
              <p
                className={cls(
                  "flex gap-3",
                  isHovered ? "text-[#b2a1ff]" : "text-white",
                  "text-left font-Play",
                  "bg-[rgba(0,0,0,.6)] px-5 py-2 rounded"
                )}
              >
                <span>{name}</span> |{" "}
                <span className="text-gray-400">{managingPosition}</span>
              </p>
            </Html>
          )}
        </RoundedBox>
        <Image
          url="images/altavaGroup_mark_gradient.png"
          scale={0.35}
          opacity={0.99999}
          transparent
          position={[positionX, positionY, positionZ + -0.02]}
          rotation={[0, Math.PI, 0]}
          {...props}
        />
      </mesh>
      <Html
        scale={0.1}
        transform
        occlude
        position={[positionX! - 0.3, positionY - 0.55, positionZ + 0.05]}
        // rotation={[-degToRad(90), 0, 0]}
      >
        <a
          href={sns}
          target={"_blank"}
          className={cls(
            "flex items-center justify-center",
            "text-[#b2a1ff]",
            "text-left font-Play",
            "bg-[rgba(0,0,0,.5)] p-2 rounded"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </Html>
    </Suspense>
  )
}

export default Card
