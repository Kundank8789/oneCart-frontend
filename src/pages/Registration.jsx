import React from 'react'
import logo from '../assets/vcart logo copy.png'
import { useNavigate } from 'react-router-dom'

function Registration  ()  {
    let navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
        <div className='w-[100vw] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-[40px]' src={logo} alt="" />    
        <h1 className='text-[22px] front-sans'>oneCart</h1>
        </div>
        <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
            <span className='text-[25px] font-semibold'>Registration Page</span>
            <span className='text-[16px]'>Welcome to oneCart, place your order</span>
        </div>
        <div></div>
        </div>
  )
}

export default Registration