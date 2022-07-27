import React, { Suspense } from "react"
import { CubicBezierLine } from "@react-three/drei"

const Guidlines = () => {
  return (
    <Suspense fallback={null}>
      <CubicBezierLine
        start={[0.3, 0.001, -1]}
        midA={[-6, 0.001, -7]}
        midB={[0, 0, -15]}
        end={[13, 0, -1]}
        segments={100}
        color={"#7f6d94"}
        lineWidth={0.8}
        dashed={false}
      />
    </Suspense>
  )
}

export default Guidlines
