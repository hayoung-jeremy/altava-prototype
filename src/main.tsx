import { Loader } from "@react-three/drei"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
  </React.StrictMode>
)
