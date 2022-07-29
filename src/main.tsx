import { Loader } from "@react-three/drei"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { SWRConfig } from "swr"
import App from "./App"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: 5000,
        revalidateOnFocus: false,
        fetcher: (url: string) => fetch(url).then(response => response.json()),
      }}
    >
      <Suspense fallback={null}>
        <App />
      </Suspense>
      <Loader />
    </SWRConfig>
  </React.StrictMode>
)
