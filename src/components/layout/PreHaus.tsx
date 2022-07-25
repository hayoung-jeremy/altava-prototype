import React, { useState } from "react"
import { Html, RoundedBox, Text } from "@react-three/drei"

import {
  BootsBody,
  BootsOutsole1,
  BootsOutsole2,
  BootsOutsole3,
  BootsOutsole4,
} from "@components/three"
import { cls } from "@modules/utils"
import { degToRad } from "three/src/math/MathUtils"

const outsoleOptions = [
  {
    type: "outsole option 1",
    isHovered: false,
  },
  {
    type: "outsole option 2",
    isHovered: false,
  },
  {
    type: "outsole option 3",
    isHovered: false,
  },
  {
    type: "outsole option 4",
    isHovered: false,
  },
]

interface Props {
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PreHaus = ({ setIsCustomModalOpen }: Props) => {
  const [color, setColor] = useState("#fff")
  const [hoverIndex, setHoverIndex] = useState(0)
  const [outsoleOption, setOutsoleOption] = useState(0)

  const fontProps = {
    font: "/src/styles/fonts/Play-Regular.ttf",
    fontSize: 0.1,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  }

  return (
    <group
      position={[16, 0.7, -6]}
      rotation={[0, -degToRad(90), 0]}
      // position={[0, 0.7, -2]}
    >
      <Html scale={0.15} transform occlude position={[-1, 0.2, 0]}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p
              className={cls(
                "flex flex-col",
                "text-gray-100 text-3xl w-[200px] font-Play relative"
                // "after:w-[200px] after:h-[1px] after:bg-[#b2a1ff] after:absolute after:bottom-[-16px] after:left-[0px]"
              )}
            >
              Haus
              <span className="text-sm text-gray-500">in advance</span>
            </p>
            <span className="w-full h-[1px] bg-[#b2a1ff]"></span>
          </div>
          <button
            onClick={() => setIsCustomModalOpen(true)}
            className={cls(
              "flex w-[160px] box-border items-center justify-center px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-lg border border-transparent transition-all",
              "font-Play text-white",
              "hover:border-[#b2a1ff62] hover:text-[#b2a1ff]"
            )}
          >
            Customize
          </button>
        </div>
      </Html>
      <group rotation={[degToRad(10), 0, 0]}>
        <BootsBody scale={0.02} color={color} />
        {outsoleOption === 0 && (
          <BootsOutsole1 scale={0.02} position={[0, 0, 0]} />
        )}
        {outsoleOption === 1 && (
          <BootsOutsole2 scale={0.02} position={[0, 0, 0]} />
        )}
        {outsoleOption === 2 && (
          <BootsOutsole3 scale={0.02} position={[0, 0, 0]} />
        )}
        {outsoleOption === 3 && (
          <BootsOutsole4 scale={0.02} position={[0, 0, 0]} />
        )}
      </group>

      <Html transform position={[0.5, 0.1, 0]} scale={0.1}></Html>

      {/* <group position={[-0.4, 0.3, 0]}>
        {outsoleOptions.map((item, index) => {
          return (
            <group
              key={index}
              onClick={() => setOutsoleOption(index)}
              onPointerOver={() => setHoverIndex(index)}
              onPointerOut={() => setHoverIndex(outsoleOption)}
              position={[1, -index * 0.1, 0]}
            >
              <Text
                position={[0, 0, 0.01]}
                color={
                  index === outsoleOption || hoverIndex === index
                    ? "#b2a1ff"
                    : "white"
                }
                anchorX="center"
                anchorY="middle"
                scale={0.4}
                {...fontProps}
              >
                {item.type}
              </Text>
              <RoundedBox
                args={[0.4, 0.08, 0.1]}
                scale={[1, 1, 0.05]}
                radius={0.02}
                smoothness={4}
              >
                <meshStandardMaterial
                  transparent
                  opacity={
                    hoverIndex === index || index === outsoleOption ? 0.2 : 0.1
                  }
                  color={
                    hoverIndex === index || index === outsoleOption
                      ? "#b2a1ff"
                      : "white"
                  }
                />
              </RoundedBox>
            </group>
          )
        })}
      </group> */}
    </group>
  )
}

export default PreHaus
