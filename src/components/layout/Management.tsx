import React from "react"
import { Html } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"

import { cls } from "@modules/utils"
import { management } from "@constants/management"
import { Card } from "@components/three"

const Management = () => {
  return (
    <group position={[-5, 0, -6]} rotation={[0, degToRad(60), 0]}>
      <Html scale={0.15} transform position={[-1, 1.5, 0]}>
        <p
          className={cls(
            "text-gray-100 text-3xl w-[200px] font-Play",
            "after:w-[200px] after:h-[1px] after:bg-[#b2a1ff] after:absolute after:bottom-[-16px] after:left-[0px]"
          )}
        >
          Our Leaders <br /> <span className="text-[#b2a1ff]">&</span> Advisors
        </p>
      </Html>
      {management.map((item, index) => {
        return (
          <Card
            key={index}
            personName={item.name}
            managingPosition={item.managingPosition}
            imgURL={item.imgUrl}
            sns={item.sns}
            position={[index * 1.2, 0.01, 0]}
            rotation={[0, degToRad(-8 * index - 1), 0]}
          />
        )
      })}
    </group>
  )
}

export default Management
