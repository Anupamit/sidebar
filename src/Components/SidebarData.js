import React from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import EqualizerSharpIcon from '@mui/icons-material/EqualizerSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeSharpIcon/>,
        link: "/home",
    },
    {
        title: "Notifications",
        icon: <NotificationsActiveSharpIcon/>,
        link: "/notifications",
    },
    {
        title: "Exam",
        icon: <MenuBookSharpIcon/>,
        link: "/exam",
    },
    {
        title: "Result",
        icon: <LibraryBooksSharpIcon/>,
        link: "/result",
    },
    {
        title: "Attendence",
        icon: <EqualizerSharpIcon/>,
        link: "/attendence",
    },
    {
        title: "Log Out",
        icon: <LogoutSharpIcon/>,
        link: "/logout",
    },
];