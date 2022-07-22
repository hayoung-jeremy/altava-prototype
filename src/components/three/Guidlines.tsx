import React from "react"
import { CubicBezierLine } from "@react-three/drei"

const Guidlines = () => {
  return (
    <>
      <CubicBezierLine
        start={[0, 0.001, -3]}
        midA={[-6, 0.001, -7]}
        midB={[0, 0, -15]}
        end={[4, 0.001, -12]}
        segments={100}
        color={"#7f6d94"}
        lineWidth={0.8}
        dashed={false}
      />
      <CubicBezierLine
        start={[4, 0.001, -12]}
        midA={[0, 0, 0]}
        midB={[0, 0, 0]}
        end={[0, 0, 0]}
        segments={100}
        color={"#7f6d94"}
        lineWidth={0.8}
        dashed={false}
      />
    </>
  )
}

export default Guidlines
