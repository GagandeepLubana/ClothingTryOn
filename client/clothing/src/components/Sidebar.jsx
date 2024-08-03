import React from "react";
import icon from "../images/icon.png";
import clothes from "../images/icons/clothes.png";
import discover from "../images/icons/discover.png";
import history from "../images/icons/history.png";
import help from "../images/icons/help.png";
import profile from "../images/icons/profile.png";
import settings from "../images/icons/settings.png";
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen p-2">
      <div className="w-full h-full flex flex-col bg-secondary rounded-lg outline outline-1 outline-gray-500 p-2">
        <a
          className="flex gap-2 font-black text-xl hover:text-white p-2"
          href="/"
        >
          <img src={icon} alt="Logo" className="w-[24px] h-[24px]"></img>
          <p>FittingRoom</p>
        </a>
        <div className="w-full">
          <a
            href="/tryon"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={clothes} alt="Logo" className="w-[24px] h-[24px]"></img>
            Try-On Garments
          </a>
          <a
            href="/discover"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={discover} alt="Logo" className="w-[24px] h-[24px]"></img>
            Discover
          </a>
          <a
            href="/prev"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={history} alt="Logo" className="w-[24px] h-[24px]"></img>
            Previous Try-Ons
          </a>
          <a
            href="/help"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={help} alt="Logo" className="w-[24px] h-[24px]"></img>
            Help
          </a>
        </div>
        <div className="w-full">
          <a
            href="/profile"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={profile} alt="Logo" className="w-[24px] h-[24px]"></img>
            Profile
          </a>
          <a
            href="/settings"
            className="flex gap-3 w-full p-2 rounded-lg outline outline-0 outline-[#3F3F3F] hover:bg-tertiary hover:outline-1"
          >
            <img src={settings} alt="Logo" className="w-[24px] h-[24px]"></img>
            Settings
          </a>
        </div>
        <Logout/>
      </div>
    </div>
  );
}
