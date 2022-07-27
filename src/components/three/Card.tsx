import React, { Suspense, useRef, useState } from "react"
import { Html, Image, RoundedBox } from "@react-three/drei"
import * as THREE from "three"

import { cls } from "@modules/utils"

interface Props extends THREE.Mesh {
  color?: string
  imgURL: string
  personName?: string
  managingPosition?: string
  sns?: string
  props?: any
  [keys: string]: any
}

const Card = ({
  color = "#222",
  imgURL = "",
  personName,
  managingPosition,
  sns,
  ...props
}: any) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredOnLink, setIsHoveredOnLink] = useState(false)

  return (
    <Suspense fallback={null}>
      <group
        ref={ref}
        onPointerOver={(e: any) => {
          e.stopPropagation()
          setIsHovered(true)
        }}
        onPointerOut={() => setIsHovered(false)}
        {...props}
      >
        {imgURL && (
          <Image
            url={imgURL}
            scale={[0.88, 1.38, 0]}
            opacity={0.99999}
            transparent
            position={[0, 1, 0]}
            raycast={() => null}
          />
        )}
        <RoundedBox
          radius={0.02}
          scale={[1, 1.5, 0.01]}
          position={[0, 1, -0.01]}
          castShadow
        >
          <meshStandardMaterial
            attach="material"
            side={THREE.FrontSide}
            color={isHovered ? "#4b4275" : color}
          />
        </RoundedBox>
        <Image
          url="images/altavaGroup_mark_gradient.png"
          scale={0.35}
          opacity={0.99999}
          transparent
          position={[0, 1, -0.02]}
          rotation={[0, Math.PI, 0]}
          raycast={() => null}
        />
        <group>
          {isHovered && (
            <Html
              scale={0.1}
              transform
              position={[0, 0.15, 0]}
              raycast={() => null}
            >
              <p
                className={cls(
                  "flex gap-3 select-none",
                  isHovered ? "text-[#b2a1ff]" : "text-white",
                  "text-left font-Play",
                  "bg-[rgba(0,0,0,.6)] px-5 py-2 rounded"
                )}
              >
                <span>{personName}</span> |{" "}
                <span className="text-gray-400">{managingPosition}</span>
              </p>
            </Html>
          )}
          {/* <group
            scale={0.1}
            position={[-0.35, 0.4, 0.04]}
            // onPointerOver={e => {
            //   console.log("SNS hovered")
            //   setIsHoveredOnLink(true)
            //   e.stopPropagation()
            // }}
            // onPointerOut={() => {
            //   setIsHoveredOnLink(false)
            // }}
            // onClick={() => window.open(sns)}
          >
            <mesh>
              <meshStandardMaterial attach="material" transparent opacity={0} />
              <planeBufferGeometry attach="geometry" args={[1, 1]} />
            </mesh>
          </group> */}
          <Html scale={0.1} transform position={[-0.35, 0.4, 0.04]}>
            <a
              href={sns}
              target={"_blank"}
              className={cls(
                "flex items-center justify-center select-none",
                "text-[#b2a1ff]",
                "text-left font-Play",
                "bg-[rgba(0,0,0,.5)] p-2 rounded border border-transparent",
                "hover:mb-2 transition-all hover:border-[#b2a1ff]"
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
        </group>
      </group>
    </Suspense>
  )
}

export default Card
