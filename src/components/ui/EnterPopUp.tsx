import React from "react"
import { cls } from "@modules/utils"

const EnterPopUp = () => {
  return (
    <div
      className={cls(
        "fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)]",
        "flex items-center justify-center"
      )}
    >
      <aside
        className={cls(
          "w-[25vw] h-[15vw]",
          "flex items-center justify-center gap-3 flex-col",
          "bg-[rgba(255,255,255,0.1)] backdrop-blur-sm drop-shadow-2xl",
          "border-l border-t border-l-[rgba(255,255,255,0.05)] border-t-[rgba(255,255,255,0.1)] rounded-lg",
          "text-[#bebebe] text-2xl"
        )}
      >
        <h2>Hi, welcome to ALTAVA</h2>
        <button className="flex items-center justify-center px-5 py-2 leading-[24px] bg-[rgba(255,255,255,0.1)] rounded-lg">
          start
        </button>
      </aside>
    </div>
  )
}

export default EnterPopUp
