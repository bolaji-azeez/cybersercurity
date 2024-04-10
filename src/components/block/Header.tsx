import React from 'react'
import Kod10x from "../../assets/images/kode10x.jpg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <div className='h-[5rem] w-full flex justify-center items-center bg-transparent'>
        <div className='w-[75%] bg-transparent flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <div className='h-[2rem] w-[2rem] bg-cover bg-center'  style={{backgroundImage: `url(${Kod10x})`}}>

                </div>
                <h2 className='text-[1.6rem] font-semibold text-[#323f76]'>
                    ODE10X
                </h2>
            </div>

            <div className='flex justify-between items-center w-[20rem] text-[#323f76] hover:cursor-pointer'>
                <nav className='font-medium'>
                    Freelancer
                </nav>
                <nav className='font-medium'>
                   Business
                </nav>
                <nav className='font-medium'>
                    Hire
                </nav>
                

               
            </div>

            

            <div className='flex justify-between items-center w-[15rem]'>
                <Link to="/login">
                <button type="button" className="text-[#323f76] hover:text-white border border-[#323f76] hover:bg-[#323f76] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center me-2 mb-2 dark:border-[#323f76] dark:text-[#323f76] dark:hover:text-white">Log In</button>

                </Link>
            <button type="button" className="text-[#ffffff] bg-[#323f76] border border-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2 text-center me-2 mb-2 dark:border-[#323f76]  ">Register</button>

            </div>
           

        </div>

   </div>
  )
}

export default Header
