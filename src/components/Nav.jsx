import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import image from "/src/assets/images/girl.jpeg"

const Nav = () => {
  return (
    <div className='mb-8 text-xl px-8 py-8 bg-white shadow-md'>
        <div className='flex items-center justify-between'>
            <div className=' flex gap-4 items-center'>
                <CiSearch className='text-3xl' />
                <input type="text" placeholder='search anything here' className='outline-none bg-transparent'/>
            </div>
            <div className='flex gap-4 items-center'>
                <IoIosNotificationsOutline className='text-3xl'/>
                <img src={image} alt="profile pix" width={35} className='rounded-full' />
                <span>Alexandro</span>
                <MdOutlineArrowDropDown />

            </div>
        </div>
    </div>
  )
}

export default Nav