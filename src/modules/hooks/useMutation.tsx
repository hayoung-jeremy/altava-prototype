import axios from "axios"
import { useState } from "react"

interface UseMutationState<T> {
  Loading: boolean
  Data?: T
  Error?: object
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>]

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setSate] = useState<UseMutationState<T>>({
    Loading: false,
    Data: undefined,
    Error: undefined,
  })
  function mutation() {
    setSate(prev => ({ ...prev, Loading: true }))
    axios
      .get(url)
      .then(response => response.data)
      .then(Data => setSate(prev => ({ ...prev, Data })))
      .catch(Error => setSate(prev => ({ ...prev, Error })))
      .finally(() => setSate(prev => ({ ...prev, Loading: false })))
  }
  return [mutation, { ...state }]
}
