import { MdDashboard, MdPerson, MdMessage, MdInfo, MdSettings } from "react-icons/md";
import { ReactNode } from "react";

type SidebarLink = {
  name: string;
  link: string;
  icon: ReactNode;
};

export const sidebarLinks: SidebarLink[] = [
  {
    name: 'Dashboard',
    link: '/',
    icon: <MdDashboard size={30}/>
  },
  {
    name: 'Profile',
    link: '/profile',
    icon: <MdPerson size={30} />
  },
  {
    name: 'Messages',
    link: '/messages',
    icon: <MdMessage size={30} />
  },
  {
    name: 'Info',
    link: '/info',
    icon: <MdInfo size={30} />
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: <MdSettings size={30} />
  }
];
