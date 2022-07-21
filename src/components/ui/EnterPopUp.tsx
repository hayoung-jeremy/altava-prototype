import React from "react"
import { cls } from "@modules/utils"

interface Props {
  setReady: React.Dispatch<React.SetStateAction<boolean>>
}

const EnterPopUp = ({ setReady }: Props) => {
  return (
    <div
      className={cls(
        "absolute top-0 left-0 z-[9999999999999999999999999999] w-screen h-screen bg-[rgba(0,0,0,1)]",
        "flex items-center justify-center",
        "font-Play select-none"
      )}
    >
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
            "border border-gray-700 rounded-lg",
            "hover:text-[#b676ff] hover:border-[#b676ff] transition-all"
          )}
        >
          start
        </button>
      </aside>
    </div>
  )
}

export default EnterPopUp
