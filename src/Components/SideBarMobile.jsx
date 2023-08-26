import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import SideBar from './SideBar';
// Code of Responsive Navigation for Small Devices

const SideBarMobile = () => {
    const [menuState, setMenuState] = useState(false);

    const handleMenuClick =()=>{
        setMenuState(!menuState);
    }

    useEffect(()=>{
        window.onscroll =()=>{
            setMenuState(false);
        }
    },[])
    
  return (
    <div className="sidebar_mobile_container">
        <style>{`

            .locksidebar{
                position:absolute;
            }
            .locksidebar .sidebar_container{
                display:block;
                right:0;
                background-color:white;
                z-index:1;
                animation-name:menu;
                animation-duration: .5s;
                animation-timing-function:linear;
                width:80%;
                animation-iteration-count:1;
            }

        `}</style>
            <div className="locksidebar">
            {menuState ? <SideBar/> : null}
            </div>
        <div className="name_container">
            <h2>Anil Wagle</h2>
        </div>
        <div className="open_off_container" onClick={handleMenuClick}>
            {menuState ? <CloseIcon className='menuicon'/> : <MenuIcon className='menuicon'/>}
        </div>
    </div>
  )
}

export default SideBarMobile