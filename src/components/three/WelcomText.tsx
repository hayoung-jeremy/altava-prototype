import React, { Suspense } from "react"
import { Html } from "@react-three/drei"
import { cls } from "@modules/utils"

const WelcomText = () => {
  return (
    <Suspense fallback={null}>
      <Html
        scale={0.1}
        transform
        position={[0, 0.8, -1.7]}
        raycast={() => null}
      >
        <div
          className={cls(
            "flex flex-col items-center justify-center font-Questrial text-gray-200 text-center select-none relative",
            "p-8 rounded-lg",
            "bg-[rgba(0,0,0,0.8)] border-[rgba(255,255,255,0.2)] border"
          )}
        >
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
    </Suspense>
  )
}

export default WelcomText
