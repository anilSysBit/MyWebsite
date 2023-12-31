import { useEffect, useState,useRef } from 'react'
import Homepage from './Pages/Homepage';
import './styles/index.css'
import SideBar from './Components/SideBar'
import SideBarMobile from './Components/SideBarMobile';
import AboutPage from './Pages/AboutPage';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <div className='container'>
        <div className="side_bar_place">
          <SideBar/>
        </div>
        <div className="pages_place">
        <SideBarMobile/>
        <Homepage/>
        <AboutPage/>
        <Services/>
        <ContactUs/>
        </div>
      </div>
    </>
  )
}

export default App
