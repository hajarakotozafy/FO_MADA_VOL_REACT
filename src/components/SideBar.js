import React, { useState } from 'react';
import './SideBar.css';
import { SidebarData } from './SideBarData';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

function SideBar() {
  const [sideBar, setSideBar] = useState(false);

  const handleShowSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <IconContext.Provider value={{ color: 'fff' }}>
        <div className="nav">
          <Link to="#" onClick={handleShowSideBar} className="navicon"><FaIcons.FaBars /></Link>
        </div>

        <nav className={sideBar ? "sidebarnavactive" : "sidebarnav"}>
          <div className="sidebarwrap">
            <div className="nav">
              <Link to="#" onClick={handleShowSideBar} className="navicon"><AiIcons.AiOutlineClose /></Link>
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default SideBar