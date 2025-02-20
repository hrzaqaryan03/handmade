import React from 'react'
import './App.scss'
import Approutes from './approutes/Approutes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
const App = () => {

  return (
    <div className='wrapper'>
      <Header/>
      <>
        <Approutes/>
      </>
      <Footer/>
    </div>
  )
}

export default App