import React from "react"
import { ContactShadows, Sparkles, Stars } from "@react-three/drei"

const EnvironmentSettings = () => {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <Sparkles position={[0, 0, -2]} />
      <ambientLight intensity={0.2} />
      <pointLight castShadow intensity={0.6} position={[100, 100, 100]} />
      <pointLight castShadow intensity={0.4} position={[1, 2, 0]} />
      <ContactShadows
        smooth
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
    </>
  )
}

export default EnvironmentSettings
