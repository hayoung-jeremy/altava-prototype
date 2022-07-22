import React, { useRef, useState } from "react"
import { Html, Text } from "@react-three/drei"

import {
  BootsBody,
  BootsOutsole1,
  BootsOutsole2,
  BootsOutsole3,
  BootsOutsole4,
} from "@components/three"
import { cls } from "@modules/utils"
import { degToRad } from "three/src/math/MathUtils"
import { useFrame } from "@react-three/fiber"

const outsoleOptions = [
  {
    type: "outsole option 1",
  },
  {
    type: "outsole option 2",
  },
  {
    type: "outsole option 3",
  },
  {
    type: "outsole option 4",
  },
]

const PreHaus = () => {
  const [color, setColor] = useState("fff")
  const [outsoleOption, setOutsoleOption] = useState(0)

  return (
    <group
      position={[16, 0.7, -6]}
      rotation={[0, -degToRad(90), 0]}
      // position={[0, 0.7, -2]}
    >
      <Html scale={0.15} transform position={[-0.8, 0.2, 0]}>
        <p
          className={cls(
            "text-gray-100 text-3xl w-[200px] font-Play relative",
            "after:w-[200px] after:h-[1px] after:bg-[#b2a1ff] after:absolute after:bottom-[-16px] after:left-[0px]"
          )}
        >
          Haus
          <p className="text-sm text-gray-500">in advance</p>
        </p>
      </Html>
      <group rotation={[degToRad(10), degToRad(10), 0]}>
        <BootsBody scale={0.01} color={color} />
        {outsoleOption === 0 && (
          <BootsOutsole1 scale={0.01} position={[0, 0, 0]} />
        )}
        {outsoleOption === 1 && (
          <BootsOutsole2 scale={0.01} position={[0, 0, 0]} />
        )}
        {outsoleOption === 2 && (
          <BootsOutsole3 scale={0.01} position={[0, 0, 0]} />
        )}
        {outsoleOption === 3 && (
          <BootsOutsole4 scale={0.01} position={[0, 0, 0]} />
        )}
      </group>

      <Html
        transform
        scale={0.1}
        position={[0.55, 0.15, 0]}
        raycast={() => null}
      >
        <div className="w-[160px] flex flex-col gap-2">
          {outsoleOptions.map((item, index) => {
            return (
              <button
                onClick={() => setOutsoleOption(index)}
                className={cls(
                  "outline-none flex justify-center items-center",
                  "bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded-lg transition-all border border-transparent",
                  "text-sm",
                  "hover:text-[#b2a1ff] hover:border-[#b2a1ff62]",
                  outsoleOption === index
                    ? "text-[#b2a1ff] border-[#b2a1ff62]"
                    : "text-[#ddd]"
                )}
              >
                {item.type}
              </button>
            )
          })}
        </div>
      </Html>
    </group>
  )
}

export default PreHaus
