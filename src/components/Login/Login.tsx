import { SignInButton } from '@clerk/clerk-react'

import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  return (
    <div className='flex h-screen bg-customWisper'>
      <div className='hidden sm:flex sm:flex-1'>
        <img className= "h-full w-full object-cover" src="/src/assets/imagem-fundo-login.jpg" alt="Plantas Login" />
      </div>
      
      <div className='flex flex-col h-full w-full sm:flex-1 items-center justify-center'>
          <div className='flex items-center justify-center bg-customLunarGreen rounded-full mt-4 h-40 w-40 sm:h-48 sm:w-48 mx-auto lg:h-56 lg:w-56'>
            <FaUserCircle  className='text-customWisper size-40 sm:size-44 lg:size-52' />
          </div>
        <div className='flex justify-center p-10'>
          <button className="w-48 p-4 bg-customLunarGreen text-sm font-raleway text-customWhite text-center transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen hover:scale-105 shadow-2xl">
            <SignInButton mode="redirect" forceRedirectUrl="/home" />
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Login