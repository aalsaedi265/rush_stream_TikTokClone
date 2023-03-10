import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import tiktik from '../utils/tiktik-logo.png'


const Navbar = () => {
  return ( 
    <div className='w-full flex justify-between items-center border-b-2 border-red-200 py-2 px-4'>
    <Link href='/'>
      <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
        <Image
          className='cursor-pointer'
          src={tiktik}
          alt='logo'
          layout='responsive'
        />
      </div>
      </Link>
    </div>
  )
}

export default Navbar