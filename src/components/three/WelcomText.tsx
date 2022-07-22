import React from "react"
import { Html } from "@react-three/drei"
import { cls } from "@modules/utils"

const WelcomText = () => {
  return (
    <Html scale={0.15} transform position={[0, 1.5, -1.7]}>
      <div className="flex flex-col items-center justify-center font-Questrial text-gray-200 text-center select-none backdrop-blur-sm">
        <p className="mb-4">
          We bring <span className="text-[#b2a1ff]">culture</span> defining
          brands into the <span className="text-[#b2a1ff]">metaverse</span>{" "}
          through
          <br />
          our virtual platforms and access to others
        </p>

        <a
          className={cls(
            "block",
            "bg-[rgba(255,255,255,0.1)] px-4 py-1 rounded-lg transition-all border border-transparent",
            "hover:text-[#b2a1ff] text-sm hover:border-[#b2a1ff62]"
          )}
          href="https://altava.com/assets/pdf/Altava_whitepaper.pdf"
          target={"_blank"}
        >
          Whitepaper
        </a>
      </div>
    </Html>
  )
}

export default WelcomText
