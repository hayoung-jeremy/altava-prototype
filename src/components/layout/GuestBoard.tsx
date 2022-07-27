import React, { Suspense } from "react"
import { Html, RoundedBox } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import { cls } from "@modules/utils"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

interface Props {
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GuestBoard = ({ setIsGuestBookOpen }: Props) => {
  const { camera, controls, gl } = useThree()

  useEffect(() => {
    console.log("guest board 에서 호출한 gl.domElement :", gl.domElement)
  }, [])

  return (
    <Suspense fallback={null}>
      <group position={[13, 0.9, -1]} rotation={[0, -degToRad(140), 0]}>
        <Html
          scale={0.15}
          transform
          position={[-1.5, 0, 0]}
          raycast={() => null}
        >
          <div className="flex flex-col gap-4 select-none">
            <div className="flex flex-col gap-2">
              <p
                className={cls(
                  "flex flex-col",
                  "text-gray-100 text-3xl w-[200px] font-Play relative"
                )}
              >
                Guest Board
                <span className="text-sm text-gray-500">leave a comment!</span>
              </p>
              <span className="w-full h-[1px] bg-[#b2a1ff]"></span>
            </div>
            <button
              onClick={() => setIsGuestBookOpen(true)}
              className={cls(
                "flex w-[160px] box-border items-center justify-center px-3 py-1 bg-[rgba(255,255,255,0.1)] rounded-lg border border-transparent transition-all",
                "font-Play text-white",
                "hover:border-[#b2a1ff62] hover:text-[#b2a1ff]"
              )}
            >
              Write
            </button>
          </div>
        </Html>
        <group raycast={() => null}>
          <RoundedBox args={[1.45, 1, 0.1]} scale={[1, 1, 0.05]} castShadow>
            <meshStandardMaterial color="red" />
          </RoundedBox>
          <Html occlude scale={0.1} transform position={[0, 0, 0.02]}>
            <ul className="w-[528px] h-[360px] grid grid-cols-3 gap-3 select-none items-start bg-slate-100">
              <li className="rounded-lg bg-red-200">
                <p>Name</p>
                <p>Contents</p>
                <p>date</p>
              </li>
            </ul>
          </Html>
        </group>
      </group>
    </Suspense>
  )
}

export default GuestBoard
