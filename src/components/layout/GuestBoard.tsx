import React, { Suspense, useEffect, useState } from "react"
import { Html, RoundedBox } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"
import axios from "axios"
import { ChangeTimeFormat, cls } from "@modules/utils"
import useMutation from "@modules/hooks/useMutation"
import useGuestBook from "@modules/hooks/useGuestBook"

interface Props {
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
  getGuestBook: (data: any) => void
  guestBookList: any
}

const GuestBoard = ({
  setIsGuestBookOpen,
  getGuestBook,
  guestBookList,
}: Props) => {
  useEffect(() => {
    getGuestBook({})
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
            <meshStandardMaterial color="#b098ff" transparent opacity={0.2} />
          </RoundedBox>
          <Html occlude scale={0.06} transform position={[0, 0, 0.02]}>
            <ul className="gl-scrollbar w-[900px] h-[600px] grid grid-cols-3 gap-3 select-none items-start overflow-y-scroll">
              {guestBookList &&
                guestBookList.length > 0 &&
                guestBookList.map((item: any, index: number) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col gap-3 rounded-lg bg-[rgba(255,255,255,0.05)] backdrop-blur-sm py-3 px-4 font-Questrial h-[240px]"
                    >
                      <p className="flex gap-3 items-center justify-between">
                        <span className="text-lg text-[#b2a1ff] block w-[70%] truncate">
                          {item.name}{" "}
                        </span>
                        <span className="text-xs text-[#aaa]">
                          {ChangeTimeFormat(item.created_at)}
                        </span>
                      </p>
                      <div className="gl-scrollbar text-[#eee] w-full h-full whitespace-normal min-w-0 break-words overflow-y-scroll">
                        {item.comment}
                      </div>
                    </li>
                  )
                })}
            </ul>
          </Html>
        </group>
      </group>
    </Suspense>
  )
}

export default GuestBoard
