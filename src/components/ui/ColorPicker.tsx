import React, { useEffect, useRef, useState } from "react"
import { HexColorInput, HexColorPicker } from "react-colorful"

interface Props {
  colorPickerColor: string
  setColorPickerColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPicker = ({ colorPickerColor, setColorPickerColor }: Props) => {
  useEffect(() => {
    console.log("colorPickerColor : ", colorPickerColor)
  }, [colorPickerColor])

  return (
    <div className="custom-color-picker absolute top-[0] translate-y-[-50%] left-[40px] text-black">
      <HexColorPicker color={colorPickerColor} onChange={setColorPickerColor} />
      <HexColorInput color={colorPickerColor} onChange={setColorPickerColor} />
    </div>
  )
}

export default ColorPicker
