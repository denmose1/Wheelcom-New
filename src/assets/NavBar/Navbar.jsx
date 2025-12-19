import React from 'react'
import { NavbarMenu } from '../userData/data'
import { FaCarSide } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from './ResponsiveMenu'; 

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return ( 
    <>
    {/* UPDATED: Added fixed, top-0, z-50, and backdrop-blur */}
    <nav className='fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800'> 
      <div className='container flex justify-between items-center py-4'>
        {/*Logo section*/ }
        <div className='text-2xl flex items-center gap-2 font-bold uppercase text-white'> 
          <FaCarSide className="text-purple-500"/> 
          <p className='text-white'>Wheelcom </p>
          <p className='text-purple-400'>Driving</p>
        </div>

        {/*Menu section*/ }
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-300'> 
            {NavbarMenu.map((item) => (
              <li key={item.id}> 
                <a href={item.link} className='inline-block py-1 px-3 hover:text-purple-400 duration-200 font-semibold'>
                  {item.title}
                </a> 
              </li>
            ))}
          </ul>
        </div>

        {/*Icons section*/ }
        <div className='flex items-center gap-3'>
          <button className='text-2xl text-white hover:bg-purple-600 rounded-full p-2 duration-200'>
            <CiSearch />  
          </button>
          <button className='bg-purple-600 text-white font-semibold hover:bg-purple-700 rounded-md border-2 border-purple-500 px-6 py-2 duration-200 hidden md:block'>
            Login
          </button>
        </div>

        {/*Mobile hamburger menu section*/ }
        <div className='md:hidden text-white cursor-pointer' onClick={() => setOpen(!open)}>
          <IoMdMenu className='text-4xl'/>  
        </div>
      </div>
    </nav>
    
    {/* Pass setOpen so the menu can close when a link is clicked */}
    <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar;