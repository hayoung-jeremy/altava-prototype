import React, { Suspense } from "react"
import { Html } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"

import { VideoContainer } from "@components/three"
import { cls } from "@modules/utils"
import { projectVideoList } from "@constants/projectVideoList"

const Project = () => {
  return (
    <Suspense fallback={null}>
      <group position={[6, 0, -15]} rotation={[0, degToRad(-20), 0]}>
        <Html scale={0.15} transform position={[-1.5, 1, 0]}>
          <p
            className={cls(
              "text-gray-100 text-3xl w-[200px] font-Play relative",
              "after:w-[200px] after:h-[1px] after:bg-[#b2a1ff] after:absolute after:bottom-[-16px] after:left-[0px]"
            )}
          >
            Projects
          </p>
        </Html>
        {projectVideoList.map((video, index) => {
          return (
            <VideoContainer
              key={index}
              position={[index * 3, 1, 0]}
              rotation={[0, degToRad(-10 * index), 0]}
              title={video.title}
              content={video.content}
              videoUrl={video.videoUrl}
            />
          )
        })}
      </group>
    </Suspense>
  )
}

export default Project
