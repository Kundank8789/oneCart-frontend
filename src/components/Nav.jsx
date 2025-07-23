import React from 'react'
import logo from "../assets/vcart-logo.png"
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";



function Nav() {
  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center  justify-between px-[30px] shadow-md shadow-black'>
         
         <div className='w-[30px] flex items-center justify-start gap-[10px]'>
            <img src={logo} alt="" className='w-[30px]' />
            <h1 className='text-[25px] text-[black] font-sans'>OneCart</h1>
         </div>
         <div className='w-[40%]'>
            <ul className='flex items-center justify-between gap-[19px] text-[white] '>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl '>Home</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl '>Collection</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl '>About</li>
                <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl '>Contact</li>
            </ul>
         </div>
         <div className='w-[30px] flex items-center justify-end gap-[20px]'>
            <IoSearch className='w-[38px] h-[38px] text-[#000000] cursor-pointer'/>
            <FaUser className='w-[29px] h-[29px] text-[#000000] cursor-pointer'/>
            <IoMdCart className='w-[30px] h-[30px] text-[#000000] cursor-pointer'/>


         </div>
    </div>
  )
}

export default Nav