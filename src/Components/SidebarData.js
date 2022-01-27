import React from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeSharpIcon/>,
        link: "/home",
    },
    {
        title: "Mail",
        icon: <MailIcon/>,
        link: "/mail",
    },
    {
        title: "Exam",
        icon: <AccountBalanceSharpIcon/>,
        link: "/exam",
    },
    {
        title: "Attendence",
        icon: <AddCircleSharpIcon/>,
        link: "/attendence",
    },
];