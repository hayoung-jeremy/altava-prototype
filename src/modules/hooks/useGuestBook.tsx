import axios from "axios"
import { useEffect, useState } from "react"
import useMutation from "./useMutation"

export default function useGuestBook() {
  const [guestBookList, setGuestBookList] = useState([])

  const [getGuestBook, { Data, Loading, Error }] = useMutation(
    "http://10.190.141.51:9999/guestBook"
  )

  useEffect(() => {
    if (Data && !Loading && !Error) {
      setGuestBookList(Data.reverse())
    }
  }, [Data])
  return { guestBookList, getGuestBook }
}
