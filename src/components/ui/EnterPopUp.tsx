import React from "react"
import { cls } from "@modules/utils"
import { rgba } from "@react-spring/shared"

interface Props {
  setReady: React.Dispatch<React.SetStateAction<boolean>>
}

const EnterPopUp = ({ setReady }: Props) => {
  return (
    <div
      className={cls(
        "absolute top-0 left-0 z-[9999999999999999999999999999] w-screen h-screen bg-gradient-to-br from-[#111] to-[#230b2e]",
        "flex items-center justify-center",
        "font-Play select-none overflow-hidden"
      )}
    >
      {[...Array(6)].map((_, index) => {
        const randomSize = Math.floor(Math.random() * (400 - 160) + 160)
        const randomAlphaVal = Math.random() * 0.05
        const randomTopVal = Math.floor(Math.random() * (600 - 200) + 200)
        const randomLeftVal = Math.floor(Math.random() * (800 - 200) + 200)

        return (
          <div
            key={index}
            style={{
              top: randomTopVal + "px",
              left: randomLeftVal + "px",
              width: randomSize + "px",
              height: randomSize + "px",
              background: `rgba(255, 255, 255, ${randomAlphaVal})`,
            }}
            className={cls(
              "deco",
              "absolute rounded-full drop-shadow-lg blur-sm"
            )}
          ></div>
        )
      })}
      <aside
        className={cls(
          "w-[25vw] h-[12vw]",
          "flex items-center justify-center gap-3 flex-col",
          "text-[#bebebe] text-2xl",
          "bg-[rgba(255,255,255,0.04)] backdrop-blur-sm drop-shadow-2xl",
          "border-l border-t border-l-[rgba(255,255,255,0.05)] border-t-[rgba(255,255,255,0.1)] rounded-lg",
          "hover:bg-[rgba(255,255,255,0.06)] hover:border-l-[rgba(196,145,255,0.2)] hover:border-t-[rgba(196,145,255,0.2)] transition-all duration-[400ms]"
        )}
      >
        <h2>Hi, welcome to ALTAVA</h2>
        <p className="text-base text-gray-500">
          press start to navigate our service
        </p>
        <button
          onClick={() => setReady(true)}
          className={cls(
            "flex items-center justify-center px-5 py-2",
            "text-base text-gray-400",
            "border border-gray-600 rounded-lg",
            "hover:text-[#a676ff] hover:border-[#a676ff] transition-all"
          )}
        >
          start
        </button>
      </aside>
    </div>
  )
}

export default EnterPopUp
