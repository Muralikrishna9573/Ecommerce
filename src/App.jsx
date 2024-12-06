import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landingpage from './Pages/Landingpage'


const App = () => {
  return (
   <>
    <Header/> 
     <main>
      <Landingpage/>
     </main>
    <Footer/>
    
   </>
  )
}

export default App
