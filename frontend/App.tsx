import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
} from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as counter from "../.dfx/local/canisters/counter"
/*
 * Some examples to get you started
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"
import LandingPage from "./components/Hero"
import { Button } from "./components/ui/button"
import RootPage from "./pages/RootPage"
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<RootPage/>} />
          <Route path="/project" element={<ProjectPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const client = createClient({
  canisters: {
    counter,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
