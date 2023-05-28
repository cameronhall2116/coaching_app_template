import React from "react";
import { Outlet } from "react-router-dom";
import { IconSearch, IconHome, IconDashboard, IconFileText } from "@tabler/icons-react";
import { SpotlightProvider, SpotlightAction } from "@mantine/spotlight";

export interface ILayoutProps {};

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
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
    return (
      <>
        <div className="grid grid-cols-[200px_auto] bg-gradient-to-t from-cyan-900 to-slate-950">
          <SpotlightProvider
            actions={actions}
            searchIcon={<IconSearch size="1.2rem" />}
            searchPlaceholder="Search..."
            shortcut="mod + shift + c"
            nothingFoundMessage="Nothing found..."
          ></SpotlightProvider>
          <div className=" h-screen ">
            <h1 className="pl-16 pt-12 font-bold text-white text-3xl">LOGO</h1>
          </div>
          <div className="bg-slate-50 pl-32 pt-12 rounded-tl-[250px] rounded-bl-lg">
            <Outlet />
          </div>
        </div>
      </>
    );
};

export default Layout;