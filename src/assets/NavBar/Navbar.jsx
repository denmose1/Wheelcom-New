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
    <nav className='bg-gray-700'> 
      <div className='container flex justify-between items-center py-4'>
        {/*Logo section*/ }
        <div className='text-2xl flex items-center gap-2 font-bold uppercase text-white'> 
          <FaCarSide /> 
          <p className='text-green-400'>Wheelcom </p>
          <p 
          className='text-purple-300' // Adjusted highlight color for better visibility
          >Driving</p>

        </div>
        {/*Menu section*/ }
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-300'> 
            {
              NavbarMenu.map((item) => {
                return <li key ={item.id}> 
                <a href={item.link} className='
                inline-block py-1 px-3 hover:text-purple-400 duration-200 // Adjusted hover color
                font-semibold'
                >{item.title}</a> 
                </li>;
              })
            }
          </ul>
        </div>
        {/*Icons section*/ }
        <div className='flex items-center gap-3'>
          <button className='text-2xl text-white hover:bg-purple-600 
           hover:text-white rounded-full p-2 duration-200'>
            <CiSearch className=''/>  
          </button>
          <button className='bg-purple-600 text-white font-semibold
          hover:bg-purple-700 rounded-md border-2 border-purple-500 px-6 py-2
          duration-200 hidden md:block'>
            Login
          </button>
        </div>
        {/*Mobile hamburger menu section*/ }
        <div className='md:hidden text-white' onClick={() => setOpen(!open)}>
          <IoMdMenu className='text-4xl'/>  
        </div>
      </div>
    </nav>
    {/*Mobile menu dropdown*/ }
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar;