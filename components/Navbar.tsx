import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-black'>
      <div className='container mx-auto py-5 flex items-center gap-8'>
        <Link href='/'>
          <Image className='w-28' src={logo} alt='' width={400} height={400} />
        </Link>
        <div className='text-white flex gap-5'>
          <Link href='#'>Dashboard</Link>
          <Link href='#'>Tasks</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
