import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  ContactShadows,
  CubicBezierLine,
  Html,
  Sparkles,
  Stars,
  Stats,
} from "@react-three/drei"
import { Debug, Physics } from "@react-three/cannon"
import { degToRad } from "three/src/math/MathUtils"

import { Avatar, Card, Ground, Player } from "@components/three"
import { EnterPopUp, MousePointer } from "@components/ui"
import { management } from "@constants/management"
import { cls } from "@modules/utils"

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className="w-screen h-screen">
      <Canvas shadows gl={{ alpha: false }} camera={{ fov: 75 }}>
        <Suspense fallback={null}>
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
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <pointLight castShadow intensity={0.8} position={[1, 2, 0]} />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.25}
            scale={10}
            blur={1.5}
            far={0.8}
          />
          <color attach="background" args={["#202020"]} />
          <fog attach="fog" args={["#202020", 5, 20]} />

          <Physics gravity={[0, -30, 0]}>
            <Player />
            <Ground />
            <Avatar scale={0.007} position={[0, 0, -2]} />
            {/* <Debug scale={1.1} color="black"></Debug> */}

            <Html scale={0.15} transform position={[0, 1.5, -1.7]}>
              <div className="flex flex-col items-center justify-center font-Questrial text-gray-200 text-center select-none backdrop-blur-sm">
                <p className="mb-4">
                  We bring <span className="text-[#b2a1ff]">culture</span>{" "}
                  defining brands into the{" "}
                  <span className="text-[#b2a1ff]">metaverse</span> through
                  <br />
                  our virtual platforms and access to others
                </p>

                <a
                  className={cls(
                    "block",
                    "bg-[rgba(255,255,255,0.1)] px-4 py-1 rounded-lg transition-all border border-transparent",
                    "hover:text-[#b2a1ff] text-sm hover:border-[#b2a1ff62]"
                  )}
                  href="https://altava.com/assets/pdf/Altava_whitepaper.pdf"
                  target={"_blank"}
                >
                  Whitepaper
                </a>
              </div>
            </Html>
          </Physics>

          {/* Scene */}
          <group position={[-5, 0, -5]} rotation={[0, degToRad(60), 0]}>
            <Html scale={0.15} transform position={[2.25, 1.5, 0]}>
              <p className="text-gray-100 text-3xl w-[200px] font-Play">
                Our Leaders <br /> <span className="text-[#b2a1ff]">&</span>{" "}
                Advisors
              </p>
            </Html>
            {management.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  managingPosition={item.managingPosition}
                  imgURL={item.imgUrl}
                  positionX={index + 3.2}
                  // positionY={index * 1.2}
                  sns={item.sns}
                  positionZ={index * 0.2}
                />
              )
            })}
          </group>
          <CubicBezierLine
            start={[0, 0.001, -3]}
            end={[4, 0.001, -12]}
            midA={[-6, 0.001, -7]}
            midB={[0, 0, -15]}
            segments={10000}
            color={"#3e3a4f"}
            lineWidth={0.8}
            dashed={false}
          />
        </Suspense>

        {/* helpers */}
        {/* <gridHelper args={[100, 100]} /> */}
        <Stats />
      </Canvas>

      {/* UI */}
      <MousePointer />
      {/* {!ready && <EnterPopUp setReady={setReady} />} */}
    </div>
  )
}

export default App
