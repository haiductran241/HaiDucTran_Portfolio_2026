import React from 'react'
import { Header, Footer, About, Skill, Testimonial, Works } from './containers'
import  { Navbar } from './components'
import './App.scss'
const App = () => {
  return (
   <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skill />
    <Testimonial />
    <Works />
    <Footer />
   </div>
  )
}

export default App
   