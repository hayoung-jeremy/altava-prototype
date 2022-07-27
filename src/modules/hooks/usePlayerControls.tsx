import React, { useEffect, useState } from "react"

type Key = "KeyW" | "KeyS" | "KeyA" | "KeyD" | "Space"

const moveFieldByKey = (key: Key) => {
  const keys = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
  }

  return keys[key]
}

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      setMovement(prev => ({
        ...prev,
        [moveFieldByKey(e.code)]: true,
      }))
    }
    const handleKeyUp = (e: any) => {
      setMovement(prev => ({
        ...prev,
        [moveFieldByKey(e.code)]: false,
      }))
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    // console.log("add event listener")

    return () => {
      // console.log("remove event listener")
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return movement
}

export default usePlayerControls
