import React, { Suspense, useState } from "react"
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

interface Props {
  setIsCustomModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PreHaus = ({ setIsCustomModalOpen }: Props) => {
  const [color, setColor] = useState("#fff")
  const [outsoleOption, setOutsoleOption] = useState(0)

  return (
    <Suspense fallback={null}>
      <group
        position={[16, 0.7, -6]}
        rotation={[0, -degToRad(90), 0]}
        // position={[0, 0.7, -2]}
      >
        <Html scale={0.15} transform position={[-1, 0.2, 0]}>
          <div className="flex flex-col gap-4 select-none">
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
      </group>
    </Suspense>
  )
}

export default PreHaus
