import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";


const Navbar = () => {
  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
         <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] items-center px-10 flex justify-between ">
            {/* Logo */}
            <a href="#" className="text-3xl font-bold ">
            Gr<span className='text-orange-500 uppercase'>o</span>sMart
            </a>

            {/* Desktop Menu */}
            <ul className="md:flex   items-center gap-x-18 hidden">
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
                <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'  >
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
                {/* <Hamburguer>  */}
                <a href="#" className='taxt-zinc-800 text-3xl md:hidden '>
                    <TbMenu2 />
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar