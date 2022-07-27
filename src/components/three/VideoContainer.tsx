import React, { Suspense, useEffect, useState } from "react"
import { Html } from "@react-three/drei"
import * as THREE from "three"

interface Props extends THREE.Mesh {
  title?: string
  content?: string
  videoUrl?: string
}

const VideoContainer = ({ title, content, videoUrl, ...props }: any) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videoUrl,
      crossOrigin: "Anonymous",
      loop: false,
      muted: true,
    })
  )
  // useEffect(() => {
  //   video.play()
  // }, [video])
  return (
    <Suspense fallback={null}>
      <mesh {...props} receiveShadow castShadow raycast={() => null}>
        <planeBufferGeometry attach="geometry" args={[1.5, 1.5]} />
        <meshStandardMaterial
          attach="material"
          toneMapped={false}
          side={THREE.FrontSide}
          // roughness={0}
          // metalness={1}
          // bumpScale={0}
        >
          <videoTexture
            attach="map"
            args={[video]}
            encoding={THREE.sRGBEncoding}
          />
        </meshStandardMaterial>
        <mesh receiveShadow castShadow>
          <planeBufferGeometry attach="geometry" args={[1.5, 1.5]} />
          <meshStandardMaterial side={THREE.BackSide} color="#7f6d94" />
        </mesh>
        <Html scale={0.15} transform position={[1.2, 0, 0]}>
          <div className="max-w-[200px] text-white font-Play">
            <p className="text-lg mb-2 text-[#b2a1ff]">{title}</p>
            <p className="font-Questrial text-sm">{content}</p>
          </div>
        </Html>
      </mesh>
    </Suspense>
  )
}

export default VideoContainer
