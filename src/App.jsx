import { useState } from 'react'
import Homepage from './Pages/Homepage';
import './styles/index.css'
import SideBar from './Components/SideBar'
import SideBarMobile from './Components/SideBarMobile';

function App() {

  return (
    <>
      <SideBarMobile/>
      <div className='container'>
        <div className="side_bar_place">
          <SideBar/>
        </div>
        <div className="pages_place">
        <Homepage/>
        </div>
      </div>
    </>
  )
}

export default App
