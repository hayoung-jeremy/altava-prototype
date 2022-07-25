import React, { useRef } from "react"
import * as THREE from "three"
import { ContactShadows, Sparkles, Stars, useHelper } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"

const EnvironmentSettings = () => {
  const projectPointLight = useRef<any>()
  useHelper(projectPointLight, THREE.PointLightHelper, 1, "magenta")

  const managmentSpotLight = useRef<any>()
  useHelper(managmentSpotLight, THREE.SpotLightHelper, "cyan")

  const hausPointLight = useRef<any>()
  useHelper(hausPointLight, THREE.PointLightHelper, 1, "cyan")

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
      <ambientLight intensity={0.3} />

      {/* managmentSpotLight */}

      {/* projectPointLight */}
      <pointLight
        // ref={projectPointLight}
        position={[6, 5, -12]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        intensity={0.2}
      />

      {/* hausPointLight */}
      <pointLight
        // ref={hausPointLight}
        position={[16, 2, -5]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        intensity={0.2}
      />

      <ContactShadows
        smooth
        position={[0, -0.8, 0]}
        opacity={1}
        width={1}
        height={1}
        far={1}
        blur={1.5}
      />
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
    </>
  )
}

export default EnvironmentSettings
