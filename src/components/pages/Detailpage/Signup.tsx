import React from 'react'
import Kod10x from "../../../assets/images/kode10x.jpg"

const Signup:React.FC = () => {
  return (
    <div className='h-[100vh] flex w-screen item-center justify-center'>
    
        <div className="w-50% flex justify-center items-center p-4 bg-white border border-gray-200  shadow-2xl sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
            <h5 className="text-[2rem] text-center font-medium text-gray-900 dark:text-white">Sign Up</h5>

            <div className='w-[25rem]'>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">fullname</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
            </div>

            <div className='w-[25rem]'>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="johndoe@gmail.com" required />
            </div>
            <div className='w-[25rem]'>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#283673] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account? <a href="#" className="text-[#283673] hover:underline dark:text-blue-500">Log in</a>
            </div>
          </form>
       </div>

       <div className="h-[100%] w-full  flex justify-center items-center p-4 bg border border-gray-200  shadow sm:p-6 md:p-8  dark:border-gray-700"  >
              <div className='h-[70%] w-[50%]  p-4 bg-center bg-cover shadow-2xl rounded-l-lg  sm:p-6 md:p-8 '  style={{backgroundImage: `url(${Kod10x})`}}>

              </div>
        </div>

   </div>

  )
}

export default Signup
