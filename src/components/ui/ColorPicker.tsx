import { BootsColorState } from "@interface/bootsColorState"
import React, { useEffect, useRef, useState } from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"
import { useSnapshot } from "valtio"

interface Props {
  colorPickerColor: string
  setColorPickerColor: React.Dispatch<React.SetStateAction<string>>
  state: BootsColorState
}

const ColorPicker = ({
  colorPickerColor,
  setColorPickerColor,
  state,
}: Props) => {
  const snap = useSnapshot(state)

  return (
    <div className="custom-color-picker absolute top-[0] translate-y-[-50%] left-[40px] text-black">
      <HexColorPicker
        color={snap.parts[snap.current!]}
        onChange={color => {
          state.parts[snap.current!] = color
          setColorPickerColor(color)
        }}
      />
      <HexColorInput
        color={snap.parts[snap.current!]}
        onChange={color => {
          state.parts[snap.current!] = color
          setColorPickerColor(color)
        }}
      />
    </div>
  )
}

export default ColorPicker
