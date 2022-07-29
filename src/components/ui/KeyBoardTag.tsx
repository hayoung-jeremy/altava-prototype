import React from "react"

interface Props {
  keyType: string
}

const KeyBoardTag = ({ keyType }: Props) => {
  return (
    <span className="select-none inline-flex font-Play items-center justify-center px-2.5 py-1.5 mx-[1px] bg-[rgba(255,255,255,0.05)] rounded border border-[rgba(255,255,255,0.3)] text-xs leading-3">
      {keyType}
    </span>
  )
}

export default KeyBoardTag
