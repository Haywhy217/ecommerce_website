import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* MOBILE */}
      <div className='flex items-center justify-between h-full'>
      <Link href="/">
     <div className='text-2xl tracking-wide'>LuxeLine</div>
      </Link>
      <Menu/>
      </div>
      {/* BIGGER SCREENS */}
        
        <div className='hidden md:flex items-center justify-between h-full gap-8'>
        {/* LEFT */}
            <div className='w-1/3'>
            <Link href='/'>
            <Image src='/logo.png'alt='logo'width={24} height={24}/>
            <div className='text-2xl tracking-wide'>LuxeLine</div>
            </Link>
            
            </div>
            {/* RIGHT */}
            <div className='w-2/3'></div>
        </div>
    </div>
  )
}

export default Navbar