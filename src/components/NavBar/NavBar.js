import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import useToken from "../../useToken";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();

  const { clearToken } = useToken();

  return (
    <div className="w-full h-[95px] bg-black  outline outline-2 outline-offset-0 outline-red-700 ">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full ">
        <div>
          <h1 className=" text-[#FF0000] "> "COMPANY"</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex text-white items-center hover:cursor-pointer">
            <li class="hover:text-[#FF0000] ">Projects</li>
            <li class="hover:text-[#FF0000]">Finances</li>
            <li class="hover:text-[#FF0000]">HR</li>
            <li class="hover:text-[#FF0000]">Team</li>
            <li class="hover:text-[#FF0000]"> settings</li>
            <button
              className="ml-4"
              onClick={() => {
                clearToken();
                navigate("/login");
              }}
            >
              Log Out
            </button>

            <button className="ml-4">Contact</button>
          </ul>
        </div>

        {/* Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineCloseSquare
              size={30}
              className="text-[#ff0000] hover:cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-[#ff0000] hover:cursor-pointer"
            />
          )}
        </div>

        {/* Small Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl hover:text-[#FF0000]">Projects</li>
            <li className="text-2xl hover:text-[#FF0000]">HR</li>
            <li className="text-2xl hover:text-[#FF0000]">Team</li>
            <li className="text-2xl hover:text-[#FF0000]">Settings</li>
            <li className="text-2xl hover:text-[#FF0000]">Finances</li>
            <li
              className="text-2xl hover:text-[#FF0000] hover:cursor-pointer"
              onClick={() => {
                clearToken();
                navigate("/login");
              }}
            >
              Log Out
            </li>

            <button className="m-8">Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
