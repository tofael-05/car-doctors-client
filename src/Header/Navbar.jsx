import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import logo from '../assets/logo.svg'

const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav>
            <div className='max-w-[1240px] mx-auto flex justify-between p-3 items-center'>

                <Link to='/' > <img className='md:w-20 w-14 h-14 md:h-20' src={logo} alt="" /></Link>
                <span className='md:hidden text-2xl'>
                    {
                        toggle ? <GrFormClose onClick={() => setToggle(!toggle)}></GrFormClose> : <HiMenu onClick={() => setToggle(!toggle)}></HiMenu>
                    }
                </span>
                <ul className={`transition-all items-center z-50 duration-300  gap-4 flex bg-black p-3  md:bg-transparent md:flex-row flex-col absolute md:static w-full top-[10.3%] text-white md:text-black  ${toggle ? "left-0" : "-left-full"}`}>
                    <li className='md:w-[30%] mx-auto flex flex-col md:flex-row gap-8  font-medium'>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>About</NavLink>
                        <NavLink to="/services" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Services</NavLink>
                        <NavLink to="/blog" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Blog</NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Contact</NavLink>
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "active" : ""} onClick={() => setToggle(false)}>Login</NavLink>
                    </li>
                    <li className='flex items-center gap-5'>
                        <span> <AiOutlineShopping className='w-6 h-6' /> </span>
                        <span> <AiOutlineSearch className='w-6 h-6 ' /> </span>
                        <Link ><button className='px-6 py-3 text-orange-600 font-semibold border border-orange-600 rounded-md'>Start Applying</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
