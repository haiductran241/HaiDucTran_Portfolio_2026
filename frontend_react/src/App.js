import React from 'react'
import { Header, Footer, About, Skills, Testimonial, Works } from './containers'
import  { Navbar } from './components'
import './App.scss'
const App = () => {
  return (
   <div className="app">
    <Navbar />
    <Header />
    <About />
    <Works />
    <Skills />
    <Testimonial />
    <Footer />
   </div>
  )
}

export default App
   