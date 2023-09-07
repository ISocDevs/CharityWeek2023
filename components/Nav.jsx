"use client";

import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
      <nav className='flex-between w-full mb-5 pt-3'>
          <Link href="/" className='flex gap-2 flex-center'>
              <Image
                  src="/assets/images/cw-logo-orange.ico"
                  alt="Charity Week Logo"
                  width={60}
                  height={60}
                  className="object-contain"
              />
              <p className='logo_text'>CW 2023</p>
          </Link>
          {/* Desktop Navigation */}
          <div className='sm:flex hidden'>LUYLFTJRSH</div>
    </nav>
  )
}

export default Nav