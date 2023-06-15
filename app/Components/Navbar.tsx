'use client'
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  return (
    <div className='mb-4 py-1 sticky top-0 bg-black w-full left-0 right-0  shadow-md bg-blue-900 z-50'>
      <div className='md:w-11/12 flex justify-between items-center m-auto py-2'>
      <div className='mx-2 md:my-4'>
        <GiHamburgerMenu className='text-2xl text-white'/>
      </div>
      <div className='md:w-1/2'>
        <input type="search" placeholder='search' className='bg-transparent rounded-full pl-4 outline-none border-[1px] py-1 md:w-full md:py-2'/>
      </div>
      <div className='h-full rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-blue-500 font-bold text-xl flex justify-center items-center mx-2'>D</div>
      </div>
    </div>
  )
}

export default Navbar