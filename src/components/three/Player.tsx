import React from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { PointerLockControls } from "@react-three/drei"

const Player = () => {
  const { camera, gl } = useThree()

  const [ref, api] = useSphere<any>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
  }))

  useFrame(() => {
    camera.position.copy(ref.current.position)
  })

  return (
    <>
      <mesh ref={ref}></mesh>
      <PointerLockControls
        enabled
        // onChange={() => console.log("Controls change")}
        // onLock={() => console.log("Controls locked")}
        // onUnlock={() => console.log("Controls unlocked")}
      />
    </>
  )
}

export default Player
