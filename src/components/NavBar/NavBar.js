import React, {useState} from 'react';
import { AiOutlineMenu,AiOutlineCloseSquare } from 'react-icons/ai';


const NavBar = () => {
  const[nav, setNav ]  = useState(false);
  const handleNav = () =>{
      setNav(!nav)

  }

  return (

  <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div ><h1 className=" text-[#FF0000] "> "COMPANY"</h1></div>

<div className="hidden md:flex">
    <ul className="flex text-white items-center ">
        <li >Projects</li>
        <li >Finances</li>
        <li >HR</li>
        <li >Team</li>
        <li >settings</li>
        <li >Log Out</li>
       <button className="ml-4">Contact</button>
    </ul>
</div>


{/* Menu */}
<div onClick={handleNav} className="block md:hidden">
    {nav ? <AiOutlineCloseSquare size={30} className="text-[#ff0000]"/> : 
    <AiOutlineMenu size={30} className="text-[#ff0000]"/>}
</div>


{/* Small Menu */}
<div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 justify-center text-center": "absolute left-[-100%]"}>
    <ul>
<li className="text-2xl">Projects</li>
        <li className="text-2xl">HR</li>
        <li className="text-2xl">Team</li>
        <li className="text-2xl">Settings</li>
        <li className="text-2xl">Finances</li>
        <li className="text-2xl">Log Out</li>

        <button className="m-8">Contact</button> 
        </ul>
</div>
    </div>
    </div>
  
    
  )
}

export default NavBar;