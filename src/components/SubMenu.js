import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css';

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubnav} className="sidebarlink">
                <div>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <div>
                    {
                        item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null
                    }
                </div>
            </Link>
            {subnav && item.subNav.map((val, index) => {
                return (
                    <Link to={val.path} key={index} className="dropdownlink">

                        {val.icon}
                        <span>{val.title}</span>

                    </Link>
                )
            })}
        </>
    )
}

export default SubMenu
