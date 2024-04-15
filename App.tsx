import React from "react"
import { Routes } from "./src/routers"
import { NativeBaseProvider } from "native-base"


export default function App() {
  return (
    <NativeBaseProvider>
       <Routes/>
    </NativeBaseProvider>
  )
}


