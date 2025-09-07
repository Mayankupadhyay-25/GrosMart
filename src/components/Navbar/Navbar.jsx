import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";


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
            <div className='flex items-center gap-x-5'>

                {/* input field */}
                <div className='flex p-1 border-2 border-orange-500 rounded-full'  >
                    <input type="text" nmae="text" placeholder='Search' autoComplete='off' 
                    className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10  flex justify-center items-center rounded-full text-xl '>
                        <IoSearchSharp />
                    </button>
                </div>
                <a href="#" className='taxt-zinc-800 text-2xl'>
                    <GoHeartFill />
                </a>
                 <a href="#" className='taxt-zinc-800 text-2xl'>
                    <HiShoppingBag />

                </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar