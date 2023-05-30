import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { IconX, IconDashboard, IconUser, IconSettings, IconClipboardList, IconLogout, IconMenu2, IconMessage, IconTargetArrow, IconWeight, IconBarbell, IconTimeline, IconLogout2, IconSettings2, IconSearch } from "@tabler/icons-react";

export interface ILayoutProps {};


const Layout: React.FC<ILayoutProps> = (props) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const location = useLocation();
    const temp = location.pathname.indexOf('/', 1)
    const rootPath = location.pathname.slice(0,(temp != (-1)) ? temp : location.pathname.length)

    return (
      <>
        <div className="flex bg-gradient-to-t from-cyan-900 to-primary">
            <aside className="h-screen w-0 sm:w-[250px]">
              <div className={`absolute h-screen w-screen\
               ${toggleSidebar === true ? "bg-black/80 z-20" : "bg-transparent z-0"} sm:bg-transparent transition-all duration-300`}>

              </div>
              <div className={`bg-gradient-to-t from-cyan-900 to-primary fixed h-[100vh] z-30 space-y-16 transition-all duration-100
               ${toggleSidebar === true ? "bg-gradient-to-t from-cyan-900 to-primary \
               w-[250px] sm:w-[250px] sm:flex flex-col" : "w-0 sm:w-[250px]" }`}>
                <div className={`text-3xl font-semibold text-white pt-6 sm:pl-[60px] sm:pt-12
                ${toggleSidebar === true ? "pl-20" : "pl-[calc((100vw/2)-40px)]" }`}>
                  LOGO
                </div>
                <ul className={`sm:flex-col space-y-6 sm:space-y-4 md:space-y-4 lg:space-y-6
                ${toggleSidebar === true ? "" : "absolute sm:static right-10 sm:right-0"} transition-all duration-100`}>
                  <li>
                    <div className={`${rootPath === "/" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/" className={`${rootPath === "/" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconDashboard/>
                        <span className="ml-3">Dashboard</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/clients" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/clients" className={`${rootPath === "/clients" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconUser/>
                        <span className="ml-3">Clients</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/messages" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/messages" className={`${rootPath === "/messages" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconMessage/>
                        <span className="ml-3">Messages</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/programs" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/programs" className={`${rootPath === "/programs" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconTargetArrow/>
                        <span className="ml-3">Programs</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/exerciselibrary" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/exerciselibrary" className={`${rootPath === "/exerciselibrary" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconBarbell/>
                        <span className="ml-3">Exercise Library</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/forms" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/forms" className={`${rootPath === "/forms" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconClipboardList/>
                        <span className="ml-3">Forms</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className={`${rootPath === "/business" ? "sidebar-div-actv" : "sidebar-div"}`}>
                      <Link to="/business" className={`${rootPath === "/business" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                        <IconTimeline/>
                        <span className="ml-3">Business</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className="absolute bottom-32 border-[0.5px] w-full border-slate-200">
                </div>
                  <ul className={`space-y-6 sm:space-y-4 md:space-y-4 lg:space-y-6 absolute bottom-8
                  ${toggleSidebar === true ? "absolute bottom-8" : "absolute bottom-8 right-0 sm:right-12"} transition-all duration-100`}>
                  <li>
                      <div className={`${rootPath === "/settings" ? "sidebar-div-actv" : "sidebar-div"}`}>
                        <Link to="/settings" className={`${rootPath === "/settings" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                          <IconSettings/>
                          <span className="ml-3">Settings</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className={`${rootPath === "/logout" ? "sidebar-div-actv" : "sidebar-div"}`}>
                        <Link to="/logout" className={`${rootPath === "/logout" ? "sidebar-btn-actv" : "sidebar-btn"}`}>
                          <IconLogout/>
                          <span className="ml-3">Logout</span>
                        </Link>
                      </div>
                    </li>
                  </ul>
              </div>
            </aside>
            <IconMenu2 onClick={() => setToggleSidebar(!toggleSidebar)}
                        className={`z-40 cursor-pointer absolute top-5 right-5 text-white h-10 w-10 ${toggleSidebar === true ? "hidden sm:hidden" : "flex sm:hidden" }`}/>
            <IconX onClick={() => setToggleSidebar(!toggleSidebar)}
                        className={`cursor-pointer absolute z-40 top-5 right-5 text-white h-10 w-10 ${toggleSidebar === true ? "flex sm:hidden" : "hidden "}`}/>
            <div className="flex flex-col">
              <div className="fixed shadow-md shadow-slate-400 mt-20 sm:my-2 pt-8 pl-8 rounded-t-3xl sm:rounded-t-xl sm:rounded-b-none bg-white h-[70px] w-screen sm:w-[calc(100vw-260px)]">
                <div className="cursor-pointer h-[40px] absolute w-screen bottom-2 right-[10px] sm:w-[calc(100vw-280px)] bg-slate-100 border-[.5px] border-slate-500 rounded-full ">
                  <IconSearch className="text-slate-600"/>
                </div>
              </div>
              <main className=" mt-20 pt-[70px] sm:my-2 rounded-t-3xl sm:rounded-xl bg-slate-100 h-full w-screen sm:w-[calc(100vw-260px)]">
                  <Outlet />
              </main>
            </div>
        </div>
      </>
    );
};
export default Layout;