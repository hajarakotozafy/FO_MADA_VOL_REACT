import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        cName: 'nav-text',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        cName: 'nav-text',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Products',
        path: '/products',
        cName: 'nav-text',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        cName: 'nav-text',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Messages',
        path: '/messages',
        cName: 'nav-text',
        icon: <FaIcons.FaEnvelopeOpenText />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Support',
        path: '/support',
        cName: 'nav-text',
        icon: <IoIcons.IoMdHelpCircle />
    }
];