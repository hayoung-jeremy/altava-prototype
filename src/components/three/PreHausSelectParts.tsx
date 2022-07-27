import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSnapshot } from "valtio"

import { outsoleOptions, selectedPartsName } from "@constants/preHaus"
import { ColorPicker } from "@components/ui"
import { cls, generateRandomColor } from "@modules/utils"
import { BootsColorState } from "@interface/bootsColorState"
import { bootsColorState } from "./PreHausCustomization"

interface Props {
  selectedPartIndex: number
  setSelectedPartIndex: React.Dispatch<React.SetStateAction<number>>
  setOutsoleOption: React.Dispatch<React.SetStateAction<number>>
  //   state: BootsColorState
}

const PreHausSelectParts = ({
  selectedPartIndex,
  setSelectedPartIndex,
  setOutsoleOption,
}: //   state,
Props) => {
  const [selectedOutsoleIndex, setSelectedOutsoleIndex] = useState(0)

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [colorPickerColor, setColorPickerColor] = useState("#aabbcc")

  const snap = useSnapshot(bootsColorState)

  const randomArr = useRef<any[]>(generateRandomColor())

  const onClickToNextPart = () => {
    if (selectedPartIndex < 5) setSelectedPartIndex(selectedPartIndex + 1)
    else setSelectedPartIndex(0)
  }
  const onClickToPrevPart = () => {
    if (selectedPartIndex == 0) setSelectedPartIndex(5)
    else setSelectedPartIndex(selectedPartIndex - 1)
  }

  useEffect(() => {
    console.log(
      "bootsColorState.parts[snap.current!] : ",
      bootsColorState.parts[snap.current!]
    )
  }, [])

  return (
    <footer
      onClick={() => setIsColorPickerOpen(false)}
      className={cls(
        "w-full h-[300px]",
        "flex flex-col items-center justify-start gap-5",
        "bg-[#252525]",
        "text-white font-Questrial",
        "select-none",
        "px-6 py-5"
      )}
    >
      <nav className="flex gap-6">
        <button
          onClick={onClickToPrevPart}
          className={cls(
            "flex items-center justify-center w-12 h-12 transition-all",
            "hover:text-[#b2a1ff]"
          )}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <p className="w-[200px] flex items-center justify-center text-xl">
          {selectedPartsName[selectedPartIndex]}
        </p>
        <button
          onClick={onClickToNextPart}
          className={cls(
            "flex items-center justify-center w-12 h-12 transition-all",
            "hover:text-[#b2a1ff]"
          )}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
      {selectedPartIndex === 5 && (
        <ul className="flex gap-2 mb-3">
          {outsoleOptions.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setOutsoleOption(index)
                  setSelectedOutsoleIndex(index)
                }}
                className={cls(
                  "transition-all cursor-pointer",
                  "border rounded",
                  "bg-[#333] px-4 py-1",
                  "hover:bg-[#333] hover:text-[#b2a1ff]",
                  selectedOutsoleIndex === index
                    ? "border-[#b2a1ff] text-[#b2a1ff]"
                    : "border-transparent text-white"
                )}
              >
                {item.type}
              </li>
            )
          })}
        </ul>
      )}
      <ul
        onClick={(e: any) => e.stopPropagation()}
        className="flex gap-3 items-center"
      >
        {randomArr.current.map((colorCode, index) => {
          return (
            <li
              key={index}
              onClick={() => (bootsColorState.parts[snap.current!] = colorCode)}
              style={{ backgroundColor: colorCode }}
              className="w-8 h-8 rounded-full"
            ></li>
          )
        })}
        <li className="relative">
          <div
            style={{ backgroundColor: colorPickerColor }}
            onClick={() => setIsColorPickerOpen(true)}
            className="w-10 h-10 rounded-full border-2 border-[#eee]"
          />
          {isColorPickerOpen && (
            <ColorPicker setColorPickerColor={setColorPickerColor} />
          )}
        </li>
      </ul>
    </footer>
  )
}

export default PreHausSelectParts
