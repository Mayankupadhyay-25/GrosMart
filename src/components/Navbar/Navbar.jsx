import React from 'react'
import { GoHeartFill } from "react-icons/go";
const Navbar = () => {
  return (
    <header className='bg-white'>
         <nav className="max-w-[1400px] mx-auto h-[14vh] justify-between items-center px-10 flex justify-between ">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold ">
            Gr<span className='text-orange-500 uppercase'>o</span>sMart
            </a>

            {/* Desktop Menu */}
            <ul className="flex items-center gap-x-18">
                <li>
                    <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
            </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                </li>
                <li>
                    <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us </a>
                </li>
                
            </ul>

            {/* Nav Action */}
            <div>
                <a href="#">
                    <GoHeartFill />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar