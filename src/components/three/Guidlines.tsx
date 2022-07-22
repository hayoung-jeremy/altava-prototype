import React from "react"
import { CubicBezierLine } from "@react-three/drei"

const Guidlines = () => {
  return (
    <>
      <CubicBezierLine
        start={[0.3, 0.001, -1]}
        midA={[-6, 0.001, -7]}
        midB={[0, 0, -15]}
        end={[16, 0.001, -5]}
        segments={100}
        color={"#7f6d94"}
        lineWidth={0.8}
        dashed={false}
      />
    </>
  )
}

export default Guidlines
