import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "/src/assets/images/wecare.png"
import { GrOverview } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { RiCupLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { CiDollar } from "react-icons/ci";
import { GrCube } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { RiSettingsLine } from "react-icons/ri";
import { CgFlagAlt } from "react-icons/cg";

const Aside = () => {
  return (
    <div className=''>
        <div className='flex flex-col gap-2 items-center mb-6'>
            <img src={logo} alt="wecare logo" width={40} height={40} className='rounded-full'/>
            <span className='opacity-50 text-sm 2xl:text-[16px]'>Medical Admin Dashboard</span>
        </div>
        <h4 className='opacity-70 mb-5'>Main menu</h4>
        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <GrOverview />
            <p>Overview</p>
        </NavLink>

        <NavLink to="/patients" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <IoIosPeople />
            <p>Patients</p>
        </NavLink>

        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <RiCupLine />
            <p>Appointments</p>
        </NavLink>
        <h4 className='opacity-70 mb-5'>Other menu</h4>
        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <FaUserDoctor />
            <p>Doctors</p>
        </NavLink>
        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <IoPersonCircleOutline />
            <p>Employee</p>
        </NavLink>

        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <FcDepartment />
            <p>Department</p>
        </NavLink>

        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <CiDollar />
            <p>Payment</p>
        </NavLink>

        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <GrCube />
            <p>Product & Stock</p>
        </NavLink>
        <h4 className='opacity-70 mb-5'>Helo and Settings</h4>
        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <IoIosHelpCircleOutline />
            <p>Help & Center</p>
        </NavLink>

        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <RiSettingsLine />
            <p>Setting</p>
        </NavLink>
        <NavLink to="/" className='px-2 text-lg flex gap-3 items-center opacity-70 mb-5'>
            <CgFlagAlt />
            <p>Report</p>
        </NavLink>


        

    </div>
  )
}

export default Aside