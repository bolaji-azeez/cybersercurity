import React from 'react'
import Laptop from "../../../assets/images/2150170124.jpg"


const Card1 = () => {
  return (
    <div className='flex flex-col h-[40rem] w-[75%] justify-center  items-center'>
        <h3>OUR SERVICES</h3>

        <h1 className='text-[2rem] font-medium'>
            Cyber Security Solution
        </h1>

        <div className='flex  w-full justify-between items-center'>

        <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <a href="#">
         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
      <div className="p-5 w-[]">
      <div className='max-w-sm bg-center bg-cover border border-gray-200 rounded-lg shadow h-[12rem]  dark:bg-gray-800 dark:border-gray-700' style={{backgroundImage: `url(${Laptop})`}}> 
      </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Security</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </div>

       
      </div>

      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <a href="#">
         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
      <div className="p-5">
      <div className='max-w-sm bg-center bg-cover border border-gray-200 rounded-lg shadow h-[12rem]  dark:bg-gray-800 dark:border-gray-700' style={{backgroundImage: `url(${Laptop})`}}> 
      </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Security</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </div>

       
      </div>

      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
        <a href="#">
         <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
      <div className="p-5">
      <div className='max-w-sm bg-center bg-cover border border-gray-200 rounded-lg shadow h-[12rem]  dark:bg-gray-800 dark:border-gray-700' style={{backgroundImage: `url(${Laptop})`}}> 
      </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Security</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </div>

       
      </div>

        </div>
     


    </div>
  )
}

export default Card1
