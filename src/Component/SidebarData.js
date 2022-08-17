import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Avion',
        path: '/Avion',
        icon: <IoIcons.IoMdAirplane />,
        cName: 'nav-text'
    },
    {
        title: 'Vol',
        path: '/Vol',
        icon: <FaIcons.FaPlaneDeparture />,
        cName: 'nav-text'
    },
    {
        title: 'Reservation',
        path: '/Reservation',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
]