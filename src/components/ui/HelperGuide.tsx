import React from "react"
import KeyBoardTag from "./KeyBoardTag"

interface Props {
  setIsHelperGuideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HelperGuide = ({ setIsHelperGuideOpen }: Props) => {
  return (
    <div className="select-none bg-[rgba(0,0,0,0.6)] w-screen h-screen overflow-hidden fixed top-0 left-0 z-[999999999999999] font-Questrial backdrop-blur-sm text-white flex items-center justify-center">
      <main className="bg-[#b098ff22] rounded-3xl p-8 flex flex-col gap-4 items-center">
        <h2 className="text-2xl mb-5 text-[#b098ff]">Hi, welcome to ALTAVA</h2>
        <p>
          If you <KeyBoardTag keyType="mouse left click" /> after this pop up is
          closed,
        </p>
        <p>the mouse pointer will be locked, and you will join our website</p>
        <p>
          You can use <KeyBoardTag keyType="W" /> , <KeyBoardTag keyType="A" />{" "}
          , <KeyBoardTag keyType="S" /> , <KeyBoardTag keyType="D" /> to move
          around just like normal FPS games
        </p>
        <p>
          If you want to press a <KeyBoardTag keyType="button" /> , you should
          first press <KeyBoardTag keyType="ESC" /> , or{" "}
          <KeyBoardTag keyType="Alt" /> to unlock your mouse pointer
        </p>
        <p className="text-[#b098ff88]">
          press the button below to navigate now!
        </p>
        <button
          className="mx-auto w-[240px] py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.3)] rounded-lg hover:border-[#b098ff88] hover:text-[#b098ff]"
          onClick={() => setIsHelperGuideOpen(false)}
        >
          Click me!
        </button>
      </main>
    </div>
  )
}

export default HelperGuide
