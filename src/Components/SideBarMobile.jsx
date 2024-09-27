import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SideBar from "./SideBar";
import myimage from '../assets/myppimage.jpg'

// Code of Responsive Navigation for Small Devices

const SideBarMobile = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    window.onscroll = () => {
      setMenuState(false);
    };
  }, []);

  return (
    <div className="sidebar_mobile_container">
      <style>{`

            .locksidebar{
                z-index:5;
                position:absolute;
            }
            .locksidebar .sidebar_container{
                display:block;
                right:0;
                position:fixed;
                background-color:white;
                z-index:1;
                animation-name:menu;
                animation-duration: .5s;
                animation-timing-function:linear;
                width:80%;
                animation-iteration-count:1;
            }
                .home{
                display:flex;
                place-items:center;
                place-content:center;
                column-gap:10px;
                  img{
                    height:50px;
                    width:50px;
                    border-radius:50%;
                    object-fit:contain;
                    object-position:center;
                    // box-shadow:1px 1px 10px gray;
                    border:0.5px solid gray;
                  }
                }

        `}</style>
        <div className="locksidebar">
            {menuState ? <SideBar /> : null}
        </div>
        <div className="name_container">
          <a className="home" href="#home">
            <img src={myimage} alt="" />
            <p>Anil Wagle</p>
          </a>
        </div>
        <div className="open_off_container" onClick={handleMenuClick}>
          {menuState ? (
            <CloseIcon className="menuicon" />
          ) : (
            <MenuIcon className="menuicon" />
          )}
        </div>
      </div>
  );
};

export default SideBarMobile;
