import React from "react"
import { ContactShadows, Sparkles, SpotLight, Stars } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import { PointLightShadow } from "three"

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
      <pointLight
        castShadow
        shadow-mapSize={[256, 256]}
        intensity={0.6}
        position={[50, 50, 50]}
      />
      {/* <pointLight intensity={0.4} position={[1, 2, 0]} /> */}
      <SpotLight
        penumbra={0.5}
        // depthBuffer={depthBuffer}
        position={[0, 1, 0]}
        rotation={[degToRad(90), 0, 0]}
        intensity={0.5}
        angle={0.1}
        color="#0EEC82"
        distance={1}
      />
      <ContactShadows
        smooth
        position={[0, -0.8, 0]}
        opacity={0.25}
        width={40}
        height={40}
        far={9}
        blur={1.5}
      />
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
    </>
  )
}

export default EnvironmentSettings
