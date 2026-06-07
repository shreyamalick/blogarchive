import './App.css'
import React, { useState } from 'react'
import {Header} from "./components/Header"
import {HeroSection} from "./components/HeroSection"
import {Blogs} from "./components/Blogs"
import { Footer } from './components/Footer'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
    <Header search={search} setSearch={setSearch}/>
    <HeroSection/>
    <Blogs search={search}/>
    <Footer/>
    </>
  )
}

export default App
