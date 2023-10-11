import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineMenu,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  const { pathname } = useLocation();

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const subMenuRef = useRef();
  useOutsideClick(subMenuRef, () => setIsOpenSubMenu(false));
  return (
    <>
      {!pathname.includes("messages") && (
        <div
          className={`sidebar z-50  transition-all duration-150 w-full ease-in-out md:rounded-r-3xl  md:h-full lg:w-1/6 lg:max-w-none md:max-w-fit dark:bg-slate-900 bg-white  dark:text-white text-black  md:relative absoolute`}
        >
          <Logo />
          <SidebarMenu>
            <div
              onClick={() => setIsOpenSubMenu(true)}
              className="sidebarListItem hidden md:flex justify-center md:justify-normal md:p-3  font-bold  lg:w-1/7 rounded-2xl  dark:md:hover:bg-slate-800 transition duration-150 ease-in-out fixed left-2  bottom-2"
            >
              <AiOutlineMenu className="lg:w-9 lg:h-9 w-7 h-7 " />
              <span className="sidebarListItemText text-lg items-center hidden lg:flex font-bold ">
                &nbsp;&nbsp;&nbsp;&nbsp;More
              </span>
            </div>
            {isOpenSubMenu && (
              <div
                ref={subMenuRef}
                className="subMenuContainer bg-slate-900 rounded-xl hidden lg:flex items-center  flex-col p-3 max-h-fit w-[95%] absolute bottom-1"
              >
                <Submenu />
              </div>
            )}
          </SidebarMenu>
        </div>
      )}
    </>
  );
}

export default Sidebar;

function SidebarMenu({ children }) {
  const menuItems = [
    { title: "Home", id: 1, direction: "/" },
    { title: "Search", id: 2, direction: "/search" },
    { title: "Explore", id: 3, direction: "/explore" },
    { title: "Messages", id: 4, direction: "/messages" },
    { title: "Notifications", id: 5, direction: "/notifications" },
    { title: "Create", id: 6, direction: "/create" },
    { title: "Profile", id: 7, direction: "/profile" },
  ];
  return (
    <div className="sidebarMenu h-14 md:h-3/5 flex-col cursor-pointer md:mx-2">
      <div className="sidebarList overflow-hidden h-14 md:h-full flex md:flex-col justify-around items-center md:items-start ">
        {menuItems.map((item) => (
          <SidebarMenuMenuItem
            title={item.title}
            direction={item.direction}
            key={item.id}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
function SidebarMenuMenuItem({ title, direction = "" }) {
  return (
    <NavLink
      to={direction}
      className={` sidebarListItem  flex justify-center md:justify-normal md:p-3  font-bold  md:w-full rounded-2xl lg:hover:bg-slate-800 transition duration-150 ease-in-out`}
    >
      {title == "Home" ? (
        <AiOutlineHome className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Search" ? (
        <AiOutlineSearch className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Explore" ? (
        <MdOutlineExplore className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Messages" ? (
        <AiOutlineMessage className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Notifications" ? (
        <AiOutlineHeart className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : title === "Create" ? (
        <AiOutlinePlusCircle className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7  " />
      ) : (
        <BsPerson className="xl:w-9 xl:h-9 lg:w-8 lg:h-8 w-7 h-7   " />
      )}

      <span className="sidebarListItemText text-sm xl:text-lg items-center hidden lg:flex xl:font-bold ">
        &nbsp;&nbsp;&nbsp;&nbsp;{title}
      </span>
    </NavLink>
  );
}
function Logo() {
  return (
    <div className="userInfo hidden  lg:flex cursor-pointer hover:opacity-70 hover:text-gray-400 transition duration-150 ease-in-out">
      <span className="sidebarListItem flex md:py-5 md:pl-5 xl:pr-1 font-bold ">
        {/* <BsPerson className="w-8 h-8" /> */}
        <div className="flex items-center xl:justify-around lg:justify-start">
          <img
            className="shareProfileImg cursor-pointer object-cover w-10 h-10 rounded-full shadow-2xl shadow-white "
            src="/assets/person/1.jpeg"
            alt=""
          />
          &nbsp;&nbsp;
        </div>
      </span>
      <span className="sidebarListItemText  whitespace-nowrap items-center hidden lg:flex md:font-medium lg:font-normal text-sm xl:text-lg  xl:font-bold">
        Maryam Ebrahimi
      </span>
    </div>
  );
}

function Submenu() {
  const menuItems = [
    { title: "Settings", id: 1, direction: "/settings" },
    { title: "Swith Account", id: 6, direction: "/create" },
    { title: "Log Out", id: 7, direction: "/profile" },
  ];
  return (
    <>
      {menuItems.map((item) => (
        <div className="flex hover:bg-slate-600 w-full items-center max-h-fit p-3 m-px rounded-xl transition duration-150 ease-in-out">
          <span>
            {item.title == "Settings" ? (
              <IoMdSettings className="w-7 h-7 " />
            ) : item.title === "Log Out" ? (
              <CiLogout className="w-7 h-7 " />
            ) : item.title === "Swith Account" ? (
              <AiOutlineUserSwitch className="w-7 h-7 " />
            ) : (
              <BsPerson className="w-7 h-7  " />
            )}
          </span>
          &nbsp; &nbsp;
          <NavLink to={item.direction} className="">
            {item.title}
          </NavLink>
        </div>
      ))}
    </>
  );
}
