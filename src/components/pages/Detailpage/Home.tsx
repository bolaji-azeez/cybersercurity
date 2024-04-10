import React from 'react'
import Header from '../../block/Header'
import Cyber from "../../../assets/images/18107-removebg-preview.png"
import Background from "../../../assets/images/17225084_v996-010.jpg"


const Home = () => {
  return (
    <div className='min-h-[100vh] flex-col   w-full bg-center bg-cover flex gap-5 items-center ' style={{backgroundImage: `url(${Background})`}}>
      <Header />

      <div className='w-[75%] h-[80vh] flex justify-between items-center'>
          <div className='w-full '>
            <div className='leading-[3.5rem]'>
              <h2 className='text-[3.5rem] font-bold '>
                <span className='text-[#b1b1b1]'>Think</span>  Cyber Solution 
              </h2>

              <h2 className='text-[3.5rem] font-bold'>
                <span className='text-[#b1b1b1]'>Think</span> Kode10x.....
              </h2>
            </div>
            

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Unde dolor doloremque temporibus vitae ad, laboriosam accusantium blanditiis rerum delectus porro!
            </p>
             
             <br />

            <button type="button" className="text-[#ffffff] bg-[#323f76] border border-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mb-2 dark:border-[#323f76]  ">Get Started</button>


          </div>

          <div className='h-[100%] w-[100%]  p-4 bg-center bg-cover  sm:p-6 md:p-8 '  style={{backgroundImage: `url(${Cyber})`}}>


          </div>

      </div>

      

      
      
    </div>
  )
}

export default Home
