import React from "react"
import axios from "axios"

interface Props {
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GuestBookInput = ({ setIsGuestBookOpen }: Props) => {
  const writeGuestBook = async () => {
    axios.post("http://localhost:9999/guestBook", {
      name: "HJIOHASIODHASOIDHAOI",
      comment:
        "assssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssssassssssssssssssssssssssssssssssssssssssss",
    })
  }

  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.6)] flex items-center justify-center fixed top-0 left-0 z-[999999999999]">
      <main className="flex flex-col justify-center gap-4 w-[520px] h-[360px] bg-[#b2a1ff44] rounded-lg relative backdrop-blur-sm font-Play px-5 py-4">
        <button
          className="w-12 h-12 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm flex items-center justify-center absolute top-[-24px] right-[-24px] rounded-full hover:bg-[rgba(255,255,255,0.4)] transition-all"
          onClick={() => setIsGuestBookOpen(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="name"
          className="outline-none px-3 py-2 bg-[rgba(255,255,255,0.1)] border border-[#b2a1ff22] text-[#b2a1ff] focus:border-[#b2a1ff88]"
        />
        <textarea
          placeholder="leave a comment"
          className="gl-scrollbar h-[160px] outline-none px-3 py-2 bg-[rgba(255,255,255,0.1)] border border-[#b2a1ff22] text-[#b2a1ff] focus:border-[#b2a1ff88]"
        ></textarea>
        <button
          onClick={writeGuestBook}
          className="transition-all flex items-center justify-center rounded-lg bg-[#b2a1ff66] text-white py-3 text-lg hover:bg-[#b2a1ff88]"
        >
          write
        </button>
      </main>
    </div>
  )
}

export default GuestBookInput
