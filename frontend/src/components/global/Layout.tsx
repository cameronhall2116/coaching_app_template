import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { IconSearch, IconHome, IconDashboard, IconFileText, IconUser, IconMessage2, IconClipboard, IconTargetArrow, IconSettings, IconClipboardList, IconClipboardData, IconClipboardTypography, IconArrowBadgeLeft, IconCircleArrowLeftFilled, IconCircleFilled, IconLogout } from "@tabler/icons-react";
import { SpotlightProvider, SpotlightAction, useSpotlight } from "@mantine/spotlight";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export interface ILayoutProps {};


const actions: SpotlightAction[] = [
  {
    title: 'Dashboard',
    description: 'Go to the dashboard',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Check ins',
    description: 'Check out your recent check ins',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size="1.2rem" />,
  },
];


const Layout: React.FC<ILayoutProps> = (props) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [toggleSidebar, setToggleSidebar] = useState(true);

    return (
      <>
        <div className={`grid grid-cols-${toggleSidebar === true ? "[200px_auto]" : "[0px_auto]"} transition-all duration-300 ease-in-out bg-gradient-to-t from-cyan-800 to-slate-950`}>
          <SpotlightProvider
            actions={actions}
            searchIcon={<IconSearch size="1.2rem" />}
            searchPlaceholder="Search..."
            shortcut="mod + shift + c"
            nothingFoundMessage="Nothing found..."
          ></SpotlightProvider>
          <div className="h-[100vh]">
            <div className={`h-32 text-center pt-16 font-bold text-white text-3xl cursor-pointer ${toggleSidebar === true ? "" : "-mt-24"} transition-all duration-300 ease-in-out`}>LOGO</div>
            <div className={`absolute top-20 ${toggleSidebar === true ? "left-56" : "left-16 rotate-180"} flex items-center cursor-pointer text-white transition-all duration-300 ease-in-out`} 
                  onClick={() => setToggleSidebar(!toggleSidebar)} >
              <IconCircleArrowLeftFilled className="overflow-visible z-20" viewBox="0 0 12 12" />
              <IconCircleFilled className="absolute z-0 overflow-visible blur-md shadow-xl text-slate-950" viewBox="0 0 12 12" />
            </div>
            <div className="h-full px-3 py-4 overflow-y-auto">
              <ul className="lg:space-y-10 sm:space-y-8 space-y-4 font-medium">
                <li>
                    <Link to="/" className="sidebar-btn" onClick={() => setActiveButtonIndex(0)}>
                      <IconDashboard className={`${activeButtonIndex === 0 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 0 ? 'text-cyan-600' : 'text-white'}`}>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/clients" className="sidebar-btn" onClick={() => setActiveButtonIndex(1)}>
                      <IconUser className={`${activeButtonIndex === 1 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 1 ? 'text-cyan-600' : 'text-white'}`}>Clients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/messages" className="sidebar-btn" onClick={() => setActiveButtonIndex(2)}>
                      <IconMessage2 className={`${activeButtonIndex === 2 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 2 ? 'text-cyan-600' : 'text-white'}`}>Messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/programs" className="sidebar-btn" onClick={() => setActiveButtonIndex(3)}>
                      <IconTargetArrow className={`${activeButtonIndex === 3 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 3 ? 'text-cyan-600' : 'text-white'}`}>Programs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/forms" className="sidebar-btn" onClick={() => setActiveButtonIndex(4)}>
                      <IconClipboard className={`${activeButtonIndex === 4 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 4 ? 'text-cyan-600' : 'text-white'}`}>Forms</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-btn" onClick={() => setActiveButtonIndex(5)}>
                      <IconSettings className={`${activeButtonIndex === 5 ? 'text-cyan-600' : 'text-white'}`}/>
                      <span className={`ml-3 ${activeButtonIndex === 5 ? 'text-cyan-600' : 'text-white'}`}>Settings</span>
                    </Link>
                </li>
              </ul>
              <ul className="absolute lg:space-y-10 sm:space-y-8 space-y-4 font-medium pb-6 bottom-0">
                <li>
                      <Link to="/logout" className="sidebar-btn" onClick={() => setActiveButtonIndex(5)}>
                        <IconLogout className={`${activeButtonIndex === 5 ? 'text-cyan-600' : 'text-white'}`}/>
                        <span className={`ml-3 ${activeButtonIndex === 5 ? 'text-cyan-600' : 'text-white'}`}>Logout</span>
                      </Link>
                  </li>
              </ul>
            </div>
          </div>
              <div className="bg-slate-100 pl-32 pt-12 rounded-tl-[250px] rounded-bl-lg">
                <Outlet />
              </div>
        </div>
      </>
    );
};
export default Layout;