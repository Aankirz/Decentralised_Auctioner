import React from "react";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { RiAuctionFill } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const SideBarIcon = ({ icon, text = "tooltip"}) => (
        <div className="sidebar-icon group">
          {icon}
          <span class="sidebar-tooltip group-hover:scale-100 group-hover:scale-100">
            {text}
          </span>
        </div>
  );
 
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-black shadow-lg  dark:bg-gray-900 ">
      <Link to="/">
      <SideBarIcon icon={<AiFillHome size="28" />} text="HOME" linker="/" />
      </Link>
      <Link to="/">
      <SideBarIcon
        icon={<AiFillPlusCircle size="28" />}
        text="CREATE AUCTIONS"
      />
      </Link>
      <Link to="/auctions">
      <SideBarIcon icon={<RiAuctionFill size="28" />} text="AUCTIONS" ></SideBarIcon>
      </Link>
      <SideBarIcon icon={<BiDollarCircle size="28" />} text="BID" />
      <SideBarIcon icon={<ThemeIcon size="28" />} text="DarkMode" />
    </div>
  );
};

export default Sidebar;
