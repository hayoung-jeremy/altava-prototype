import React, { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls } from "@react-three/drei"
import { useSphere } from "@react-three/cannon"
import { Vector3 } from "three"

import usePlayerControls from "@hooks/usePlayerControls"

const SPEED = 10

const Player = () => {
  const { camera } = useThree()

  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    usePlayerControls()

  const [ref, api] = useSphere<any>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
  }))

  const velocity = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe(v => (velocity.current = v))
  }, [api.velocity])

  useFrame(() => {
    // camera.position.copy(ref.current.position)
    ref.current.getWorldPosition(camera.position)

    const direction = new Vector3()
    const frontVector = new Vector3(
      0,
      0,
      Number(moveBackward) - Number(moveForward)
    )
    const sideVector = new Vector3(Number(moveLeft) - Number(moveRight), 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(direction.x, velocity.current[1], direction.z)

    if (jump && Math.abs(Number(velocity.current[1].toFixed(2))) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2])
    }
  })

  return (
    <>
      <mesh ref={ref}></mesh>
      <PointerLockControls
      // onChange={() => console.log("Controls change")}
      // onLock={() => console.log("Controls locked")}
      // onUnlock={() => console.log("Controls unlocked")}
      />
    </>
  )
}

export default Player