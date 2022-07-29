import React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { cls } from "@modules/utils"
import useSWR from "swr"
import useMutation from "@modules/hooks/useMutation"
import useGuestBook from "@modules/hooks/useGuestBook"

interface Props {
  setIsGuestBookOpen: React.Dispatch<React.SetStateAction<boolean>>
  getGuestBook: (data: any) => void
  guestBookList: any
}

type FormData = {
  name: string
  comment: string
}

const GuestBookInput = ({
  setIsGuestBookOpen,
  getGuestBook,
  guestBookList,
}: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log(data)
    await axios
      .post("http://localhost:9999/guestBook", {
        name: data.name,
        comment: data.comment,
      })
      .then(() => {
        console.log("write  완료")
        getGuestBook({})
      })
      .then(() => setIsGuestBookOpen(false))
  }

  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.6)] flex items-center justify-center fixed top-0 left-0 z-[999999999999]">
      <main className="w-[520px] h-[360px] bg-[#b2a1ff44] rounded-lg relative backdrop-blur-sm font-Play px-5 py-4">
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

        <form
          className="flex flex-col justify-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="name"
              className={cls(
                "outline-none px-3 py-2 bg-[rgba(255,255,255,0.1)] border text-[#b2a1ff] rounded",
                errors.name
                  ? "border-[#ff9898] focus:border-[#ff9898]"
                  : "border-[#b2a1ff22] focus:border-[#b2a1ff88]"
              )}
            />
            <p className="text-sm h-5 text-[#ff9898]">
              {errors.name?.type === "required" && "name is required"}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              {...register("comment", { required: true, maxLength: 200 })}
              placeholder="comment"
              className={cls(
                "gl-scrollbar h-[160px] outline-none px-3 py-2 bg-[rgba(255,255,255,0.1)] border text-[#b2a1ff] rounded",
                errors.comment
                  ? "border-[#ff9898] focus:border-[#ff9898]"
                  : "border-[#b2a1ff22] focus:border-[#b2a1ff88]"
              )}
            ></textarea>
            <p className="text-sm h-5 text-[#ff9898]">
              {errors.comment?.type === "required" &&
                "cannot post an empty comment"}
            </p>
          </div>
          <button
            type="submit"
            className="transition-all flex items-center justify-center rounded-lg bg-[#b2a1ff66] text-white py-3 text-lg hover:bg-[#b2a1ff88]"
          >
            write
          </button>
        </form>
      </main>
    </div>
  )
}

export default GuestBookInput
